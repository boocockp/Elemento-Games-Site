import * as serverRuntime from './serverRuntime.cjs'
const {runtimeFunctions} = serverRuntime
const {globalFunctions} = serverRuntime
const {appFunctions} = serverRuntime
const {components} = serverRuntime

const {If, Record, Log, Check, Not} = globalFunctions
const {GetUser, Update, Add, CurrentUser, Query, UpdateUser} = appFunctions
const {FirestoreDataStore, Collection} = components

const ServerDataStore = new FirestoreDataStore({collections: `Teams
Users`})
const Teams = new Collection({dataStore: ServerDataStore, collectionName: 'Teams'})
const Users = new Collection({dataStore: ServerDataStore, collectionName: 'Users'})

const PuzzlesServer = (user) => {

function CurrentUser() { return runtimeFunctions.asCurrentUser(user) }

async function UpdateUser(changes) {
    let user = await await GetUser()
    If(user, async () => await await Update(Users, user.id, changes), async () => await await Add(Users, Record(changes, 'id', user.id)))
}

async function GetUser(changes) {
    let userId = CurrentUser().uid
    let userResult = await await Query(Users, {id: userId})
    return userResult[0]
}

async function NewTeam(teamData) {
    Log('In NewTeam', teamData)
    let user = await await GetUser()
    Check(Not(user?.TeamId), 'Cannot create new team as already a member of a team')
    let team = await await Add(Teams, Record('Name', teamData.TeamName, 'OwnerId', CurrentUser().uid))
    await await UpdateUser(Record('TeamId', team.id))
    Log('Done NewTeam')
}

return {
    UpdateUser: {func: UpdateUser, update: true, argNames: ['changes']},
    GetUser: {func: GetUser, update: false, argNames: ['changes']},
    NewTeam: {func: NewTeam, update: true, argNames: ['teamData']}
}
}

export default PuzzlesServer