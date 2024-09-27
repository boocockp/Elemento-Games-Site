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
    const PuzzleArchive_action = React.useCallback(wrapFn(pathTo('PuzzleArchive'), 'action', async () => {
        await ShowPage(PuzzleArchive)
    }), [])
    const AboutLink_action = React.useCallback(wrapFn(pathTo('AboutLink'), 'action', async () => {
        await ShowPage(AboutPage)
    }), [])
    Elemento.elementoDebug(() => eval(Elemento.useDebugExpr()))

    return React.createElement(Page, elProps(props.path).props,
        React.createElement(TextElement, elProps(pathTo('Heading1')).styles(elProps(pathTo('Heading1.Styles')).fontFamily('Tahoma').fontSize('20').color('green').marginTop('20px').props).content('The No Boredom puzzle site!').props),
        React.createElement(TextElement, elProps(pathTo('Para1')).content(`Challenge your mind with a fresh puzzle every day.
Word puzzles, number games, visual brainteasers - a different one every morning.
Each takes less than 5 minutes, so you can fit it in whenever you want.`).props),
        React.createElement(Button, elProps(pathTo('TodaysPuzzleButton')).content('Play Today\'s Puzzle').appearance('outline').action(TodaysPuzzleButton_action).styles(elProps(pathTo('TodaysPuzzleButton.Styles')).backgroundColor('orange').color('white').fontSize('32').textTransform('inherit').props).props),
        React.createElement(Button, elProps(pathTo('PuzzleArchive')).content('Puzzle Archive').appearance('link').action(PuzzleArchive_action).styles(elProps(pathTo('PuzzleArchive.Styles')).fontSize('20').props).props),
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
        React.createElement(TextElement, elProps(pathTo('Para1')).content(`Challenge your mind with a fresh puzzle every day.
Word puzzles, number games, visual brainteasers - a different one every morning.
Each takes less than 5 minutes, so you can fit it in whenever you want.`).props),
        React.createElement(TextElement, elProps(pathTo('Heading2')).styles(elProps(pathTo('Heading2.Styles')).fontFamily('Tahoma').fontSize('20').color('green').props).content('Team up with your friends').props),
        React.createElement(TextElement, elProps(pathTo('Para2')).content(`You're welcome to play by yourself, but the real fun begins when you  start a team.  
Teams compete with each other in leagues and one-off showdowns.  
The more people you get in your team, the better your chances!`).props),
        React.createElement(TextElement, elProps(pathTo('Heading3')).styles(elProps(pathTo('Heading3.Styles')).fontFamily('Tahoma').fontSize('20').color('green').props).content('Showcase your ideas').props),
        React.createElement(TextElement, elProps(pathTo('Text9')).content(`Puzzle Teams runs off your creativity.
If you have an idea for a great puzzle, send it to us and you could see it on the site in a few days.
Even better - program it yourself with the easy to use Elemento tool and get everyone playing the puzzle YOU created!`).props),
        React.createElement(Button, elProps(pathTo('TodaysPuzzleButton')).content('Play Today\'s Puzzle').appearance('outline').action(TodaysPuzzleButton_action).styles(elProps(pathTo('TodaysPuzzleButton.Styles')).backgroundColor('orange').color('white').fontSize('20').textTransform('inherit').props).props),
        React.createElement(Button, elProps(pathTo('PuzzleArchive')).content('Puzzle Archive').appearance('link').action(PuzzleArchive_action).styles(elProps(pathTo('PuzzleArchive.Styles')).fontSize('20').props).props),
    )
}

