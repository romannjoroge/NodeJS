const {readFile, writeFile} = require('fs').promises;
const util = require('util');

/*
// Created a function that returns a promise
const getText = (path)=>{
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf-8', (err, data)=>{
            if (err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}

//getText('./test/first.txt')
//  .then((result)=> console.log(result))
//  .catch((err) => console.log(err))

// Async awaits uses promises
const start = async()=>{
    try{
        const first = await getText('./test/first.txt')
        const second = await getText('./test/second.txt')
        console.log(first, second)
    }catch(err){
        console.log(err)
    }
}
*/

/*
// Instead of writing our own unique function to return a promise from readFile you can use the
// util module to write that function for you
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

// This function now uses the functions created by the util module
const startImproved = async()=>{
    try{
        console.log('\nThis is start improved!\n')
        const first = await readFilePromise('./test/first.txt', 'utf-8')
        const second = await readFilePromise('./test/second.txt', 'utf-8')
        await writeFilePromise('./test/mind-grenade.txt',
        `The util module is awesome cause it let me combine first.txt and second.txt without going through callback hell!!
        This is the result:
        ${first} : ${second}`)
        const third = await readFilePromise('./test/mind-grenade.txt', 'utf-8')
        console.log(third)
    }catch(err){
        console.log(err)
    }
}
*/

// Instead of using util module to create for us a version of the function that uses promises
// we can import the functions with the .promises method so that the functions return promises by default
const startUltimate = async()=>{
    try{
        console.log('This is the ultimate version of the start function')
        const first = await readFile('./test/first.txt', 'utf-8')
        const second = await readFile('./test/second.txt', 'utf-8')
        await writeFile(
            './test/mind-grenade.txt',
            `\nTHIS IS THE ULTIMATE FORM OF THE START FUNCTION SPEAKING
            YOU NO LONGER NEED TO EVEN PROMISIFY FUNCTIONS WITH THE UTILS MODULE THANKS TO IMPORTING WITH PROMISES MODULE
            BASK IN MY GLORY!!!!!!!!
            ${first} : ${second}`,
            {flag : 'a'}
        )
        const third = await readFile('./test/mind-grenade.txt', 'utf-8')
        console.log(third)
    }catch(err){
        console.log(err)
    }
}

startUltimate()