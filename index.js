#!/usr/bin/env node

const open = require('zeelib/lib/open').default
const prompt = require('zeelib/lib/term-prompt').default
const isInstalled = require('is-program-installed')
const spotifyLink = 'https://open.spotify.com/playlist/37i9dQZF1DWSluHnSzEAUI'
const youtubeLink = 'https://www.youtube.com/watch?v=aXaHB4gGAys'

const main = async () => {
  const answer = await prompt('Stream Pose on Spotify?')
  if (answer) {
    if (isInstalled('spotify')) {
      open(spotifyLink)
    } else {
      console.log('Spotify not installed!')
      const maybe = await prompt('Open anyway?')
      if (maybe) {
        open(spotifyLink)
      }
    }
  }

  const hmm = await prompt('Stream Butterfly on YouTube?')
  if (hmm) {
    open(youtubeLink)
  }
}

main()
