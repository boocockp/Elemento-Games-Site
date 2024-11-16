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
    const {FirstNotNull} = Elemento.globalFunctions
    const _state = Elemento.useGetStore()
    const TodaysPuzzleUrl = _state.useObject('Puzzles.TodaysPuzzleUrl')
    const LatestPuzzleUrl = _state.useObject('Puzzles.LatestPuzzleUrl')
    Elemento.elementoDebug(() => eval(Elemento.useDebugExpr()))

    return React.createElement(Page, elProps(props.path).styles(elProps(pathTo('TodaysPuzzle.Styles')).paddingLeft('0').paddingRight('0').paddingTop('0').paddingBottom('0').props).props,
        React.createElement(Frame, elProps(pathTo('GameFrame')).source(FirstNotNull(TodaysPuzzleUrl(), LatestPuzzleUrl())).styles(elProps(pathTo('GameFrame.Styles')).height('calc(100% + 16px)').width('calc(100% + 8px)').marginLeft('-4px').marginRight('-4px').marginTop('-8px').props).props),
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
    const InviteLink = _state.setObject(pathTo('InviteLink'), new Calculation.State(stateProps(pathTo('InviteLink')).value(InviteId ? CurrentUrl().text.replace(/\/NewInvite/, '/AcceptInvite/') + InviteId : null).props))
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
            React.createElement(Calculation, elProps(pathTo('InviteLink')).label('Invite Link').show(true).styles(elProps(pathTo('InviteLink.Styles')).width('calc(100% - 5em)').maxWidth('30em').props).props),
            React.createElement(Button, elProps(pathTo('Copy')).content('Copy').iconName('content_copy').appearance('outline').show(NotNull(InviteId)).action(Copy_action).styles(elProps(pathTo('Copy.Styles')).height('40').props).props),
    ),
        React.createElement(Button, elProps(pathTo('CreateInvite')).content('New Invite').appearance('filled').action(CreateInvite_action).props),
    )
}

// AcceptInvite.js
function AcceptInvite(props) {
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
AcceptInvite.notLoggedInPage = 'AcceptInviteLogin'

// AcceptInviteLogin.js
function AcceptInviteLogin(props) {
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
            UpdateUser: {
                params: ['changes'],
                action: true
            },

            GetUser: {
                params: ['changes']
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
            }
        }
    };
}

export default function Puzzles(props) {
    const pathTo = name => 'Puzzles' + '.' + name
    const {App, WebFileDataStore, FirestoreDataStore, ServerAppConnector, Collection, AppBar, Image, TextElement, Block, Button, Menu, MenuItem, UserLogon, Calculation} = Elemento.components
    const {If, And, Log, Record, Now, Last, Sort, DateFormat, Today, First, Not} = Elemento.globalFunctions
    const pages = {HomePage, AboutPage, TodaysPuzzle, ArchivedPuzzle, PuzzleArchive, GamesPlayed, NewTeam, NewInvite, AcceptInvite, AcceptInviteLogin, Terms, Privacy}
    const appContext = Elemento.useGetAppContext()
    const {CurrentUser, Query, Add, Get} = Elemento.appFunctions
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
    const StoreGamePlay = _state.setObject('Puzzles.StoreGamePlay', React.useCallback(wrapFn(pathTo('StoreGamePlay'), 'calculation', async (data) => {
        let puzzleUrl = data.url
        let puzzleResult = await Query(Puzzles, {url: puzzleUrl})
        let puzzle = puzzleResult[0]
        let score = data.score
        Log(CurrentUser().uid, puzzle.id, score)
        return Add(GamePlays, Record('DateTime', Now(), 'UserId', CurrentUser().uid, 'PuzzleId', puzzle.id, 'Score', score))
    }), [Puzzles, GamePlays]))
    const LatestPuzzleUrl = _state.setObject('Puzzles.LatestPuzzleUrl', React.useCallback(wrapFn(pathTo('LatestPuzzleUrl'), 'calculation', () => {
        let allPuzzles = Query(Puzzles, {})
        return Last(Sort(allPuzzles, $item => $item.id))?.url
    }), [Puzzles]))
    const TodaysPuzzleUrl = _state.setObject('Puzzles.TodaysPuzzleUrl', React.useCallback(wrapFn(pathTo('TodaysPuzzleUrl'), 'calculation', () => {
        let todayId = DateFormat(Today(), 'yyyy-MM-dd')
        let puzzle = First(Query(Puzzles, {id: todayId}))
        return puzzle?.url
    }), [Puzzles]))
    const UserData = _state.setObject('Puzzles.UserData', React.useCallback(wrapFn(pathTo('UserData'), 'calculation', () => {
        return If(CurrentUser(), () => Query(Users, Record('id', CurrentUser().uid))[0])
    }), [Users]))
    const UsersTeam = _state.setObject('Puzzles.UsersTeam', React.useCallback(wrapFn(pathTo('UsersTeam'), 'calculation', () => {
        let teamId = UserData()?.TeamId
        return If(teamId, () => Get(Teams, teamId))
    }), [UserData, Teams]))
    const IsTeamOwner = _state.setObject('Puzzles.IsTeamOwner', React.useCallback(wrapFn(pathTo('IsTeamOwner'), 'calculation', () => {
        return UsersTeam()?.OwnerId == CurrentUser()?.uid
    }), [UsersTeam]))
    const NavItems = _state.setObject('Puzzles.NavItems', new Block.State(stateProps('Puzzles.NavItems').props))
    const NarrowScreen = _state.setObject('Puzzles.NarrowScreen', new Calculation.State(stateProps('Puzzles.NarrowScreen').value(AppWidth() < 630).props))
    const Puzzles_messageAction = React.useCallback(wrapFn(pathTo('Puzzles'), 'messageAction', async ($sender, $message) => {
        If(And($message.score, CurrentUser()), async () => await StoreGamePlay($message))
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
    const NewTeam_action = React.useCallback(wrapFn(pathTo('NewTeam'), 'action', async () => {
        await ShowPage(NewTeam)
    }), [])
    const InviteTeamMember_action = React.useCallback(wrapFn(pathTo('InviteTeamMember'), 'action', async () => {
        await ShowPage(NewInvite)
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
    const NewTeam2_action = React.useCallback(wrapFn(pathTo('NewTeam2'), 'action', async () => {
        await ShowPage(NewTeam)
    }), [])
    const InviteTeamMember2_action = React.useCallback(wrapFn(pathTo('InviteTeamMember2'), 'action', async () => {
        await ShowPage(NewInvite)
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
            React.createElement(MenuItem, elProps(pathTo('NewTeam')).label('New Team').action(NewTeam_action).props),
            React.createElement(MenuItem, elProps(pathTo('InviteTeamMember')).label('Invite Team Member').action(InviteTeamMember_action).show(IsTeamOwner()).props),
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
            React.createElement(MenuItem, elProps(pathTo('NewTeam2')).label('New Team').action(NewTeam2_action).props),
            React.createElement(MenuItem, elProps(pathTo('InviteTeamMember2')).label('Invite Team Member').action(InviteTeamMember2_action).show(IsTeamOwner()).props),
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
