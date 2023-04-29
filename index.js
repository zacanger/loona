#!/usr/bin/env node

const { inspect } = require('util')

const cols = (color, text) => {
  const codes = inspect.colors[color]
  return `\x1b[${codes[0]}m${text}\x1b[${codes[1]}m`
}

const colorize = () => {
  const val = {}
  Object.keys(inspect.colors).forEach((color) => {
    val[color] = (text) => cols(color, text)
  })
  return val
}

const colors = colorize()

const contentArchiveLink = 'https://docs.google.com/spreadsheets/d/1XbLfgf4grfsZ_CUSt9nXgHVFoMrgu16wgVPYNs1hAX4/edit#gid=1204245601'
const photoArchiveLink = 'https://drive.google.com/drive/folders/1k0dVWFyxa6VUdwno97vsJZK3MttvxwQj'
const teamSubbitsLink = 'https://www.teamsubbits.com'
const fandomLink = 'https://loonatheworld.fandom.com/'
const imageDumpLink = 'https://docs.google.com/spreadsheets/d/128qKdqfKLLSWN8YBQTDRsTNPK1WEugN5cAz1hyRVTj8/edit#gid=1979688804'
const boycottMediaLink = 'https://drive.google.com/drive/folders/15nOtXlSIKYD_anDn7PtDimHiyByzrjFa'

const l = console.log
const main = async () => {
  l(colors.green('Boycott-Safe Media Archive:'))
  l(colors.green(boycottMediaLink))
  l()
  l(colors.cyan('Content Archive:'))
  l(colors.cyan(contentArchiveLink))
  l()
  l(colors.magenta('Photo Archive:'))
  l(colors.magenta(photoArchiveLink))
  l()
  l(colors.blue('Image Dump Masterlist:'))
  l(colors.blue(imageDumpLink))
  l()
  l(colors.red('Team Subbits:'))
  l(colors.red(teamSubbitsLink))
  l()
  l(colors.yellow('Fandom Wiki:'))
  l(colors.yellow(fandomLink))
}

main()
