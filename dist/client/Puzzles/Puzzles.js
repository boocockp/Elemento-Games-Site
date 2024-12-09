const runtimeUrl = window.elementoRuntimeUrl || 'https://elemento.online/lib/runtime.js'
const Elemento = await import(runtimeUrl)
const {React, trace, elProps, stateProps, wrapFn} = Elemento

// HomePage.js
function HomePage(props) {
    const pathTo = name => props.path + '.' + name
    const {Page, TextElement, Button} = Elemento.components
    const _state = Elemento.useGetStore()
    const app = _state.useObject('Puzzles')
    const {ShowPage} = app
    const TodaysPuzzleButton_action = React.useCallback(wrapFn(pathTo('TodaysPuzzleButton'), 'action', async () => {
        await ShowPage(TodaysPuzzle)
    }), [])
    const GameArchive_action = React.useCallback(wrapFn(pathTo('GameArchive'), 'action', async () => {
        await ShowPage(PuzzleArchive)
    }), [])
    const AboutLink_action = React.useCallback(wrapFn(pathTo('AboutLink'), 'action', async () => {
        await ShowPage(AboutPage)
    }), [])
    Elemento.elementoDebug(() => eval(Elemento.useDebugExpr()))

    return React.createElement(Page, elProps(props.path).props,
        React.createElement(TextElement, elProps(pathTo('Heading1')).styles(elProps(pathTo('Heading1.Styles')).fontFamily('Tahoma').fontSize('20').color('green').marginTop('20px').props).content('The No Boredom games and puzzles site!').props),
        React.createElement(TextElement, elProps(pathTo('Para1')).content(`Word puzzles, number games, visual brainteasers - try a different one every day.

Most take less than 5 minutes, so you can fit them in whenever you want.`).props),
        React.createElement(Button, elProps(pathTo('TodaysPuzzleButton')).content('Today\'s Featured Puzzle').appearance('outline').action(TodaysPuzzleButton_action).styles(elProps(pathTo('TodaysPuzzleButton.Styles')).backgroundColor('orange').color('white').fontSize('28').textTransform('inherit').props).props),
        React.createElement(Button, elProps(pathTo('GameArchive')).content('All the Puzzles').appearance('link').action(GameArchive_action).styles(elProps(pathTo('GameArchive.Styles')).fontSize('20').props).props),
        React.createElement(Button, elProps(pathTo('AboutLink')).content('About Puzzle Teams').appearance('link').action(AboutLink_action).styles(elProps(pathTo('AboutLink.Styles')).fontSize('20').props).props),
    )
}

// AboutPage.js
function AboutPage(props) {
    const pathTo = name => props.path + '.' + name
    const {Page, TextElement, Button} = Elemento.components
    const _state = Elemento.useGetStore()
    const app = _state.useObject('Puzzles')
    const {ShowPage} = app
    const TodaysPuzzleButton_action = React.useCallback(wrapFn(pathTo('TodaysPuzzleButton'), 'action', async () => {
        await ShowPage(TodaysPuzzle)
    }), [])
    const PuzzleArchive_action = React.useCallback(wrapFn(pathTo('PuzzleArchive'), 'action', async () => {
        await ShowPage(PuzzleArchive)
    }), [])
    Elemento.elementoDebug(() => eval(Elemento.useDebugExpr()))

    return React.createElement(Page, elProps(props.path).props,
        React.createElement(TextElement, elProps(pathTo('Heading1')).styles(elProps(pathTo('Heading1.Styles')).fontFamily('Tahoma').fontSize('20').color('green').props).content('The No Boredom puzzle site!').props),
        React.createElement(TextElement, elProps(pathTo('Para1')).content(`Challenge your mind with a fresh game or puzzle every day.
Word puzzles, number games, visual brainteasers and more.
Each takes less than 5 minutes, so you can fit it in whenever you want.`).props),
        React.createElement(TextElement, elProps(pathTo('Heading2')).styles(elProps(pathTo('Heading2.Styles')).fontFamily('Tahoma').fontSize('20').color('green').props).content('Team up with your friends').props),
        React.createElement(TextElement, elProps(pathTo('Para2')).content(`You're welcome to play by yourself, but the real fun begins when you  start a team.  
Teams compete with each other in leagues and one-off showdowns.  
The more people you get in your team, the better your chances!`).props),
        React.createElement(TextElement, elProps(pathTo('Heading3')).styles(elProps(pathTo('Heading3.Styles')).fontFamily('Tahoma').fontSize('20').color('green').props).content('Showcase your ideas').props),
        React.createElement(TextElement, elProps(pathTo('Text9')).content(`Puzzle Teams runs off your creativity.
If you have an idea for a great puzzle, send it to us and you could see it on the site in a few days.
Even better - program it yourself with the easy to use Elemento tool and get everyone playing the puzzle YOU created!`).props),
        React.createElement(Button, elProps(pathTo('TodaysPuzzleButton')).content('Today\'s Featured Game').appearance('outline').action(TodaysPuzzleButton_action).styles(elProps(pathTo('TodaysPuzzleButton.Styles')).backgroundColor('orange').color('white').fontSize('20').textTransform('inherit').props).props),
        React.createElement(Button, elProps(pathTo('PuzzleArchive')).content('All the Games').appearance('link').action(PuzzleArchive_action).styles(elProps(pathTo('PuzzleArchive.Styles')).fontSize('20').props).props),
    )
}

// TodaysPuzzle.js
function TodaysPuzzle(props) {
    const pathTo = name => props.path + '.' + name
    const {Page, Frame} = Elemento.components
    const _state = Elemento.useGetStore()
    const LatestPuzzleUrl = _state.useObject('Puzzles.LatestPuzzleUrl')
    Elemento.elementoDebug(() => eval(Elemento.useDebugExpr()))

    return React.createElement(Page, elProps(props.path).styles(elProps(pathTo('TodaysPuzzle.Styles')).paddingLeft('0').paddingRight('0').paddingTop('0').paddingBottom('0').props).props,
        React.createElement(Frame, elProps(pathTo('GameFrame')).source(LatestPuzzleUrl()).styles(elProps(pathTo('GameFrame.Styles')).height('calc(100% + 16px)').width('calc(100% + 8px)').marginLeft('-4px').marginRight('-4px').marginTop('-8px').props).props),
    )
}

// ArchivedPuzzle.js
function ArchivedPuzzle(props) {
    const pathTo = name => props.path + '.' + name
    const {Page, Calculation, Frame} = Elemento.components
    const {Get} = Elemento.appFunctions
    const _state = Elemento.useGetStore()
    const app = _state.useObject('Puzzles')
    const {CurrentUrl} = app
    const Puzzles = _state.useObject('Puzzles.Puzzles')
    const PuzzleId = _state.setObject(pathTo('PuzzleId'), new Calculation.State(stateProps(pathTo('PuzzleId')).value(CurrentUrl().pathSections[0]).props))
    Elemento.elementoDebug(() => eval(Elemento.useDebugExpr()))

    return React.createElement(Page, elProps(props.path).styles(elProps(pathTo('ArchivedPuzzle.Styles')).paddingLeft('0').paddingRight('0').paddingTop('0').padding('0').props).props,
        React.createElement(Calculation, elProps(pathTo('PuzzleId')).show(false).props),
        React.createElement(Frame, elProps(pathTo('GameFrame')).source(Get(Puzzles, PuzzleId).url).styles(elProps(pathTo('GameFrame.Styles')).height('calc(100% + 16px)').width('calc(100% + 8px)').marginTop('-8px').marginLeft('-4px').marginRight('-4px').props).props),
    )
}

