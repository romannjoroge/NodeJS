const EventEmitter = require('events')
const http = require('http')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id)=>{
    console.log(`user: ${name} with id: ${id} received`)
})

customEmitter.emit('response', 'John', 34)

const server = http.createServer()

server.on('request', (req, res)=>{
    if (req === '/'){
        res.end('Welcome to my site')
    }
})

server.listen(5000)
