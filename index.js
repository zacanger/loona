#!/usr/bin/env node

const open = require('open')
const colors = require('zeelib/lib/colorize').default
const prompt = require('zeelib/lib/term-prompt').default

const tourMessage = `
LOONA 1st World Tour: LOONATHEWORLD

North America:
15th August,    Reading (PA), Santander Arena
17th August,    DC,           MGM National Harbor
19th August,    NYC,          Palladium Times Sqaure
21st August,    LA,           Crypto.com Arena (KCON LA)
23rd August,    Atlanta,      Coca-Cola Roxy
25th August,    Dallas,       Music Hall at Fair Park
26th August,    Houston,      713 Music Hall
28th August,    Mexico City,  Pepsi Center

Europe:
6th September,  Warsaw,       Arena COS Torwar
8th September,  Amsterdam,    AFAS Live
11th September, Frankfurt,    Jahrhunderthalle
13th September, Paris,        Le Zenith
16th September, London,       O2 Academy Brixton

Japan:
1st October,    Tokyo,        Tokyo Garden Theater
`.trim()

const contentArchiveLink = 'https://docs.google.com/spreadsheets/d/1XbLfgf4grfsZ_CUSt9nXgHVFoMrgu16wgVPYNs1hAX4/edit#gid=1204245601'
const photoArchiveLink = 'https://drive.google.com/drive/folders/1k0dVWFyxa6VUdwno97vsJZK3MttvxwQj'
const teamSubbitsLink = 'https://www.teamsubbits.com'
const fandomLink = 'https://loonatheworld.fandom.com/'

const main = async () => {
  console.log(colors.green(tourMessage))
  console.log()
  console.log(colors.cyan('Content Archive:'))
  console.log(colors.cyan(contentArchiveLink))
  console.log()
  console.log(colors.magenta('Photo Archive:'))
  console.log(colors.magenta(photoArchiveLink))
  console.log()
  console.log(colors.red('Team Subbits:'))
  console.log(colors.red(teamSubbitsLink))
  console.log()
  console.log(colors.yellow('Fandom Wiki:'))
  console.log(colors.yellow(fandomLink))
  console.log()
  const answer = await prompt('Open Flip That on YouTube?')
  if (answer) {
    open('https://www.youtube.com/watch?v=SPYX2y4NzTU')
  }
}

main()
