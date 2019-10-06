
'use strict'

const App = require('./src/App.js')

function createApp (options) {
  console.log('start...')
  return new App(options)
}

function dev (options) {
  const app = createApp(options)
  app.dev()
}

function build (options) {
  const app = createApp(options)
  app.build()
}
build()
// async function build (options) {
//   const app = createApp(options)
//   await app.process()
//   return app.build()
// }