// PuzzleArchive.js
const PuzzleArchive_PuzzleItemSetItem = React.memo(function PuzzleArchive_PuzzleItemSetItem(props) {
    const pathTo = name => props.path + '.' + name
    const parentPathWith = name => Elemento.parentPath(props.path) + '.' + name
    const {$item, $itemId, $index, $selected, onClick} = props
    const {ItemSetItem, Block, Button, TextElement} = Elemento.components
    const _state = Elemento.useGetStore()
    const app = _state.useObject('Puzzles')
    const {ShowPage} = app
    const Block1 = _state.setObject(pathTo('Block1'), new Block.State(stateProps(pathTo('Block1')).props))
    const PuzzleLink_action = React.useCallback(wrapFn(pathTo('PuzzleLink'), 'action', async () => {
        await ShowPage(ArchivedPuzzle, $item.id)
    }), [$item])
    const canDragItem = undefined
    const styles = undefined

    return React.createElement(ItemSetItem, {path: props.path, item: $item, itemId: $itemId, index: $index, onClick, canDragItem, styles},
        React.createElement(Block, elProps(pathTo('Block1')).layout('vertical').styles(elProps(pathTo('Block1.Styles')).fontSize('18').gap('0').props).props,
            React.createElement(Button, elProps(pathTo('PuzzleLink')).content($item.name).appearance('link').action(PuzzleLink_action).styles(elProps(pathTo('PuzzleLink.Styles')).fontSize('inherit').props).props),
            React.createElement(TextElement, elProps(pathTo('PuzzleDescription')).content($item.description).props),
    ),
    )
})


function PuzzleArchive(props) {
    const pathTo = name => props.path + '.' + name
    const {Page, TextElement, ItemSet} = Elemento.components
    const {Query} = Elemento.appFunctions
    const _state = Elemento.useGetStore()
    const Puzzles = _state.useObject('Puzzles.Puzzles')
    const PuzzleItemSet = _state.setObject(pathTo('PuzzleItemSet'), new ItemSet.State(stateProps(pathTo('PuzzleItemSet')).items(Query(Puzzles, {})).selectable('none').props))
    Elemento.elementoDebug(() => eval(Elemento.useDebugExpr()))

    return React.createElement(Page, elProps(props.path).props,
        React.createElement(TextElement, elProps(pathTo('Title')).styles(elProps(pathTo('Title.Styles')).fontSize('20').color('green').props).content('All the Games').props),
        React.createElement(ItemSet, elProps(pathTo('PuzzleItemSet')).itemContentComponent(PuzzleArchive_PuzzleItemSetItem).props),
    )
}

// GamesPlayed.js
const GamesPlayed_PlaysItemSetItem = React.memo(function GamesPlayed_PlaysItemSetItem(props) {
    const pathTo = name => props.path + '.' + name
    const parentPathWith = name => Elemento.parentPath(props.path) + '.' + name
    const {$item, $itemId, $index, $selected, onClick} = props
    const {ItemSetItem, Block, TextElement, Button} = Elemento.components
    const {DateFormat} = Elemento.globalFunctions
    const {Get} = Elemento.appFunctions
    const _state = Elemento.useGetStore()
    const app = _state.useObject('Puzzles')
    const {ShowPage} = app
    const Puzzles = _state.useObject('Puzzles.Puzzles')
    const Block1 = _state.setObject(pathTo('Block1'), new Block.State(stateProps(pathTo('Block1')).props))
    const PuzzleName_action = React.useCallback(wrapFn(pathTo('PuzzleName'), 'action', async () => {
        await ShowPage(ArchivedPuzzle, $item.PuzzleId)
    }), [$item])
    const canDragItem = undefined
    const styles = elProps(pathTo('PlaysItemSet.Styles')).width('100%').props

    return React.createElement(ItemSetItem, {path: props.path, item: $item, itemId: $itemId, index: $index, onClick, canDragItem, styles},
        React.createElement(Block, elProps(pathTo('Block1')).layout('horizontal wrapped').styles(elProps(pathTo('Block1.Styles')).fontSize('18').gap('0').width('100%').props).props,
            React.createElement(TextElement, elProps(pathTo('DatePlayed')).styles(elProps(pathTo('DatePlayed.Styles')).fontSize('inherit').width('7em').props).content(DateFormat($item.DateTime, 'dd MMM yyyy')).props),
            React.createElement(Button, elProps(pathTo('PuzzleName')).content(Get(Puzzles, $item.PuzzleId).name).appearance('link').action(PuzzleName_action).styles(elProps(pathTo('PuzzleName.Styles')).fontSize('inherit').flexGrow('1').props).props),
            React.createElement(TextElement, elProps(pathTo('Score')).styles(elProps(pathTo('Score.Styles')).fontSize('inherit').width('3em').textAlign('right').props).content($item.Score).props),
    ),
    )
})


function GamesPlayed(props) {
    const pathTo = name => props.path + '.' + name
    const {Page, TextElement, ItemSet} = Elemento.components
    const {Query, CurrentUser} = Elemento.appFunctions
    const _state = Elemento.useGetStore()
    const GamePlays = _state.useObject('Puzzles.GamePlays')
    const PlaysItemSet = _state.setObject(pathTo('PlaysItemSet'), new ItemSet.State(stateProps(pathTo('PlaysItemSet')).items(Query(GamePlays, {UserId: CurrentUser().uid})).selectable('none').props))
    Elemento.elementoDebug(() => eval(Elemento.useDebugExpr()))

    return React.createElement(Page, elProps(props.path).props,
        React.createElement(TextElement, elProps(pathTo('Title')).styles(elProps(pathTo('Title.Styles')).fontSize('20').color('green').props).content('Games Played').props),
        React.createElement(ItemSet, elProps(pathTo('PlaysItemSet')).itemContentComponent(GamesPlayed_PlaysItemSetItem).props),
    )
}

