#!/usr/bin/env node

const colors = require('zeelib/lib/colorize').default

const contentArchiveLink = 'https://docs.google.com/spreadsheets/d/1XbLfgf4grfsZ_CUSt9nXgHVFoMrgu16wgVPYNs1hAX4/edit#gid=1204245601'
const photoArchiveLink = 'https://drive.google.com/drive/folders/1k0dVWFyxa6VUdwno97vsJZK3MttvxwQj'
const teamSubbitsLink = 'https://www.teamsubbits.com'
const fandomLink = 'https://loonatheworld.fandom.com/'
const imageDumpLink = 'https://docs.google.com/spreadsheets/d/128qKdqfKLLSWN8YBQTDRsTNPK1WEugN5cAz1hyRVTj8/edit#gid=1979688804'

const main = async () => {
  console.log(colors.cyan('Content Archive:'))
  console.log(colors.cyan(contentArchiveLink))
  console.log()
  console.log(colors.magenta('Photo Archive:'))
  console.log(colors.magenta(photoArchiveLink))
  console.log()
  console.log(colors.blue('Image Dump Masterlist:'))
  console.log(colors.blue(imageDumpLink))
  console.log()
  console.log(colors.red('Team Subbits:'))
  console.log(colors.red(teamSubbitsLink))
  console.log()
  console.log(colors.yellow('Fandom Wiki:'))
  console.log(colors.yellow(fandomLink))
}

main()
