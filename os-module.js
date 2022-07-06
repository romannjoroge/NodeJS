/*
    Javasript has some built in modules such as:
        OS - interacting with the OS and server
        Path
        FS
        HTTP
*/
// Setup of OS module
const os  = require('os')

// Info about the user
const user = os.userInfo()
console.log(user)

// String interpolation
console.log(`The computer has been up for ${os.uptime()}`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)