// MyTeam.js
function MyTeam(props) {
    const pathTo = name => props.path + '.' + name
    const {Page, TextElement, Calculation, Data, Block, Button, UserLogon} = Elemento.components
    const {NotNull, Not, And} = Elemento.globalFunctions
    const {GetIfExists, CurrentUser} = Elemento.appFunctions
    const _state = Elemento.useGetStore()
    const app = _state.useObject('Puzzles')
    const {ShowPage} = app
    const UserData = _state.useObject('Puzzles.UserData')
    const Teams = _state.useObject('Puzzles.Teams')
    const IsTeamOwner = _state.useObject('Puzzles.IsTeamOwner')
    const InTeam = _state.setObject(pathTo('InTeam'), new Calculation.State(stateProps(pathTo('InTeam')).value(NotNull(UserData()?.TeamId)).props))
    const Team = _state.setObject(pathTo('Team'), new Data.State(stateProps(pathTo('Team')).value(GetIfExists(Teams, UserData()?.TeamId)).props))
    const NotInTeamBlock = _state.setObject(pathTo('NotInTeamBlock'), new Block.State(stateProps(pathTo('NotInTeamBlock')).props))
    const NotLoggedInBlock = _state.setObject(pathTo('NotLoggedInBlock'), new Block.State(stateProps(pathTo('NotLoggedInBlock')).props))
    const InTeamBlock = _state.setObject(pathTo('InTeamBlock'), new Block.State(stateProps(pathTo('InTeamBlock')).props))
    const TeamOwnerBlock = _state.setObject(pathTo('TeamOwnerBlock'), new Block.State(stateProps(pathTo('TeamOwnerBlock')).props))
    const JoinATeam_action = React.useCallback(wrapFn(pathTo('JoinATeam'), 'action', async () => {
        await ShowPage(NewTeam)
    }), [])
    const StartANewTeam_action = React.useCallback(wrapFn(pathTo('StartANewTeam'), 'action', async () => {
        await ShowPage(NewTeam)
    }), [])
    const InviteMembers_action = React.useCallback(wrapFn(pathTo('InviteMembers'), 'action', async () => {
        await ShowPage(NewInvite)
    }), [])
    const LeaveTeam_action = React.useCallback(wrapFn(pathTo('LeaveTeam'), 'action', async () => {
        await ShowPage(LeaveTeam)
    }), [])
    Elemento.elementoDebug(() => eval(Elemento.useDebugExpr()))

    return React.createElement(Page, elProps(props.path).props,
        React.createElement(TextElement, elProps(pathTo('Title')).styles(elProps(pathTo('Title.Styles')).fontSize('20').color('green').props).content('My Team').props),
        React.createElement(Calculation, elProps(pathTo('InTeam')).props),
        React.createElement(Data, elProps(pathTo('Team')).display(false).props),
        React.createElement(TextElement, elProps(pathTo('TeamsBlurb')).show(Not(InTeam)).content(`If you want to get the most out of Puzzle Teams ... join a Team!

You can enjoy a friendly rivalry with your other team members, and your team will also compete with other teams in the leagues and competitions.

To join a team, you will need an invitation code from the owner of the team.

But if you don't know anyone in a Puzzle Teams Team, why not find some friends or family members and start your own?
`).props),
        React.createElement(Block, elProps(pathTo('NotInTeamBlock')).layout('horizontal wrapped').show(And(CurrentUser(), Not(InTeam))).props,
            React.createElement(Button, elProps(pathTo('JoinATeam')).content('Join A Team').appearance('outline').action(JoinATeam_action).props),
            React.createElement(Button, elProps(pathTo('StartANewTeam')).content('Start A New Team').appearance('outline').action(StartANewTeam_action).props),
    ),
        React.createElement(Block, elProps(pathTo('NotLoggedInBlock')).layout('vertical').show(Not(CurrentUser())).props,
            React.createElement(TextElement, elProps(pathTo('LoginMessage')).content('You need to Log In or Sign Up to see your team details or join one.').props),
            React.createElement(UserLogon, elProps(pathTo('UserLogon3')).props),
    ),
        React.createElement(TextElement, elProps(pathTo('InTeamMessage')).allowHtml(true).show(InTeam).content('You are a member of ' + '<span style="font-size: larger; color: green">' + Team.Name + '</span>').props),
        React.createElement(Block, elProps(pathTo('InTeamBlock')).layout('vertical').show(InTeam).props,
            React.createElement(Block, elProps(pathTo('TeamOwnerBlock')).layout('vertical').show(IsTeamOwner()).styles(elProps(pathTo('TeamOwnerBlock.Styles')).paddingLeft('0').props).props,
            React.createElement(TextElement, elProps(pathTo('Message')).styles(elProps(pathTo('Message.Styles')).props).content('You are the owner of this team.').props),
            React.createElement(Button, elProps(pathTo('InviteMembers')).content('Invite Members').appearance('outline').action(InviteMembers_action).props),
    ),
            React.createElement(Button, elProps(pathTo('LeaveTeam')).content('Leave Team').appearance('link').action(LeaveTeam_action).props),
    ),
    )
}

// NewTeam.js
function NewTeam_NewTeamForm(props) {
    const pathTo = name => props.path + '.' + name
    const {Form, TextInput, Button} = Elemento.components
    const _state = Elemento.useGetStore()
    const $form = _state.useObject(props.path)
    const TeamName = _state.setObject(pathTo('TeamName'), new TextInput.State(stateProps(pathTo('TeamName')).value($form.originalValue?.TeamName).props))
    $form._updateValue()
    const Save_action = React.useCallback(wrapFn(pathTo('Save'), 'action', async () => {
        await $form.Submit()
    }), [$form])

    return React.createElement(Form, props,
        React.createElement(TextInput, elProps(pathTo('TeamName')).label('Team Name').props),
        React.createElement(Button, elProps(pathTo('Save')).content('Save').appearance('outline').action(Save_action).props),
    )
}


NewTeam_NewTeamForm.State = class NewTeam_NewTeamForm_State extends Elemento.components.BaseFormState {
    ownFieldNames = ['TeamName']
}


function NewTeam(props) {
    const pathTo = name => props.path + '.' + name
    const {Page, TextElement} = Elemento.components
    const {Log} = Elemento.globalFunctions
    const _state = Elemento.useGetStore()
    const PuzzlesServerApp = _state.useObject('Puzzles.PuzzlesServerApp')
    const NewTeamForm_submitAction = React.useCallback(wrapFn(pathTo('NewTeamForm'), 'submitAction', async ($form, $data) => {
        Log('Creating team', $form.value)
        await PuzzlesServerApp.NewTeam($form)
    }), [])
    const NewTeamForm = _state.setObject(pathTo('NewTeamForm'), new NewTeam_NewTeamForm.State(stateProps(pathTo('NewTeamForm')).submitAction(NewTeamForm_submitAction).props))
    Elemento.elementoDebug(() => eval(Elemento.useDebugExpr()))

    return React.createElement(Page, elProps(props.path).props,
        React.createElement(TextElement, elProps(pathTo('Title')).styles(elProps(pathTo('Title.Styles')).fontSize('20').color('green').props).content('New Team').props),
        React.createElement(NewTeam_NewTeamForm, elProps(pathTo('NewTeamForm')).label(' ').horizontal(false).wrap(false).props),
    )
}

// NewInvite.js
function NewInvite(props) {
    const pathTo = name => props.path + '.' + name
    const {Page, TextElement, Data, Block, Calculation, Button} = Elemento.components
    const {NotNull, Log} = Elemento.globalFunctions
    const {GetRandomId, Set} = Elemento.appFunctions
    const _state = Elemento.useGetStore()
    const app = _state.useObject('Puzzles')
    const {CurrentUrl} = app
    const PuzzlesServerApp = _state.useObject('Puzzles.PuzzlesServerApp')
    const MessageText = _state.setObject(pathTo('MessageText'), new Data.State(stateProps(pathTo('MessageText')).value('Ready').props))
    const InviteId = _state.setObject(pathTo('InviteId'), new Data.State(stateProps(pathTo('InviteId')).props))
    const LinkBlock = _state.setObject(pathTo('LinkBlock'), new Block.State(stateProps(pathTo('LinkBlock')).props))
    const InviteCode = _state.setObject(pathTo('InviteCode'), new Calculation.State(stateProps(pathTo('InviteCode')).value(InviteId).props))
    const InviteLink = _state.setObject(pathTo('InviteLink'), new Calculation.State(stateProps(pathTo('InviteLink')).value(InviteId ? CurrentUrl().text.replace(/\/NewInvite/, '/JoinTeam/') + InviteId : null).props))
    const Copy_action = React.useCallback(wrapFn(pathTo('Copy'), 'action', async () => {
        await window.navigator.clipboard.writeText(InviteLink.value)
    }), [InviteLink])
    const CreateInvite_action = React.useCallback(wrapFn(pathTo('CreateInvite'), 'action', async () => {
        let inviteId = GetRandomId()
        Log('Creating invite', inviteId)
        Set(InviteId, null)
        Set(MessageText, 'Generating invite...')
        await PuzzlesServerApp.InviteTeamMember(inviteId)
        Set(InviteId, inviteId)
        Set(MessageText, null)
    }), [InviteId, MessageText])
    Elemento.elementoDebug(() => eval(Elemento.useDebugExpr()))

    return React.createElement(Page, elProps(props.path).props,
        React.createElement(TextElement, elProps(pathTo('Title')).styles(elProps(pathTo('Title.Styles')).fontSize('20').color('green').props).content('Invite a Team Member').props),
        React.createElement(Data, elProps(pathTo('MessageText')).display(false).props),
        React.createElement(Data, elProps(pathTo('InviteId')).display(false).props),
        React.createElement(TextElement, elProps(pathTo('Message')).content(MessageText).props),
        React.createElement(Block, elProps(pathTo('LinkBlock')).layout('horizontal wrapped').show(NotNull(InviteId)).styles(elProps(pathTo('LinkBlock.Styles')).width('100%').props).props,
            React.createElement(Calculation, elProps(pathTo('InviteCode')).label('Invite Code').show(true).styles(elProps(pathTo('InviteCode.Styles')).width('calc(100% - 5em)').maxWidth('30em').props).props),
            React.createElement(Calculation, elProps(pathTo('InviteLink')).label('Invite Link').show(true).styles(elProps(pathTo('InviteLink.Styles')).width('calc(100% - 5em)').maxWidth('30em').props).props),
            React.createElement(Button, elProps(pathTo('Copy')).content('Copy').iconName('content_copy').appearance('outline').show(NotNull(InviteId)).action(Copy_action).styles(elProps(pathTo('Copy.Styles')).height('40').props).props),
            React.createElement(TextElement, elProps(pathTo('LinkUsageExplanation')).content(`Send the link above to the person you want to invite.

Anyone who has the link can use it, but it can only be used once.`).props),
    ),
        React.createElement(Button, elProps(pathTo('CreateInvite')).content('New Invite').appearance('filled').action(CreateInvite_action).props),
    )
}

