const functions = require('firebase-functions')
const next = require('next')

const isDev = process.env.NODE_ENV !== 'production'

const app = next({ dev: isDev, conf: { distDir: '.next' } })
const handle = app.getRequestHandler()

exports.nextApp = functions.https.onRequest((request, response) => app.prepare().then(() => handle(request, response)),
)
