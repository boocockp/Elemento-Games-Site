import {expressApp} from './serverRuntime.cjs'
import baseAppFactory from './PuzzlesServer.mjs'

const app = expressApp(baseAppFactory)

export default app