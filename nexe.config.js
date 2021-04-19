const { compile } = require('nexe')

compile({
  // input: './.output/server/index.js',
  input: './nexe-test.js',
  output: './nexe-demo',
  // output: '../nuxt-nexe/nuxt',
  build: true, //required to use patches
  // resources: [
    // './.nuxt',
    // './.output'
  // ],
  // temp: './.nexe',
  target: 'linux-x64-14.16.0',
  // target: 'linux-x64-12.22.1',
  // target: 'windows-x64-14.16.0',
  patches: [
    async (compiler, next) => {
      return next()
    }
  ]
}).then(() => {
  console.log('success')
})