// JoinTeam.js
function JoinTeam(props) {
    const pathTo = name => props.path + '.' + name
    const {Page, TextElement, Calculation, Data, Block, Button} = Elemento.components
    const {NotNull, And, Not} = Elemento.globalFunctions
    const {GetIfExists, Set} = Elemento.appFunctions
    const _state = Elemento.useGetStore()
    const app = _state.useObject('Puzzles')
    const {CurrentUrl} = app
    const Invites = _state.useObject('Puzzles.Invites')
    const Teams = _state.useObject('Puzzles.Teams')
    const UserData = _state.useObject('Puzzles.UserData')
    const PuzzlesServerApp = _state.useObject('Puzzles.PuzzlesServerApp')
    const InviteId = _state.setObject(pathTo('InviteId'), new Calculation.State(stateProps(pathTo('InviteId')).value(CurrentUrl().pathSections[0]).props))
    const Invite = _state.setObject(pathTo('Invite'), new Data.State(stateProps(pathTo('Invite')).value(GetIfExists(Invites, InviteId)).props))
    const Team = _state.setObject(pathTo('Team'), new Data.State(stateProps(pathTo('Team')).value(GetIfExists(Teams, Invite?.TeamId)).props))
    const InvitationUsed = _state.setObject(pathTo('InvitationUsed'), new Calculation.State(stateProps(pathTo('InvitationUsed')).value(NotNull(Invite?.DateUsed)).props))
    const InThisTeam = _state.setObject(pathTo('InThisTeam'), new Calculation.State(stateProps(pathTo('InThisTeam')).value(Invite?.TeamId === UserData()?.TeamId).props))
    const InAnotherTeam = _state.setObject(pathTo('InAnotherTeam'), new Calculation.State(stateProps(pathTo('InAnotherTeam')).value(And(UserData()?.TeamId, Invite?.TeamId !== UserData()?.TeamId)).props))
    const JoinState = _state.setObject(pathTo('JoinState'), new Data.State(stateProps(pathTo('JoinState')).value('ready').props))
    const InviteIdDisplay = _state.setObject(pathTo('InviteIdDisplay'), new Calculation.State(stateProps(pathTo('InviteIdDisplay')).value(Invite.id).props))
    const CanJoin = _state.setObject(pathTo('CanJoin'), new Calculation.State(stateProps(pathTo('CanJoin')).value(And(Not(InvitationUsed), Not(InThisTeam), Not(InAnotherTeam))).props))
    const JoinBlock = _state.setObject(pathTo('JoinBlock'), new Block.State(stateProps(pathTo('JoinBlock')).props))
    const JoinTeam_action = React.useCallback(wrapFn(pathTo('JoinTeam'), 'action', async () => {
        Set(JoinState,'joining')
        await PuzzlesServerApp.AcceptInvite(Invite.id)
        Set(JoinState,'joined')
    }), [JoinState, Invite])
    Elemento.elementoDebug(() => eval(Elemento.useDebugExpr()))

    return React.createElement(Page, elProps(props.path).props,
        React.createElement(TextElement, elProps(pathTo('Title')).styles(elProps(pathTo('Title.Styles')).fontSize('20').color('green').marginBottom('20').props).content('Join a Team').props),
        React.createElement(Calculation, elProps(pathTo('InviteId')).show(false).props),
        React.createElement(Data, elProps(pathTo('Invite')).display(false).props),
        React.createElement(Data, elProps(pathTo('Team')).display(false).props),
        React.createElement(Calculation, elProps(pathTo('InvitationUsed')).props),
        React.createElement(Calculation, elProps(pathTo('InThisTeam')).props),
        React.createElement(Calculation, elProps(pathTo('InAnotherTeam')).props),
        React.createElement(Data, elProps(pathTo('JoinState')).display(false).props),
        React.createElement(Calculation, elProps(pathTo('InviteIdDisplay')).label('Invitation Code').show(true).props),
        React.createElement(TextElement, elProps(pathTo('Invitation')).allowHtml(true).show(NotNull(Team) && JoinState == 'ready').content('Invitation to join ' + '<span style="font-size: larger; color: green">' + Team.Name + '</span>').props),
        React.createElement(TextElement, elProps(pathTo('AlreadyUsedMessage')).show(InvitationUsed).content('Sorry - this invitation has already been used').props),
        React.createElement(TextElement, elProps(pathTo('AlreadyMemberMessage')).allowHtml(true).show(InThisTeam).content('You are already a member of ' + '<span style="font-size: larger; color: green">' + Team.Name + '</span>').props),
        React.createElement(TextElement, elProps(pathTo('AlreadyMemberElsewhereMessage')).allowHtml(true).show(InAnotherTeam).content('You are already a member of another team.  You will have to leave that team to join this one.').props),
        React.createElement(Calculation, elProps(pathTo('CanJoin')).props),
        React.createElement(Block, elProps(pathTo('JoinBlock')).layout('vertical').show(CanJoin).props,
            React.createElement(TextElement, elProps(pathTo('JoiningMessage')).show(JoinState == 'joining').content('Joining team....').props),
            React.createElement(TextElement, elProps(pathTo('CongratsMessage')).allowHtml(true).show(JoinState == 'joined').content('Congratulations - you are now a member of ' + '<span style="font-size: larger; color: green">' + Team.Name + '</span>').props),
            React.createElement(Button, elProps(pathTo('JoinTeam')).content('Join the Team').appearance('filled').enabled(CanJoin).action(JoinTeam_action).props),
    ),
    )
}
JoinTeam.notLoggedInPage = 'JoinTeamLogin'

// JoinTeamLogin.js
function JoinTeamLogin(props) {
    const pathTo = name => props.path + '.' + name
    const {Page, TextElement} = Elemento.components
    const _state = Elemento.useGetStore()
    Elemento.elementoDebug(() => eval(Elemento.useDebugExpr()))

    return React.createElement(Page, elProps(props.path).props,
        React.createElement(TextElement, elProps(pathTo('Title')).styles(elProps(pathTo('Title.Styles')).fontSize('20').color('green').marginBottom('20').props).content('Join a Team').props),
        React.createElement(TextElement, elProps(pathTo('Loginreminder')).content(`Sorry - we need to know who you are before you can join a team. 
Please Log In,  or Sign Up if you do not already have an account.`).props),
    )
}

// GeneralLogin.js
function GeneralLogin(props) {
    const pathTo = name => props.path + '.' + name
    const {Page, TextElement, UserLogon} = Elemento.components
    const _state = Elemento.useGetStore()
    Elemento.elementoDebug(() => eval(Elemento.useDebugExpr()))

    return React.createElement(Page, elProps(props.path).props,
        React.createElement(TextElement, elProps(pathTo('Title')).styles(elProps(pathTo('Title.Styles')).fontSize('20').color('green').marginBottom('20').props).content('You need to be logged in!').props),
        React.createElement(TextElement, elProps(pathTo('Loginreminder')).content(`Sorry - we would love to help you but we need to know who you are. 

Please Log In using the button below.  

If you do not have an account yet, click the button anyway and it will tell you how to sign up.`).props),
        React.createElement(UserLogon, elProps(pathTo('UserLogonInPage')).props),
    )
}

