const runtimeUrl = window.elementoRuntimeUrl || 'https://elemento.online/lib/runtime.js'
const Elemento = await import(runtimeUrl)
const {React, trace, elProps, stateProps, wrapFn} = Elemento

// HomePage.js
function HomePage(props) {
    const pathTo = name => props.path + '.' + name
    const {Page, TextElement, Button} = Elemento.components
    const {Get} = Elemento.appFunctions
    const _state = Elemento.useGetStore()
    const app = _state.useObject('Puzzles')
    const {ShowPage} = app
    const Puzzles = _state.useObject('Puzzles.Puzzles')
    const TodaysPuzzleButton_action = React.useCallback(wrapFn(pathTo('TodaysPuzzleButton'), 'action', async () => {
        await ShowPage(TodaysPuzzle)
    }), [])
    const PreviousPuzzles_action = React.useCallback(wrapFn(pathTo('PreviousPuzzles'), 'action', async () => {
        await ShowPage(PuzzleArchive)
    }), [])
    const PuzzleLink1_action = React.useCallback(wrapFn(pathTo('PuzzleLink1'), 'action', async () => {
        await ShowPage(PuzzlePage1)
    }), [])
    const PuzzleLink2_action = React.useCallback(wrapFn(pathTo('PuzzleLink2'), 'action', async () => {
        await ShowPage(PuzzlePage2)
    }), [])
    Elemento.elementoDebug(() => eval(Elemento.useDebugExpr()))

    return React.createElement(Page, elProps(props.path).props,
        React.createElement(TextElement, elProps(pathTo('Heading1')).styles(elProps(pathTo('Heading1.Styles')).fontFamily('Tahoma').fontSize('20').color('green').props).content('The No Boredom puzzle site!').props),
        React.createElement(TextElement, elProps(pathTo('Para1')).content(`Challenge your mind with a fresh puzzle every day.
Word puzzles, number games, visual brainteasers - a different one every morning.
Each takes less than 5 minutes, so you can fit it in whenever you want.`).props),
        React.createElement(Button, elProps(pathTo('TodaysPuzzleButton')).content('Play Today\'s Puzzle').appearance('outline').action(TodaysPuzzleButton_action).styles(elProps(pathTo('TodaysPuzzleButton.Styles')).backgroundColor('orange').color('white').fontSize('32').textTransform('inherit').props).props),
        React.createElement(Button, elProps(pathTo('PreviousPuzzles')).content('Previous Puzzles').appearance('link').action(PreviousPuzzles_action).styles(elProps(pathTo('PreviousPuzzles.Styles')).fontSize('20').props).props),
        React.createElement(TextElement, elProps(pathTo('Heading2')).styles(elProps(pathTo('Heading2.Styles')).fontFamily('Tahoma').fontSize('20').color('green').props).content('Team up with your friends').props),
        React.createElement(TextElement, elProps(pathTo('Para2')).content(`You're welcome to play by yourself, but the real fun begins when you  start a team.  
Teams compete with each other in leagues and one-off showdowns.  
The more people you get in your team, the better your chances!`).props),
        React.createElement(TextElement, elProps(pathTo('Heading3')).styles(elProps(pathTo('Heading3.Styles')).fontFamily('Tahoma').fontSize('20').color('green').props).content('Showcase your ideas').props),
        React.createElement(TextElement, elProps(pathTo('Text9')).content(`Puzzle Teams runs off your creativity.
If you have an idea for a great puzzle, send it to us and you could see it on the site in a few days.
Even better - program it yourself with the easy to use Elemento tool and get everyone playing the puzzle YOU created!`).props),
        React.createElement(TextElement, elProps(pathTo('Heading4')).styles(elProps(pathTo('Heading4.Styles')).fontFamily('Tahoma').fontSize('20').color('green').props).content('Sneaky previews').props),
        React.createElement(TextElement, elProps(pathTo('Text11')).content('Here are some examples of the puzzles you will be seeing when we launch').props),
        React.createElement(Button, elProps(pathTo('PuzzleLink1')).content('Photo Jigsaw').appearance('link').action(PuzzleLink1_action).styles(elProps(pathTo('PuzzleLink1.Styles')).fontSize('20').props).props),
        React.createElement(Button, elProps(pathTo('PuzzleLink2')).content('Anagram Race').appearance('link').action(PuzzleLink2_action).styles(elProps(pathTo('PuzzleLink2.Styles')).fontSize('20').props).props),
        React.createElement(TextElement, elProps(pathTo('Text12')).content(Get(Puzzles, '2024-07-31').url).props),
    )
}