// TodaysPuzzle.js
function TodaysPuzzle(props) {
    const pathTo = name => props.path + '.' + name
    const {Page, Calculation, Frame, TextElement} = Elemento.components
    const {DateFormat, Today, FirstNotNull} = Elemento.globalFunctions
    const _state = Elemento.useGetStore()
    const TodaysPuzzleUrl = _state.useObject('Puzzles.TodaysPuzzleUrl')
    const LatestPuzzleUrl = _state.useObject('Puzzles.LatestPuzzleUrl')
    const TodaysDate = _state.setObject(pathTo('TodaysDate'), new Calculation.State(stateProps(pathTo('TodaysDate')).value(DateFormat(Today(), 'yyyy-MM-dd')).props))
    Elemento.elementoDebug(() => eval(Elemento.useDebugExpr()))

    return React.createElement(Page, elProps(props.path).styles(elProps(pathTo('TodaysPuzzle.Styles')).paddingLeft('0').paddingRight('0').paddingTop('0').paddingBottom('0').props).props,
        React.createElement(Calculation, elProps(pathTo('TodaysDate')).show(false).props),
        React.createElement(Frame, elProps(pathTo('PuzzleFrame')).source(FirstNotNull(TodaysPuzzleUrl(), LatestPuzzleUrl())).styles(elProps(pathTo('PuzzleFrame.Styles')).height('calc(100% + 16px)').width('calc(100% + 8px)').marginLeft('-4px').marginRight('-4px').marginTop('-8px').props).props),
        React.createElement(TextElement, elProps(pathTo('Title')).styles(elProps(pathTo('Title.Styles')).color('green').width('100%').textAlign('right').marginTop('0').props).content('Today\'s Puzzle - ' + DateFormat(Today(), 'd MMM yyyy')).props),
    )
}

// ArchivedPuzzle.js
function ArchivedPuzzle(props) {
    const pathTo = name => props.path + '.' + name
    const {Page, Calculation, Frame, TextElement} = Elemento.components
    const {DateFormat, DateVal} = Elemento.globalFunctions
    const {Get} = Elemento.appFunctions
    const _state = Elemento.useGetStore()
    const app = _state.useObject('Puzzles')
    const {CurrentUrl} = app
    const Puzzles = _state.useObject('Puzzles.Puzzles')
    const PuzzleDate = _state.setObject(pathTo('PuzzleDate'), new Calculation.State(stateProps(pathTo('PuzzleDate')).value(CurrentUrl().pathSections[0]).props))
    Elemento.elementoDebug(() => eval(Elemento.useDebugExpr()))

    return React.createElement(Page, elProps(props.path).styles(elProps(pathTo('ArchivedPuzzle.Styles')).paddingLeft('0').paddingRight('0').paddingTop('0').padding('0').props).props,
        React.createElement(Calculation, elProps(pathTo('PuzzleDate')).show(false).props),
        React.createElement(Frame, elProps(pathTo('PuzzleFrame')).source(Get(Puzzles, PuzzleDate).url).styles(elProps(pathTo('PuzzleFrame.Styles')).height('calc(100% + 16px)').width('calc(100% + 8px)').marginTop('-8px').marginLeft('-4px').marginRight('-4px').props).props),
        React.createElement(TextElement, elProps(pathTo('Title')).show(document.documentElement.clientHeight > 600).styles(elProps(pathTo('Title.Styles')).color('green').width('98%').textAlign('right').marginTop('0').props).content('Puzzle Archive - ' + DateFormat(DateVal(PuzzleDate), 'd MMMM yyyy')).props),
    )
}

