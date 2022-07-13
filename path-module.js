
/*
    The Path module allows us to interact with the file path
*/
const path = require('path')

// System specific seperator
const sep = path.sep
console.log(sep)

// Getting a file path
const testFilePath = path.join('/test/', 'test-sub')
console.log(testFilePath)

// Getting base file name

const base = path.basename(testFilePath)
console.log(base)

// Getting absolute path
const absolute = path.resolve(__dirname, 'test', 'test-sub', 'test.txt')
console.log(absolute)

const people_route = path.resolve(__dirname, './router', 'people.js')
console.log(people_route)
