#!/usr/bin/env node

const open = require('open')
const colors = require('zeelib/lib/colorize').default
const prompt = require('zeelib/lib/term-prompt').default

const tourMessage = `
LOONA 1st World Tour: LOONATHEWORLD

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
21st August, LA,           Crypto.com Arena (KCON LA)
23rd August, Atlanta,      Coca-Cola Roxy
25th August, Dallas,       Music Hall at Fair Park
26th August, Houston,      713 Music Hall
28th August, Mexico City,  Pepsi Center
`.trim()

const main = async () => {
  console.log(colors.green(tourMessage))
  console.log('\n')
  const answer = await prompt('Open Flip That on YouTube?')
  if (answer) {
    open('https://www.youtube.com/watch?v=SPYX2y4NzTU')
  }
}

main()
