#!/usr/bin/env node

const cols = require('zeelib/lib/colorize')

const text = 'stan loona'

const randomColor = () => {
  const cs = Object.keys(cols)
  return cols[cs[~~(Math.random() * cs.length)]]
}

const main = () => {
  const words = text.split('').map((c) => randomColor()(c)).join('')
  console.log(words)
}

if (module.parent) {
  module.exports = text
} else {
  main()
}
