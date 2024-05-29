const runtimeUrl = window.elementoRuntimeUrl || 'https://elemento.online/lib/runtime.js'
const Elemento = await import(runtimeUrl)
const {React} = Elemento

// MainPage.js
function MainPage(props) {
    const pathWith = name => props.path + '.' + name
    const {Page, TextElement} = Elemento.components
    const _state = Elemento.useGetStore()
    Elemento.elementoDebug(eval(Elemento.useDebugExpr()))

    return React.createElement(Page, {path: props.path},
        React.createElement(TextElement, {path: pathWith('PageTitle'), styles: {fontSize: '48', fontFamily: 'Tahoma', fontWeight: 'bold', fontStyle: 'italic', color: 'green', backgroundColor: 'orange', padding: '0.0em 0.5em', border: '3px solid green !important;', borderRadius: '0.2em', marginLeft: 'auto', marginRight: 'auto'}}, 'Puzzle Teams'),
        React.createElement(TextElement, {path: pathWith('Heading1'), styles: {fontFamily: 'Tahoma', fontSize: '20'}}, 'The No Boredom puzzle site!'),
        React.createElement(TextElement, {path: pathWith('Para1')}, `Challenge your mind with a fresh puzzle every day.
Word puzzles, number games, visual brainteasers - a different one every morning.
Each takes less than 5 minutes, so you can fit it in whenever you want.`),
        React.createElement(TextElement, {path: pathWith('Heading2'), styles: {fontFamily: 'Tahoma', fontSize: '20'}}, 'Team up with your friends'),
        React.createElement(TextElement, {path: pathWith('Para2')}, `You're welcome to play by yourself, but the real fun begins when you  start a team.  
Teams compete with each other in leagues and one-off showdowns.  
The more people you get in your team, the better your chances!`),
        React.createElement(TextElement, {path: pathWith('Heading3'), styles: {fontFamily: 'Tahoma', fontSize: '20'}}, 'Showcase your ideas'),
        React.createElement(TextElement, {path: pathWith('Text9')}, `Puzzle Teams runs off your creativity.
If you have an idea for a great puzzle, send it to us and you could see it on the site in a few days.
Even better - program it yourself with the easy to use Elemento tool and get everyone playing the puzzle YOU created!`),
    )
}

// appMain.js
export default function MainApp(props) {
    const pathWith = name => 'MainApp' + '.' + name
    const {App, AppBar, TextElement} = Elemento.components
    const pages = {MainPage}
    const {appContext} = props
    const _state = Elemento.useGetStore()
    const app = _state.setObject('MainApp', new App.State({pages, appContext}))

    return React.createElement(App, {path: 'MainApp', topChildren: React.createElement( React.Fragment, null, React.createElement(AppBar, {path: pathWith('AppBar1'), styles: {backgroundColor: 'green'}},
            React.createElement(TextElement, {path: pathWith('Text7'), styles: {margin: '-10px'}}, 'Coming soon!'),
    ))
    },)
}