// LeaveTeam.js
function LeaveTeam(props) {
    const pathTo = name => props.path + '.' + name
    const {Page, TextElement, Calculation, Block, Button} = Elemento.components
    const {NotNull, And, Not} = Elemento.globalFunctions
    const _state = Elemento.useGetStore()
    const app = _state.useObject('Puzzles')
    const {ShowPage} = app
    const UserData = _state.useObject('Puzzles.UserData')
    const IsTeamOwner = _state.useObject('Puzzles.IsTeamOwner')
    const PuzzlesServerApp = _state.useObject('Puzzles.PuzzlesServerApp')
    const InTeam = _state.setObject(pathTo('InTeam'), new Calculation.State(stateProps(pathTo('InTeam')).value(NotNull(UserData()?.TeamId)).props))
    const InTeamBlock = _state.setObject(pathTo('InTeamBlock'), new Block.State(stateProps(pathTo('InTeamBlock')).props))
    const NotInTeamBlock = _state.setObject(pathTo('NotInTeamBlock'), new Block.State(stateProps(pathTo('NotInTeamBlock')).props))
    const TeamOwnerBlock = _state.setObject(pathTo('TeamOwnerBlock'), new Block.State(stateProps(pathTo('TeamOwnerBlock')).props))
    const LeaveTeam_action = React.useCallback(wrapFn(pathTo('LeaveTeam'), 'action', async () => {
        await PuzzlesServerApp.LeaveTeam()
        await ShowPage(MyTeam)
    }), [])
    Elemento.elementoDebug(() => eval(Elemento.useDebugExpr()))

    return React.createElement(Page, elProps(props.path).props,
        React.createElement(TextElement, elProps(pathTo('Title')).styles(elProps(pathTo('Title.Styles')).fontSize('20').color('green').marginBottom('20').props).content('Leave your Team').props),
        React.createElement(Calculation, elProps(pathTo('InTeam')).props),
        React.createElement(Block, elProps(pathTo('InTeamBlock')).layout('vertical').show(And(InTeam, Not(IsTeamOwner()))).props,
            React.createElement(TextElement, elProps(pathTo('Explanation')).content(`If you leave your team, you obviously won't be able to take part in the leagues or see the team scores any more.

To rejoin, or join another team, you will need a new invitation code.

If you're OK with that, then click the button below.`).props),
            React.createElement(Button, elProps(pathTo('LeaveTeam')).content('Leave Team').appearance('outline').action(LeaveTeam_action).props),
    ),
        React.createElement(Block, elProps(pathTo('NotInTeamBlock')).layout('vertical').show(Not(InTeam)).props,
            React.createElement(TextElement, elProps(pathTo('Message')).content('You are not in a team at the moment.').props),
    ),
        React.createElement(Block, elProps(pathTo('TeamOwnerBlock')).layout('vertical').show(IsTeamOwner()).props,
            React.createElement(TextElement, elProps(pathTo('Message')).content(`You are the owner of this team, so you cannot leave it.

If you want to transfer the team to someone else, please contact PuzzleTeams support.`).props),
    ),
    )
}
LeaveTeam.notLoggedInPage = 'GeneralLogin'

// PlayerLeagues.js
const PlayerLeagues_PuzzleChooserItem = React.memo(function PlayerLeagues_PuzzleChooserItem(props) {
    const pathTo = name => props.path + '.' + name
    const parentPathWith = name => Elemento.parentPath(props.path) + '.' + name
    const {$item, $itemId, $index, $selected, onClick} = props
    const {ItemSetItem, TextElement} = Elemento.components
    const {If} = Elemento.globalFunctions
    const _state = Elemento.useGetStore()
    const canDragItem = undefined
    const styles = elProps(pathTo('PuzzleChooser.Styles')).width('100%').props

    return React.createElement(ItemSetItem, {path: props.path, item: $item, itemId: $itemId, index: $index, onClick, canDragItem, styles},
        React.createElement(TextElement, elProps(pathTo('PuzzleName')).styles(elProps(pathTo('PuzzleName.Styles')).cursor('pointer').backgroundColor(If($selected, 'white', 'transparent')).padding('2').props).content($item.name).props),
    )
})


const PlayerLeagues_LeagueItemsItem = React.memo(function PlayerLeagues_LeagueItemsItem(props) {
    const pathTo = name => props.path + '.' + name
    const parentPathWith = name => Elemento.parentPath(props.path) + '.' + name
    const {$item, $itemId, $index, $selected, onClick} = props
    const {ItemSetItem, Block, TextElement} = Elemento.components
    const _state = Elemento.useGetStore()
    const LeagueEntry = _state.setObject(pathTo('LeagueEntry'), new Block.State(stateProps(pathTo('LeagueEntry')).props))
    const canDragItem = undefined
    const styles = undefined

    return React.createElement(ItemSetItem, {path: props.path, item: $item, itemId: $itemId, index: $index, onClick, canDragItem, styles},
        React.createElement(Block, elProps(pathTo('LeagueEntry')).layout('horizontal').styles(elProps(pathTo('LeagueEntry.Styles')).borderWidth('2px').borderColor('black').props).props,
            React.createElement(TextElement, elProps(pathTo('Name')).styles(elProps(pathTo('Name.Styles')).width('8em').props).content($item.Name).props),
            React.createElement(TextElement, elProps(pathTo('HighScore')).styles(elProps(pathTo('HighScore.Styles')).textAlign('right').width('3em').props).content($item.High).props),
            React.createElement(TextElement, elProps(pathTo('Average')).styles(elProps(pathTo('Average.Styles')).width('3em').textAlign('right').props).content($item.Average).props),
    ),
    )
})


