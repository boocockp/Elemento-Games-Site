import * as serverRuntime from './serverRuntime.cjs'
const {runtimeFunctions} = serverRuntime
const {globalFunctions} = serverRuntime
const {appFunctions} = serverRuntime
const {components} = serverRuntime

const {If, Record, Log, Check, Not, Now} = globalFunctions
const {GetUser, Update, Add, CurrentUser, Query, UpdateUser, Get} = appFunctions
const {FirestoreDataStore, Collection} = components

const ServerDataStore = new FirestoreDataStore({collections: `Teams
Users
Invites`})
const Teams = new Collection({dataStore: ServerDataStore, collectionName: 'Teams'})
const Users = new Collection({dataStore: ServerDataStore, collectionName: 'Users'})
const Invites = new Collection({dataStore: ServerDataStore, collectionName: 'Invites'})

const PuzzlesServer = (user) => {

function CurrentUser() { return runtimeFunctions.asCurrentUser(user) }

async function UpdateUser(changes) {
    let user = await GetUser()
    If(user, async () => await Update(Users, user.id, changes), async () => await Add(Users, Record(changes, 'id', user.id)))
}

async function GetUser(changes) {
    let userId = CurrentUser().uid
    let userResult = await Query(Users, {id: userId})
    return userResult[0]
}

async function NewTeam(teamData) {
    Log('In NewTeam', teamData)
    let user = await GetUser()
    Check(Not(user?.TeamId), 'Cannot create new team as already a member of a team')
    let team = await Add(Teams, Record('Name', teamData.TeamName, 'OwnerId', CurrentUser().uid))
    await UpdateUser(Record('TeamId', team.id))
    Log('Done NewTeam')
}

async function InviteTeamMember(inviteId) {
    let user = await GetUser()
    let team = await Get(Teams, user?.TeamId)
    Check(team?.OwnerId == user.id, 'Cannot invite a team member unless you are the owner')
    await Add(Invites, Record('id', inviteId, 'TeamId', team.id, 'DateCreated', Now()))
}

return {
    UpdateUser: {func: UpdateUser, update: true, argNames: ['changes']},
    GetUser: {func: GetUser, update: false, argNames: ['changes']},
    NewTeam: {func: NewTeam, update: true, argNames: ['teamData']},
    InviteTeamMember: {func: InviteTeamMember, update: true, argNames: ['inviteId']}
}
}

export default PuzzlesServer