// PuzzlePage1.js
function PuzzlePage1(props) {
    const pathTo = name => props.path + '.' + name
    const {Page, Button, Frame} = Elemento.components
    const _state = Elemento.useGetStore()
    const app = _state.useObject('Puzzles')
    const {ShowPage} = app
    const BackButton_action = React.useCallback(wrapFn(pathTo('BackButton'), 'action', async () => {
        await ShowPage(HomePage)
    }), [])
    Elemento.elementoDebug(() => eval(Elemento.useDebugExpr()))

    return React.createElement(Page, elProps(props.path).props,
        React.createElement(Button, elProps(pathTo('BackButton')).content('<- Back to home page').appearance('link').action(BackButton_action).props),
        React.createElement(Frame, elProps(pathTo('Frame1')).source('https://elemento.online/run/gh/boocockp/photo-jigsaw/PhotoJigsaw').styles(elProps(pathTo('Frame1.Styles')).height('100%').width('100%').props).props),
    )
}

// PuzzlePage2.js
function PuzzlePage2(props) {
    const pathTo = name => props.path + '.' + name
    const {Page, Button, Frame} = Elemento.components
    const _state = Elemento.useGetStore()
    const app = _state.useObject('Puzzles')
    const {ShowPage} = app
    const BackButton_action = React.useCallback(wrapFn(pathTo('BackButton'), 'action', async () => {
        await ShowPage(HomePage)
    }), [])
    Elemento.elementoDebug(() => eval(Elemento.useDebugExpr()))

    return React.createElement(Page, elProps(props.path).props,
        React.createElement(Button, elProps(pathTo('BackButton')).content('<- Back to home page').appearance('link').action(BackButton_action).props),
        React.createElement(Frame, elProps(pathTo('Frame1')).source('https://elemento.online/run/gh/boocockp/anagram-race/AnagramRace').styles(elProps(pathTo('Frame1.Styles')).height('100%').width('100%').props).props),
    )
}

// TodaysPuzzle.js
function TodaysPuzzle(props) {
    const pathTo = name => props.path + '.' + name
    const {Page, Calculation, TextElement, Frame, Button} = Elemento.components
    const {DateFormat, Today} = Elemento.globalFunctions
    const {Get} = Elemento.appFunctions
    const _state = Elemento.useGetStore()
    const app = _state.useObject('Puzzles')
    const {ShowPage} = app
    const Puzzles = _state.useObject('Puzzles.Puzzles')
    const TodaysDate = _state.setObject(pathTo('TodaysDate'), new Calculation.State(stateProps(pathTo('TodaysDate')).value(DateFormat(Today(), 'yyyy-MM-dd')).props))
    const BackButton_action = React.useCallback(wrapFn(pathTo('BackButton'), 'action', async () => {
        await ShowPage(HomePage)
    }), [])
    Elemento.elementoDebug(() => eval(Elemento.useDebugExpr()))

    return React.createElement(Page, elProps(props.path).props,
        React.createElement(Calculation, elProps(pathTo('TodaysDate')).show(false).props),
        React.createElement(TextElement, elProps(pathTo('Title')).styles(elProps(pathTo('Title.Styles')).color('green').width('100%').textAlign('right').marginTop('0').props).content('Today\'s Puzzle - ' + DateFormat(Today(), 'd MMM yyyy')).props),
        React.createElement(Frame, elProps(pathTo('PuzzleFrame')).source(Get(Puzzles, TodaysDate).url).styles(elProps(pathTo('PuzzleFrame.Styles')).height('100%').width('100%').marginTop('3').props).props),
        React.createElement(Button, elProps(pathTo('BackButton')).content('<< Back to home page').appearance('link').action(BackButton_action).props),
    )
}