function PlayerLeagues(props) {
    const pathTo = name => props.path + '.' + name
    const {Page, TextElement, Calculation, Block, Button, ItemSet} = Elemento.components
    const {If, Select, Eq, GroupBy, ForEach, Round, Sum, Count, Max, SelectFirst, Record, Sort, IsNull, NotNull, And} = Elemento.globalFunctions
    const {Query} = Elemento.appFunctions
    const _state = Elemento.useGetStore()
    const app = _state.useObject('Puzzles')
    const {CurrentUrl, ShowPage} = app
    const UsersTeam = _state.useObject('Puzzles.UsersTeam')
    const PuzzlesServerApp = _state.useObject('Puzzles.PuzzlesServerApp')
    const Puzzles = _state.useObject('Puzzles.Puzzles')
    const TheData = _state.setObject(pathTo('TheData'), new Calculation.State(stateProps(pathTo('TheData')).value(If(UsersTeam(), () => PuzzlesServerApp.TeamGamePlays())).props))
    const TheUsers = _state.setObject(pathTo('TheUsers'), new Calculation.State(stateProps(pathTo('TheUsers')).value(TheData.value?.users).props))
    const TheGamePlays = _state.setObject(pathTo('TheGamePlays'), new Calculation.State(stateProps(pathTo('TheGamePlays')).value(TheData.value?.gamePlays).props))
    const UsersDisplay = _state.setObject(pathTo('UsersDisplay'), new Calculation.State(stateProps(pathTo('UsersDisplay')).value(JSON.stringify(TheUsers.value, null, 2)).props))
    const GamePlaysDisplay = _state.setObject(pathTo('GamePlaysDisplay'), new Calculation.State(stateProps(pathTo('GamePlaysDisplay')).value(JSON.stringify(TheGamePlays.value, null, 2)).props))
    const SelectedPuzzleId = _state.setObject(pathTo('SelectedPuzzleId'), new Calculation.State(stateProps(pathTo('SelectedPuzzleId')).value(CurrentUrl().pathSections[0]).props))
    const GamePlaysForPuzzle = _state.setObject(pathTo('GamePlaysForPuzzle'), new Calculation.State(stateProps(pathTo('GamePlaysForPuzzle')).value(Select(TheGamePlays, ($item, $index) => Eq($item.PuzzleId, SelectedPuzzleId))).props))
    const GamePlaysByUser = _state.setObject(pathTo('GamePlaysByUser'), new Calculation.State(stateProps(pathTo('GamePlaysByUser')).value(GroupBy(GamePlaysForPuzzle, $item => $item.UserId)).props))
    const UserResult = _state.setObject(pathTo('UserResult'), React.useCallback(wrapFn(pathTo('UserResult'), 'calculation', (gamePlays, userId) => {
        let scores = ForEach(gamePlays, ($item, $index) => $item.Score)
        let average = Round(Sum(...scores) / Count(scores))
        let high = Max(...scores)
        let userName = SelectFirst(TheUsers, ($item, $index) => $item.id === userId).DisplayName
        return Record('UserId', userId, 'Name', userName, 'Average', average, 'High', high)
    }), [TheUsers]))
    const ResultsByUser = _state.setObject(pathTo('ResultsByUser'), new Calculation.State(stateProps(pathTo('ResultsByUser')).value(ForEach(GamePlaysByUser, ($item, $index) => UserResult($item, $index))).props))
    const SortedResults = _state.setObject(pathTo('SortedResults'), new Calculation.State(stateProps(pathTo('SortedResults')).value(Sort(ResultsByUser, $item => -$item.High)).props))
    const NoTeamLayout = _state.setObject(pathTo('NoTeamLayout'), new Block.State(stateProps(pathTo('NoTeamLayout')).props))
    const InTeamLayout = _state.setObject(pathTo('InTeamLayout'), new Block.State(stateProps(pathTo('InTeamLayout')).props))
    const MainLayout = _state.setObject(pathTo('MainLayout'), new Block.State(stateProps(pathTo('MainLayout')).props))
    const PuzzlesLayout = _state.setObject(pathTo('PuzzlesLayout'), new Block.State(stateProps(pathTo('PuzzlesLayout')).props))
    const PuzzlesTitle = _state.setObject(pathTo('PuzzlesTitle'), new Block.State(stateProps(pathTo('PuzzlesTitle')).props))
    const PuzzlesList = _state.setObject(pathTo('PuzzlesList'), new Block.State(stateProps(pathTo('PuzzlesList')).props))
    const PuzzleChooser_selectAction = React.useCallback(wrapFn(pathTo('PuzzleChooser'), 'selectAction', async ($item, $itemId, $index) => {
        await ShowPage(PlayerLeagues, $item.id)
    }), [])
    const PuzzleChooser = _state.setObject(pathTo('PuzzleChooser'), new ItemSet.State(stateProps(pathTo('PuzzleChooser')).items(Query(Puzzles, {})).selectedItems(SelectedPuzzleId).selectable('none').selectAction(PuzzleChooser_selectAction).props))
    const LeagueTable = _state.setObject(pathTo('LeagueTable'), new Block.State(stateProps(pathTo('LeagueTable')).props))
    const LeagueTitle = _state.setObject(pathTo('LeagueTitle'), new Block.State(stateProps(pathTo('LeagueTitle')).props))
    const LeagueItems = _state.setObject(pathTo('LeagueItems'), new ItemSet.State(stateProps(pathTo('LeagueItems')).items(SortedResults).props))
    const MyTeamLink_action = React.useCallback(wrapFn(pathTo('MyTeamLink'), 'action', async () => {
        await ShowPage(MyTeam)
    }), [])
    Elemento.elementoDebug(() => eval(Elemento.useDebugExpr()))

    return React.createElement(Page, elProps(props.path).props,
        React.createElement(TextElement, elProps(pathTo('Title')).styles(elProps(pathTo('Title.Styles')).fontSize('20').color('green').props).content((UsersTeam()?.Name ?? '') +  ' Player Leagues').props),
        React.createElement(Calculation, elProps(pathTo('TheData')).props),
        React.createElement(Calculation, elProps(pathTo('TheUsers')).props),
        React.createElement(Calculation, elProps(pathTo('TheGamePlays')).styles(elProps(pathTo('TheGamePlays.Styles')).width('100% ').props).props),
        React.createElement(Calculation, elProps(pathTo('UsersDisplay')).label('Users').show(false).styles(elProps(pathTo('UsersDisplay.Styles')).width('100%').props).props),
        React.createElement(Calculation, elProps(pathTo('GamePlaysDisplay')).label('Game Plays').show(false).styles(elProps(pathTo('GamePlaysDisplay.Styles')).width('100%').props).props),
        React.createElement(Calculation, elProps(pathTo('SelectedPuzzleId')).props),
        React.createElement(Calculation, elProps(pathTo('GamePlaysForPuzzle')).label('Game Plays For Puzzle').show(false).props),
        React.createElement(Calculation, elProps(pathTo('GamePlaysByUser')).label('Game Plays By User').show(false).props),
        React.createElement(Calculation, elProps(pathTo('ResultsByUser')).label('Results By User').show(false).props),
        React.createElement(Calculation, elProps(pathTo('SortedResults')).props),
        React.createElement(Block, elProps(pathTo('NoTeamLayout')).layout('vertical').show(IsNull(UsersTeam())).props,
            React.createElement(TextElement, elProps(pathTo('Text81')).content('Great that you\'re interested in the Puzzle Teams Leagues, but they are only for team members and unfortunately you don\'t seem to be in a team at the moment.').props),
            React.createElement(TextElement, elProps(pathTo('Text82')).content('You can find out how to join or start a team on the My Team page.').props),
            React.createElement(Button, elProps(pathTo('MyTeamLink')).content('Go To My Team').appearance('filled').action(MyTeamLink_action).styles(elProps(pathTo('MyTeamLink.Styles')).display('inline').props).props),
    ),
        React.createElement(Block, elProps(pathTo('InTeamLayout')).layout('vertical').show(NotNull(UsersTeam())).styles(elProps(pathTo('InTeamLayout.Styles')).height('100%').width('100%').props).props,
            React.createElement(TextElement, elProps(pathTo('PuzzleName')).allowHtml(true).styles(elProps(pathTo('PuzzleName.Styles')).color('green').fontSize('18').props).content(PuzzleChooser.selectedItem?.name ?? '&nbsp;').props),
            React.createElement(Block, elProps(pathTo('MainLayout')).layout('horizontal').props,
            React.createElement(Block, elProps(pathTo('PuzzlesLayout')).layout('vertical').styles(elProps(pathTo('PuzzlesLayout.Styles')).height('100%').props).props,
            React.createElement(Block, elProps(pathTo('PuzzlesTitle')).layout('horizontal').show(false).styles(elProps(pathTo('PuzzlesTitle.Styles')).backgroundColor('#fed867').padding('2px 5px').width('100%').props).props,
            React.createElement(TextElement, elProps(pathTo('Title')).styles(elProps(pathTo('Title.Styles')).width('100%').props).content('Puzzles').props),
    ),
            React.createElement(Block, elProps(pathTo('PuzzlesList')).layout('vertical').styles(elProps(pathTo('PuzzlesList.Styles')).backgroundColor('#fed867').height('100%').props).props,
            React.createElement(ItemSet, elProps(pathTo('PuzzleChooser')).itemContentComponent(PlayerLeagues_PuzzleChooserItem).props),
    ),
    ),
            React.createElement(Block, elProps(pathTo('LeagueTable')).layout('vertical').props,
            React.createElement(Block, elProps(pathTo('LeagueTitle')).layout('horizontal').styles(elProps(pathTo('LeagueTitle.Styles')).backgroundColor('#fed867').padding('2px 5px').props).props,
            React.createElement(TextElement, elProps(pathTo('Name')).styles(elProps(pathTo('Name.Styles')).width('8em').props).content('Player').props),
            React.createElement(TextElement, elProps(pathTo('HighScore')).styles(elProps(pathTo('HighScore.Styles')).textAlign('right').width('3em').props).content('High').props),
            React.createElement(TextElement, elProps(pathTo('Average')).styles(elProps(pathTo('Average.Styles')).width('3em').textAlign('right').props).content('Ave').props),
    ),
            React.createElement(TextElement, elProps(pathTo('NoSelectionText')).show(IsNull(SelectedPuzzleId)).content('Please select a Puzzle').props),
            React.createElement(TextElement, elProps(pathTo('NoResultsText')).show(And(NotNull(SelectedPuzzleId), Count(SortedResults) === 0)).content(`No-one in your team has played this puzzle yet 
- why not be the first?`).props),
            React.createElement(ItemSet, elProps(pathTo('LeagueItems')).itemContentComponent(PlayerLeagues_LeagueItemsItem).props),
    ),
    ),
    ),
    )
}
PlayerLeagues.notLoggedInPage = 'GeneralLogin'

