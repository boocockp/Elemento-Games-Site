const runtimeUrl = window.elementoRuntimeUrl || 'https://elemento.online/lib/runtime.js'
const Elemento = await import(runtimeUrl)
const {React} = Elemento

// HomePage.js
function HomePage(props) {
    const pathWith = name => props.path + '.' + name
    const {Page, TextElement, Button} = Elemento.components
    const _state = Elemento.useGetStore()
    const app = _state.useObject('Puzzles')
    const {ShowPage} = app
    const PuzzleLink1_action = React.useCallback(async () => {
        await ShowPage(PuzzlePage1)
    }, [])
    Elemento.elementoDebug(eval(Elemento.useDebugExpr()))

    return React.createElement(Page, {path: props.path},
        React.createElement(TextElement, {path: pathWith('Heading1'), styles: {fontFamily: 'Tahoma', fontSize: '20', color: 'green'}}, 'The No Boredom puzzle site!'),
        React.createElement(TextElement, {path: pathWith('Para1')}, `Challenge your mind with a fresh puzzle every day.
Word puzzles, number games, visual brainteasers - a different one every morning.
Each takes less than 5 minutes, so you can fit it in whenever you want.`),
        React.createElement(TextElement, {path: pathWith('Heading2'), styles: {fontFamily: 'Tahoma', fontSize: '20', color: 'green'}}, 'Team up with your friends'),
        React.createElement(TextElement, {path: pathWith('Para2')}, `You're welcome to play by yourself, but the real fun begins when you  start a team.  
Teams compete with each other in leagues and one-off showdowns.  
The more people you get in your team, the better your chances!`),
        React.createElement(TextElement, {path: pathWith('Heading3'), styles: {fontFamily: 'Tahoma', fontSize: '20', color: 'green'}}, 'Showcase your ideas'),
        React.createElement(TextElement, {path: pathWith('Text9')}, `Puzzle Teams runs off your creativity.
If you have an idea for a great puzzle, send it to us and you could see it on the site in a few days.
Even better - program it yourself with the easy to use Elemento tool and get everyone playing the puzzle YOU created!`),
        React.createElement(TextElement, {path: pathWith('Heading4'), styles: {fontFamily: 'Tahoma', fontSize: '20', color: 'green'}}, 'Preview puzzles'),
        React.createElement(TextElement, {path: pathWith('Text11')}, 'Here are some examples of the puzzles you will be seeing when we launch'),
        React.createElement(Button, {path: pathWith('PuzzleLink1'), content: 'Photo Jigsaw', appearance: 'link', action: PuzzleLink1_action, styles: {fontSize: '20'}}),
    )
}

// PuzzlePage1.js
function PuzzlePage1(props) {
    const pathWith = name => props.path + '.' + name
    const {Page, Button, Frame} = Elemento.components
    const _state = Elemento.useGetStore()
    const app = _state.useObject('Puzzles')
    const {ShowPage} = app
    const BackButton_action = React.useCallback(async () => {
        await ShowPage(HomePage)
    }, [])
    Elemento.elementoDebug(eval(Elemento.useDebugExpr()))

    return React.createElement(Page, {path: props.path},
        React.createElement(Button, {path: pathWith('BackButton'), content: '<- Back to home page', appearance: 'link', action: BackButton_action}),
        React.createElement(Frame, {path: pathWith('Frame1'), source: 'https://elemento.online/run/gh/boocockp/photo-jigsaw/MainApp', styles: {height: '100%', width: '100%'}}),
    )
}

// appMain.js
export default function Puzzles(props) {
    const pathWith = name => 'Puzzles' + '.' + name
    const {App, AppBar, TextElement} = Elemento.components
    const pages = {HomePage, PuzzlePage1}
    const appContext = Elemento.useGetAppContext()
    const _state = Elemento.useGetStore()
    const app = _state.setObject('Puzzles', new App.State({pages, appContext}))

    return React.createElement(App, {path: 'Puzzles', topChildren: React.createElement( React.Fragment, null, React.createElement(AppBar, {path: pathWith('MainAppBar'), title: 'Puzzle Teams', styles: {backgroundColor: 'orange', color: 'green', fontFamily: 'tahoma', fontSize: '32'}},
            React.createElement(TextElement, {path: pathWith('Text7'), styles: {position: 'absolute', top: '50%', right: '10', translate: '0 -50%'}}, 'Coming soon!'),
    ))
    },)
}
