import {onRequest} from 'firebase-functions/v2/https'
import PuzzlesServerExpress from './PuzzlesServerExpress.js'

export const puzzlesserver = onRequest(PuzzlesServerExpress)