// Terms.js
function Terms(props) {
    const pathTo = name => props.path + '.' + name
    const {Page, WebFile, TextElement} = Elemento.components
    const _state = Elemento.useGetStore()
    const TermsFile = _state.setObject(pathTo('TermsFile'), new WebFile.State(stateProps(pathTo('TermsFile')).url('../files/terms.html').props))
    Elemento.elementoDebug(() => eval(Elemento.useDebugExpr()))

    return React.createElement(Page, elProps(props.path).props,
        React.createElement(WebFile, elProps(pathTo('TermsFile')).props),
        React.createElement(TextElement, elProps(pathTo('TermsText')).allowHtml(true).content(TermsFile).props),
    )
}

// Privacy.js
function Privacy(props) {
    const pathTo = name => props.path + '.' + name
    const {Page, WebFile, TextElement} = Elemento.components
    const _state = Elemento.useGetStore()
    const PrivacyFile = _state.setObject(pathTo('PrivacyFile'), new WebFile.State(stateProps(pathTo('PrivacyFile')).url('../files/privacycookies.html').props))
    Elemento.elementoDebug(() => eval(Elemento.useDebugExpr()))

    return React.createElement(Page, elProps(props.path).props,
        React.createElement(WebFile, elProps(pathTo('PrivacyFile')).props),
        React.createElement(TextElement, elProps(pathTo('TermsText')).allowHtml(true).content(PrivacyFile).props),
    )
}

// appMain.js
function configPuzzlesServer() {
    return {
        appName: 'Puzzles Server',
        url: '/capi/:versionId/PuzzlesServer',

        functions: {
            UpdateUserData: {
                params: ['changes'],
                action: true
            },

            GetUserData: {
                params: []
            },

            NewTeam: {
                params: ['teamData'],
                action: true
            },

            InviteTeamMember: {
                params: ['inviteId'],
                action: true
            },

            AcceptInvite: {
                params: ['inviteId'],
                action: true
            },

            LeaveTeam: {
                params: [],
                action: true
            },

            TeamGamePlays: {
                params: []
            }
        }
    };
}