// PuzzleArchive.js
const PuzzleArchive_PuzzleItemSetItem = React.memo(function PuzzleArchive_PuzzleItemSetItem(props) {
    const pathTo = name => props.path + '.' + name
    const parentPathWith = name => Elemento.parentPath(props.path) + '.' + name
    const {$item, $itemId, $selected, onClick} = props
    const {ItemSetItem, Block, TextElement, Button} = Elemento.components
    const {DateFormat, DateVal} = Elemento.globalFunctions
    const _state = Elemento.useGetStore()
    const Block1 = _state.setObject(pathTo('Block1'), new Block.State(stateProps(pathTo('Block1')).props))
    const canDragItem = undefined
    const styles = undefined

    return React.createElement(ItemSetItem, {path: props.path, item: $item, itemId: $itemId, onClick, canDragItem, styles},
        React.createElement(Block, elProps(pathTo('Block1')).layout('horizontal wrapped').styles(elProps(pathTo('Block1.Styles')).fontSize('18').props).props,
            React.createElement(TextElement, elProps(pathTo('PuzzleDate')).styles(elProps(pathTo('PuzzleDate.Styles')).fontSize('inherit').marginRight('3em').props).content(DateFormat(DateVal($item.id), 'dd MMM yyyy')).props),
            React.createElement(Button, elProps(pathTo('PuzzleLink')).content($item.name).appearance('link').styles(elProps(pathTo('PuzzleLink.Styles')).fontSize('inherit').props).props),
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
        React.createElement(TextElement, elProps(pathTo('Title')).styles(elProps(pathTo('Title.Styles')).fontSize('20').props).content('Previous Puzzles').props),
        React.createElement(ItemSet, elProps(pathTo('PuzzleItemSet')).itemContentComponent(PuzzleArchive_PuzzleItemSetItem).props),
    )
}

// appMain.js
export default function Puzzles(props) {
    const pathTo = name => 'Puzzles' + '.' + name
    const {App, AppBar, TextElement, WebFileDataStore, Collection} = Elemento.components
    const pages = {HomePage, PuzzlePage1, PuzzlePage2, TodaysPuzzle, PuzzleArchive}
    const appContext = Elemento.useGetAppContext()
    const _state = Elemento.useGetStore()
    const app = _state.setObject('Puzzles', new App.State({pages, appContext}))
    const SiteDataStore = _state.setObject('Puzzles.SiteDataStore', new WebFileDataStore.State(stateProps('Puzzles.SiteDataStore').url('https://firebasestorage.googleapis.com/v0/b/elemento-games-site.appspot.com/o/public%2FsiteData.json?alt=media').props))
    const Puzzles = _state.setObject('Puzzles.Puzzles', new Collection.State(stateProps('Puzzles.Puzzles').dataStore(SiteDataStore).collectionName('Puzzles').props))

    return React.createElement(App, {...elProps('Puzzles').props, topChildren: React.createElement( React.Fragment, null, React.createElement(AppBar, elProps(pathTo('MainAppBar')).title('Puzzle Teams').styles(elProps(pathTo('MainAppBar.Styles')).backgroundColor('orange').color('green').fontSize('32').fontFamily('Road Rage').props).props,
            React.createElement(TextElement, elProps(pathTo('Text7')).styles(elProps(pathTo('Text7.Styles')).position('absolute').top('50%').right('10').translate('0 -50%').props).content('Coming soon!').props),
    ))
    },
        React.createElement(WebFileDataStore, elProps(pathTo('SiteDataStore')).props),
        React.createElement(Collection, elProps(pathTo('Puzzles')).display(false).props)
    )
}
