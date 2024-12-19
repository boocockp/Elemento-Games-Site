import * as serverRuntime from './serverRuntime.cjs'
const {runtimeFunctions} = serverRuntime
const {globalFunctions} = serverRuntime
const {appFunctions} = serverRuntime
const {components} = serverRuntime

const {Today, If, Record, Log, Check, Not, Now, IsNull, ForEach, Max, Count, Sum, Floor, DateAdd, GroupBy, Select} = globalFunctions
const {Get, GetIfExists, CurrentUser, Update, Add, Query} = appFunctions
const {FirestoreDataStore, Collection} = components

const ServerDataStore = new FirestoreDataStore({collections: `Teams
Users
Invites
GamePlays
Puzzles
DayPuzzles`})
const Teams = new Collection({dataStore: ServerDataStore, collectionName: 'Teams'})
const Users = new Collection({dataStore: ServerDataStore, collectionName: 'Users'})
const Invites = new Collection({dataStore: ServerDataStore, collectionName: 'Invites'})
const GamePlays = new Collection({dataStore: ServerDataStore, collectionName: 'GamePlays'})
const Puzzles = new Collection({dataStore: ServerDataStore, collectionName: 'Puzzles'})
const DayPuzzles = new Collection({dataStore: ServerDataStore, collectionName: 'DayPuzzles'})

const PuzzlesServer = (user) => {

function CurrentUser() { return runtimeFunctions.asCurrentUser(user) }

async function PuzzleOfTheDay(date) {
    let puzzleDay = date ?? Today()
    let dayPuzzleId = await (await puzzleDay.toISOString()).substring(0, 10)
    let dayPuzzle = await Get(DayPuzzles, dayPuzzleId)
    return await GetIfExists (Puzzles, dayPuzzle.puzzleId)
}

async function UpdateUserData(changes) {
    let user = await GetUserData()
    let userId = CurrentUser().uid
    await If(user, async () => await Update(Users, userId, changes), async () => await Add(Users, Record(changes, 'id', userId, 'DisplayName', CurrentUser().Name)))
}

async function GetUserData() {
    return await GetIfExists(Users, CurrentUser()?.uid)
}

async function NewTeam(teamData) {
    Log('In NewTeam', teamData)
    let user = await GetUserData()
    Check(Not(user?.TeamId), 'Cannot create new team as already a member of a team')
    let team = await Add(Teams, Record('Name', teamData.TeamName, 'OwnerId', CurrentUser().uid))
    await UpdateUserData(Record('TeamId', team.id))
    Log('Done NewTeam')
}

async function InviteTeamMember(inviteId) {
    let user = await GetUserData()
    let team = await Get(Teams, user?.TeamId)
    Check(team?.OwnerId == user.id, 'Cannot invite a team member unless you are the owner')
    await Add(Invites, Record('id', inviteId, 'TeamId', team.id, 'DateCreated', Now()))
}

async function AcceptInvite(inviteId) {
    let user = await GetUserData()
    let invite = await Get(Invites, inviteId)
    Check(IsNull(invite.DateUsed), 'This invite has already been used')
    Check(IsNull(user?.TeamId), 'Cannot join a team if you are already in a team')
    await UpdateUserData(Record('TeamId', invite.TeamId, 'DateJoinedTeam', Today()))
    await Update(Invites, inviteId, Record('DateUsed', Now()))
}

async function LeaveTeam() {
    await UpdateUserData(Record('TeamId', null, 'DateJoinedTeam', null))
}

async function TeamGamePlays() {
    let teamId = (await GetUserData())?.TeamId
    let gamePlays = await If(teamId, async () => await Query(GamePlays, {TeamId: teamId}))
    let users = await If(teamId, async () => await Query(Users, {TeamId: teamId}))
    return Record({gamePlays: gamePlays, users: users})
}

async function TeamStats(teamScoreGroups) {
    function teamItem(scoreItems) {
      let teamId = scoreItems[0].TeamId
      let scores = ForEach(scoreItems, $item => $item.HighScore)
      let max = Max(scores)
      let count = Count(scores)
      let total = Sum(scores)
      let ave = Floor(total/count)
      return Record({TeamId: teamId, Max: max, Average: ave, Total: total, Count: count})
    }
    return ForEach(teamScoreGroups, $item => teamItem($item))
}

async function PotdLeagueData(date) {
    let puzzleId = (await PuzzleOfTheDay(date))?.id
    return await PuzzleDayLeagueData(puzzleId, date)
}

async function PuzzleDayLeagueData(puzzleId, date) {
    let dateTo = DateAdd(date, 1,  'days')
    let plays = await Query(GamePlays, [['PuzzleId', '==', puzzleId], ['DateTime', '>=', date], ['DateTime', '<', dateTo]])
    let playerGroups = GroupBy(plays, $item => $item.UserId)
    let playerHighScores = ForEach(playerGroups, ($item, $index) => Record('UserId', $item[0].UserId, 'TeamId', $item[0].TeamId, 'HighScore', Max(ForEach($item, ($item, $index) => $item.Score))))
    let teamScoreGroups = GroupBy(playerHighScores, $item => $item.TeamId)
    let teamStats = await TeamStats(teamScoreGroups)
    let qualifyingTeams = Select(teamStats, ($item, $index) => $item.Count > 1)
    return qualifyingTeams
}

async function TeamNames() {
    let allTeams = await Query(Teams, {})
    let teamEntries = ForEach(allTeams, $item => [$item.id, $item.Name])
    return Object.fromEntries(teamEntries)
}

async function DayPuzzleData() {
    let puzzles = await Query(Puzzles, {})
    
    let today = Today().toISOString().substring(0, 10)
    function puzzleName(id) {
      return puzzles.find( p => p.id === id)?.name
    }
    let allPreviousDayPuzzles = await Query(DayPuzzles, [['id', '<', today]])
    let entries = ForEach(allPreviousDayPuzzles, $item => [$item.id, {id: $item.id, Name: puzzleName($item.puzzleId)}])
    return Object.fromEntries(entries)
}

return {
    PuzzleOfTheDay: {func: PuzzleOfTheDay, update: false, argNames: ['date']},
    UpdateUserData: {func: UpdateUserData, update: true, argNames: ['changes']},
    GetUserData: {func: GetUserData, update: false, argNames: []},
    NewTeam: {func: NewTeam, update: true, argNames: ['teamData']},
    InviteTeamMember: {func: InviteTeamMember, update: true, argNames: ['inviteId']},
    AcceptInvite: {func: AcceptInvite, update: true, argNames: ['inviteId']},
    LeaveTeam: {func: LeaveTeam, update: true, argNames: []},
    TeamGamePlays: {func: TeamGamePlays, update: false, argNames: []},
    PotdLeagueData: {func: PotdLeagueData, update: false, argNames: ['date']},
    PuzzleDayLeagueData: {func: PuzzleDayLeagueData, update: false, argNames: ['puzzleId', 'date']},
    TeamNames: {func: TeamNames, update: false, argNames: []},
    DayPuzzleData: {func: DayPuzzleData, update: false, argNames: []}
}
}

export default PuzzlesServer