// PuzzleArchive.js
const PuzzleArchive_PuzzleItemSetItem = React.memo(function PuzzleArchive_PuzzleItemSetItem(props) {
    const pathTo = name => props.path + '.' + name
    const parentPathWith = name => Elemento.parentPath(props.path) + '.' + name
    const {$item, $itemId, $index, $selected, onClick} = props
    const {ItemSetItem, Block, TextElement, Button} = Elemento.components
    const {DateFormat, DateVal} = Elemento.globalFunctions
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
        React.createElement(Block, elProps(pathTo('Block1')).layout('horizontal wrapped').styles(elProps(pathTo('Block1.Styles')).fontSize('18').props).props,
            React.createElement(TextElement, elProps(pathTo('PuzzleDate')).styles(elProps(pathTo('PuzzleDate.Styles')).fontSize('inherit').marginRight('3em').props).content(DateFormat(DateVal($item.id), 'dd MMMM yyyy')).props),
            React.createElement(Button, elProps(pathTo('PuzzleLink')).content($item.name).appearance('link').action(PuzzleLink_action).styles(elProps(pathTo('PuzzleLink.Styles')).fontSize('inherit').props).props),
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
        React.createElement(TextElement, elProps(pathTo('Title')).styles(elProps(pathTo('Title.Styles')).fontSize('20').color('green').props).content('Puzzle Archive').props),
        React.createElement(ItemSet, elProps(pathTo('PuzzleItemSet')).itemContentComponent(PuzzleArchive_PuzzleItemSetItem).props),
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
export default function Puzzles(props) {
    const pathTo = name => 'Puzzles' + '.' + name
    const {App, WebFileDataStore, Collection, AppBar, Image, TextElement, Block, Button, Menu, MenuItem, Calculation} = Elemento.components
    const {Last, Sort, DateFormat, Today, First, Not} = Elemento.globalFunctions
    const pages = {HomePage, AboutPage, TodaysPuzzle, ArchivedPuzzle, PuzzleArchive, Terms, Privacy}
    const appContext = Elemento.useGetAppContext()
    const {Query} = Elemento.appFunctions
    const _state = Elemento.useGetStore()
    const app = _state.setObject('Puzzles', new App.State({pages, appContext}))
    const {ShowPage, AppWidth} = app
    const SiteDataStore = _state.setObject('Puzzles.SiteDataStore', new WebFileDataStore.State(stateProps('Puzzles.SiteDataStore').url('https://firebasestorage.googleapis.com/v0/b/elemento-games-site.appspot.com/o/public%2FsiteData.json?alt=media').props))
    const Puzzles = _state.setObject('Puzzles.Puzzles', new Collection.State(stateProps('Puzzles.Puzzles').dataStore(SiteDataStore).collectionName('Puzzles').props))
    const LatestPuzzleUrl = _state.setObject('Puzzles.LatestPuzzleUrl', React.useCallback(wrapFn(pathTo('LatestPuzzleUrl'), 'calculation', () => {
        let allPuzzles = Query(Puzzles, {})
        return Last(Sort(allPuzzles, $item => $item.id))?.url
    }), [Puzzles]))
    const TodaysPuzzleUrl = _state.setObject('Puzzles.TodaysPuzzleUrl', React.useCallback(wrapFn(pathTo('TodaysPuzzleUrl'), 'calculation', () => {
        let todayId = DateFormat(Today(), 'yyyy-MM-dd')
        let puzzle = First(Query(Puzzles, {id: todayId}))
        return puzzle?.url
    }), [Puzzles]))
    const NavItems = _state.setObject('Puzzles.NavItems', new Block.State(stateProps('Puzzles.NavItems').props))
    const NarrowScreen = _state.setObject('Puzzles.NarrowScreen', new Calculation.State(stateProps('Puzzles.NarrowScreen').value(AppWidth() < 630).props))
    const Home_action = React.useCallback(wrapFn(pathTo('Home'), 'action', async () => {
        await ShowPage(HomePage)
    }), [])
    const TodaysPuzzle_action = React.useCallback(wrapFn(pathTo('TodaysPuzzle'), 'action', async () => {
        await ShowPage(TodaysPuzzle)
    }), [])
    const Archive_action = React.useCallback(wrapFn(pathTo('Archive'), 'action', async () => {
        await ShowPage(PuzzleArchive)
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
    const AboutItem2_action = React.useCallback(wrapFn(pathTo('AboutItem2'), 'action', async () => {
        await ShowPage(AboutPage)
    }), [])
    const Terms2_action = React.useCallback(wrapFn(pathTo('Terms2'), 'action', async () => {
        await ShowPage(Terms)
    }), [])
    const Privacy2_action = React.useCallback(wrapFn(pathTo('Privacy2'), 'action', async () => {
        await ShowPage(Privacy)
    }), [])

    return React.createElement(App, {...elProps('Puzzles').maxWidth('600px').cookieMessage('We use cookies for the usual things - to make the site work properly and learn how people use it.').faviconUrl('puzzleteams_icon_plain.svg').fonts(['Road Rage', 'Grape Nuts']).props, topChildren: React.createElement( React.Fragment, null, React.createElement(AppBar, elProps(pathTo('MainAppBar')).styles(elProps(pathTo('MainAppBar.Styles')).backgroundColor('orange').color('green').fontSize('32').fontFamily('Road Rage').props).props,
            React.createElement(Image, elProps(pathTo('Logo')).source('puzzleteams_icon_plain.svg').styles(elProps(pathTo('Logo.Styles')).width('40').borderRadius('3').props).props),
            React.createElement(TextElement, elProps(pathTo('AppTitle')).styles(elProps(pathTo('AppTitle.Styles')).fontFamily('Road Rage').fontSize('32').props).content('Puzzle Teams').props),
            React.createElement(Block, elProps(pathTo('NavItems')).layout('horizontal').show(Not(NarrowScreen)).props,
            React.createElement(Button, elProps(pathTo('Home')).content('Home').appearance('filled').action(Home_action).styles(elProps(pathTo('Home.Styles')).backgroundColor('orange').marginTop('5').props).props),
            React.createElement(Button, elProps(pathTo('TodaysPuzzle')).content('Today\'s Puzzle').appearance('filled').action(TodaysPuzzle_action).styles(elProps(pathTo('TodaysPuzzle.Styles')).backgroundColor('orange').textWrap('nowrap').marginTop('5').props).props),
            React.createElement(Button, elProps(pathTo('Archive')).content('Archive').appearance('filled').action(Archive_action).styles(elProps(pathTo('Archive.Styles')).backgroundColor('orange').marginTop('5').props).props),
            React.createElement(Menu, elProps(pathTo('MoreMenu')).label('More...').buttonStyles(elProps(pathTo('MoreMenu.Styles')).color('white').props).props,
            React.createElement(MenuItem, elProps(pathTo('AboutItem')).label('About').action(AboutItem_action).props),
            React.createElement(MenuItem, elProps(pathTo('Terms')).label('Terms & Conditions').action(Terms_action).props),
            React.createElement(MenuItem, elProps(pathTo('Privacy')).label('Privacy & Cookies').action(Privacy_action).props),
    ),
    ),
            React.createElement(Menu, elProps(pathTo('HamburgerMenu')).label('Menu').iconName('menu').show(NarrowScreen).buttonStyles(elProps(pathTo('HamburgerMenu.Styles')).color('white').props).props,
            React.createElement(MenuItem, elProps(pathTo('Home2')).label('Home').action(Home2_action).props),
            React.createElement(MenuItem, elProps(pathTo('TodaysPuzzle2')).label('Today\'s Puzzle').action(TodaysPuzzle2_action).props),
            React.createElement(MenuItem, elProps(pathTo('Archive2')).label('Archive').action(Archive2_action).props),
            React.createElement(MenuItem, elProps(pathTo('AboutItem2')).label('About').action(AboutItem2_action).props),
            React.createElement(MenuItem, elProps(pathTo('Terms2')).label('Terms & Conditions').action(Terms2_action).props),
            React.createElement(MenuItem, elProps(pathTo('Privacy2')).label('Privacy & Cookies').action(Privacy2_action).props),
    ),
            React.createElement(Calculation, elProps(pathTo('NarrowScreen')).props),
    ))
    },
        React.createElement(WebFileDataStore, elProps(pathTo('SiteDataStore')).props),
        React.createElement(Collection, elProps(pathTo('Puzzles')).display(false).props)
    )
}
