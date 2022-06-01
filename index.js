#!/usr/bin/env node

const open = require('zeelib/lib/open').default
const prompt = require('zeelib/lib/term-prompt').default
const isInstalled = require('is-program-installed')
const spotifyLink = 'https://open.spotify.com/playlist/37i9dQZF1DWSluHnSzEAUI'
const youtubeLink = 'https://www.youtube.com/watch?v=aXaHB4gGAys'
const mnetLink = 'https://www.mnet.world/community/main?communityId=DtAok2aQcE21eCPykh19t'

const tourMessage = `LOONA 1ST WORLD TOUR

USA DATES:
2nd August,  LA,           The Wiltern
4th August,  SF,           The Midway
6th August,  Denver,       Fillmore Auditorium
8th August,  KC,           Uptown Theater
11th August, Chicago,      Radius Chicago
13th August, Louisville,   Old Forester's Paristown Hall
15th August, Reading (PA), Santander Arena
17th August, DC,           MGM National Harbor
19th August, NYC,          Palladium Times Sqaure

Tickets available starting June 4th!
`

const main = async () => {
  console.log(tourMessage)
  const first = await prompt('Vote for LOONA on MNET?')
  if (first) {
    open(mnetLink)
  }

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
