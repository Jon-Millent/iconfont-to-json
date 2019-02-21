#!/usr/bin/env node

const path = require('path')
const Iconfont = require('./src/Iconfont')
let ConsoleArguments = process.argv.splice(2);


if(ConsoleArguments.length === 0) {

  console.log(
    `
    help: 
    iconfonttojson [input iconfont.css path] [output file name]
    `
  )

  return

}


let config = {
  outputFileName: ConsoleArguments[1] || 'iconfont.js'
}

new Iconfont().render(ConsoleArguments[0], config)

