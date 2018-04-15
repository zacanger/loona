#!/usr/bin/env node

const exit = require('zeelib/lib/exit').default
if (module.parent) {
  console.log('Please execute this module.')
  exit(1)
}

const open = require('zeelib/lib/open').default
const getArgs = require('zeelib/lib/get-args').default
const args = getArgs()
const playlistUrl = 'https://www.youtube.com/watch?v=a6JmCdDs_GM&list=PLtcTpq9htoKzrWNw3PR7hN9IQ0JuxrjQU'

const usage = () => {
  console.log(`
        stan talent!
        stan loona!

        usage:

        loona -p [--playlist]
        # open youtube playlist of all official
        # MVs with less than 1M views
  `)
}

if (args.some((a) => a === '-p' || a === '--playlist')) {
  open(playlistUrl)
} else {
  usage()
}