export default function Puzzles(props) {
    const pathTo = name => 'Puzzles' + '.' + name
    const {App, WebFileDataStore, FirestoreDataStore, ServerAppConnector, Collection, AppBar, Image, TextElement, Block, Button, Menu, MenuItem, UserLogon, Calculation} = Elemento.components
    const {If, And, Log, Record, Now, Last, Sort, Not} = Elemento.globalFunctions
    const pages = {HomePage, AboutPage, TodaysPuzzle, ArchivedPuzzle, PuzzleArchive, GamesPlayed, MyTeam, NewTeam, NewInvite, JoinTeam, JoinTeamLogin, GeneralLogin, LeaveTeam, PlayerLeagues, Terms, Privacy}
    const appContext = Elemento.useGetAppContext()
    const {CurrentUser, Query, Add, GetIfExists, Get} = Elemento.appFunctions
    const _state = Elemento.useGetStore()
    const app = _state.setObject('Puzzles', new App.State({pages, appContext}))
    const {ShowPage, AppWidth} = app
    const SiteDataStore = _state.setObject('Puzzles.SiteDataStore', new WebFileDataStore.State(stateProps('Puzzles.SiteDataStore').url('https://firebasestorage.googleapis.com/v0/b/elemento-games-site.appspot.com/o/public%2FsiteData.json?alt=media').props))
    const PlayerDataStore = _state.setObject('Puzzles.PlayerDataStore', new FirestoreDataStore.State(stateProps('Puzzles.PlayerDataStore').collections(`GamePlays
Users
Teams
Invites`).props))
    const PuzzlesServerApp = _state.setObject('Puzzles.PuzzlesServerApp', new ServerAppConnector.State({configuration: configPuzzlesServer()}))
    const Puzzles = _state.setObject('Puzzles.Puzzles', new Collection.State(stateProps('Puzzles.Puzzles').dataStore(SiteDataStore).collectionName('Puzzles').props))
    const GamePlays = _state.setObject('Puzzles.GamePlays', new Collection.State(stateProps('Puzzles.GamePlays').dataStore(PlayerDataStore).collectionName('GamePlays').props))
    const Users = _state.setObject('Puzzles.Users', new Collection.State(stateProps('Puzzles.Users').dataStore(PlayerDataStore).collectionName('Users').props))
    const Teams = _state.setObject('Puzzles.Teams', new Collection.State(stateProps('Puzzles.Teams').dataStore(PlayerDataStore).collectionName('Teams').props))
    const Invites = _state.setObject('Puzzles.Invites', new Collection.State(stateProps('Puzzles.Invites').dataStore(PlayerDataStore).collectionName('Invites').props))
    const LatestPuzzleUrl = _state.setObject('Puzzles.LatestPuzzleUrl', React.useCallback(wrapFn(pathTo('LatestPuzzleUrl'), 'calculation', () => {
        let allPuzzles = Query(Puzzles, {})
        return Last(Sort(allPuzzles, $item => $item.id))?.url
    }), [Puzzles]))
    const UserData = _state.setObject('Puzzles.UserData', React.useCallback(wrapFn(pathTo('UserData'), 'calculation', () => {
        return If(CurrentUser(), () => GetIfExists(Users, CurrentUser().uid))
    }), [Users]))
    const StoreGamePlay = _state.setObject('Puzzles.StoreGamePlay', React.useCallback(wrapFn(pathTo('StoreGamePlay'), 'calculation', async (data) => {
        Log('StoreGamePlay', data)
        let puzzleUrl = await data.url.replace(/\/$/, '')
        let puzzleResult = await Query(Puzzles, {url: puzzleUrl})
        let puzzle = puzzleResult[0]
        let score = data.score
        let teamId = UserData().TeamId
        Log(CurrentUser().uid, teamId, puzzle.id, score)
        await Add(GamePlays, Record('DateTime', Now(), 'UserId', CurrentUser().uid, 'TeamId', teamId, 'PuzzleId', puzzle.id, 'Score', score))
    }), [Puzzles, UserData, GamePlays]))
    const UsersTeam = _state.setObject('Puzzles.UsersTeam', React.useCallback(wrapFn(pathTo('UsersTeam'), 'calculation', () => {
        let teamId = UserData()?.TeamId
        return If(teamId, () => Get(Teams, teamId))
    }), [UserData, Teams]))
    const IsTeamOwner = _state.setObject('Puzzles.IsTeamOwner', React.useCallback(wrapFn(pathTo('IsTeamOwner'), 'calculation', () => {
        return And(CurrentUser(), UsersTeam()?.OwnerId == CurrentUser()?.uid)
    }), [UsersTeam]))
    const NavItems = _state.setObject('Puzzles.NavItems', new Block.State(stateProps('Puzzles.NavItems').props))
    const NarrowScreen = _state.setObject('Puzzles.NarrowScreen', new Calculation.State(stateProps('Puzzles.NarrowScreen').value(AppWidth() < 630).props))
    const Puzzles_messageAction = React.useCallback(wrapFn(pathTo('Puzzles'), 'messageAction', async ($sender, $message) => {
        await If(And($message.score, CurrentUser()), async () => await StoreGamePlay($message))
    }), [StoreGamePlay])
    const Home_action = React.useCallback(wrapFn(pathTo('Home'), 'action', async () => {
        await ShowPage(HomePage)
    }), [])
    const TodaysPuzzle_action = React.useCallback(wrapFn(pathTo('TodaysPuzzle'), 'action', async () => {
        await ShowPage(TodaysPuzzle)
    }), [])
    const Archive_action = React.useCallback(wrapFn(pathTo('Archive'), 'action', async () => {
        await ShowPage(PuzzleArchive)
    }), [])
    const GamesPlayed_action = React.useCallback(wrapFn(pathTo('GamesPlayed'), 'action', async () => {
        await ShowPage(GamesPlayed)
    }), [])
    const PlayerLeagues_action = React.useCallback(wrapFn(pathTo('PlayerLeagues'), 'action', async () => {
        await ShowPage(PlayerLeagues)
    }), [])
    const MyTeam_action = React.useCallback(wrapFn(pathTo('MyTeam'), 'action', async () => {
        await ShowPage(MyTeam)
    }), [])
    const AboutItem_action = React.useCallback(wrapFn(pathTo('AboutItem'), 'action', async () => {
        await ShowPage(AboutPage)
    }), [])
    const Terms_action = React.useCallback(wrapFn(pathTo('Terms'), 'action', async () => {
        await ShowPage(Terms)
    }), [])
    const Privacy_action = React.useCallback(wrapFn(pathTo('Privacy'), 'action', async () => {
        await ShowPage(Privacy)
    }), [])
    const Home2_action = React.useCallback(wrapFn(pathTo('Home2'), 'action', async () => {
        await ShowPage(HomePage)
    }), [])
    const TodaysPuzzle2_action = React.useCallback(wrapFn(pathTo('TodaysPuzzle2'), 'action', async () => {
        await ShowPage(TodaysPuzzle)
    }), [])
    const Archive2_action = React.useCallback(wrapFn(pathTo('Archive2'), 'action', async () => {
        await ShowPage(PuzzleArchive)
    }), [])
    const GamesPlayed2_action = React.useCallback(wrapFn(pathTo('GamesPlayed2'), 'action', async () => {
        await ShowPage(GamesPlayed)
    }), [])
    const MyTeam2_action = React.useCallback(wrapFn(pathTo('MyTeam2'), 'action', async () => {
        await ShowPage(MyTeam)
    }), [])
    const AboutItem2_action = React.useCallback(wrapFn(pathTo('AboutItem2'), 'action', async () => {
        await ShowPage(AboutPage)
    }), [])
    const Terms2_action = React.useCallback(wrapFn(pathTo('Terms2'), 'action', async () => {
        await ShowPage(Terms)
    }), [])
    const Privacy2_action = React.useCallback(wrapFn(pathTo('Privacy2'), 'action', async () => {
        await ShowPage(Privacy)
    }), [])

    return React.createElement(App, {...elProps('Puzzles').maxWidth('600px').messageAction(Puzzles_messageAction).cookieMessage('We use cookies for the usual things - to make the site work properly and learn how people use it.').faviconUrl('puzzleteams_icon_plain.svg').fonts(['Road Rage', 'Grape Nuts']).props, topChildren: React.createElement( React.Fragment, null, React.createElement(AppBar, elProps(pathTo('MainAppBar')).styles(elProps(pathTo('MainAppBar.Styles')).backgroundColor('orange').color('green').fontSize('32').fontFamily('Road Rage').props).props,
            React.createElement(Image, elProps(pathTo('Logo')).source('puzzleteams_icon_plain.svg').styles(elProps(pathTo('Logo.Styles')).width('40').borderRadius('3').props).props),
            React.createElement(TextElement, elProps(pathTo('AppTitle')).styles(elProps(pathTo('AppTitle.Styles')).fontFamily('Road Rage').fontSize('32').props).content('Puzzle Teams').props),
            React.createElement(Block, elProps(pathTo('NavItems')).layout('horizontal').show(Not(NarrowScreen)).props,
            React.createElement(Button, elProps(pathTo('Home')).content('Home').appearance('filled').action(Home_action).styles(elProps(pathTo('Home.Styles')).backgroundColor('orange').marginTop('5').props).props),
            React.createElement(Button, elProps(pathTo('TodaysPuzzle')).content('Today\'s Game').appearance('filled').action(TodaysPuzzle_action).styles(elProps(pathTo('TodaysPuzzle.Styles')).backgroundColor('orange').textWrap('nowrap').marginTop('5').props).props),
            React.createElement(Button, elProps(pathTo('Archive')).content('All the Games').appearance('filled').action(Archive_action).styles(elProps(pathTo('Archive.Styles')).backgroundColor('orange').marginTop('5').props).props),
            React.createElement(Menu, elProps(pathTo('MoreMenu')).label('More...').buttonStyles(elProps(pathTo('MoreMenu.Styles')).color('white').props).props,
            React.createElement(MenuItem, elProps(pathTo('GamesPlayed')).label('Games Played').action(GamesPlayed_action).props),
            React.createElement(MenuItem, elProps(pathTo('PlayerLeagues')).label('Player Leagues').action(PlayerLeagues_action).props),
            React.createElement(MenuItem, elProps(pathTo('MyTeam')).label('My Team').action(MyTeam_action).props),
            React.createElement(MenuItem, elProps(pathTo('AboutItem')).label('About').action(AboutItem_action).props),
            React.createElement(MenuItem, elProps(pathTo('Terms')).label('Terms & Conditions').action(Terms_action).props),
            React.createElement(MenuItem, elProps(pathTo('Privacy')).label('Privacy & Cookies').action(Privacy_action).props),
    ),
    ),
            React.createElement(Menu, elProps(pathTo('HamburgerMenu')).label('Menu').iconName('menu').show(NarrowScreen).buttonStyles(elProps(pathTo('HamburgerMenu.Styles')).color('white').props).props,
            React.createElement(MenuItem, elProps(pathTo('Home2')).label('Home').action(Home2_action).props),
            React.createElement(MenuItem, elProps(pathTo('TodaysPuzzle2')).label('Today\'s Game').action(TodaysPuzzle2_action).props),
            React.createElement(MenuItem, elProps(pathTo('Archive2')).label('All the Games').action(Archive2_action).props),
            React.createElement(MenuItem, elProps(pathTo('GamesPlayed2')).label('Games Played').action(GamesPlayed2_action).props),
            React.createElement(MenuItem, elProps(pathTo('MyTeam2')).label('My Team').action(MyTeam2_action).props),
            React.createElement(MenuItem, elProps(pathTo('AboutItem2')).label('About').action(AboutItem2_action).props),
            React.createElement(MenuItem, elProps(pathTo('Terms2')).label('Terms & Conditions').action(Terms2_action).props),
            React.createElement(MenuItem, elProps(pathTo('Privacy2')).label('Privacy & Cookies').action(Privacy2_action).props),
    ),
            React.createElement(UserLogon, elProps(pathTo('UserLogon1')).props),
            React.createElement(Calculation, elProps(pathTo('NarrowScreen')).props),
    ))
    },
        React.createElement(WebFileDataStore, elProps(pathTo('SiteDataStore')).props),
        React.createElement(Collection, elProps(pathTo('Puzzles')).display(false).props),
        React.createElement(Collection, elProps(pathTo('GamePlays')).display(false).props),
        React.createElement(Collection, elProps(pathTo('Users')).display(false).props),
        React.createElement(Collection, elProps(pathTo('Teams')).display(false).props),
        React.createElement(Collection, elProps(pathTo('Invites')).display(false).props)
    )
}
