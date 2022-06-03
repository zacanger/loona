#!/usr/bin/env node

const tourMessage = `
LOONA 1ST WORLD TOUR

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
`.trim()

const main = async () => {
  console.log(tourMessage)
}

main()
