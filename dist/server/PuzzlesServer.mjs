import * as serverRuntime from './serverRuntime.cjs'
const {runtimeFunctions} = serverRuntime
const {globalFunctions} = serverRuntime
const {appFunctions} = serverRuntime
const {components} = serverRuntime

const {If, Record, Log, Check, Not, Now, IsNull, Today} = globalFunctions
const {CurrentUser, Update, Add, Query, Get} = appFunctions
const {FirestoreDataStore, Collection} = components

const ServerDataStore = new FirestoreDataStore({collections: `Teams
Users
Invites`})
const Teams = new Collection({dataStore: ServerDataStore, collectionName: 'Teams'})
const Users = new Collection({dataStore: ServerDataStore, collectionName: 'Users'})
const Invites = new Collection({dataStore: ServerDataStore, collectionName: 'Invites'})

const PuzzlesServer = (user) => {

function CurrentUser() { return runtimeFunctions.asCurrentUser(user) }

async function UpdateUserData(changes) {
    let user = await GetUserData()
    let userId = CurrentUser().uid
    If(user, async () => await Update(Users, userId, changes), async () => await Add(Users, Record(changes, 'id', userId)))
}

async function GetUserData() {
    let userId = CurrentUser().uid
    let userResult = await Query(Users, {id: userId})
    return userResult[0]
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

return {
    UpdateUserData: {func: UpdateUserData, update: true, argNames: ['changes']},
    GetUserData: {func: GetUserData, update: false, argNames: []},
    NewTeam: {func: NewTeam, update: true, argNames: ['teamData']},
    InviteTeamMember: {func: InviteTeamMember, update: true, argNames: ['inviteId']},
    AcceptInvite: {func: AcceptInvite, update: true, argNames: ['inviteId']},
    LeaveTeam: {func: LeaveTeam, update: true, argNames: []}
}
}

export default PuzzlesServer