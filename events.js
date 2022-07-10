const EventEmitter = require('events')  // Gives you events class to allow you to create custom event objects
const http = require('http')

const customEmitter = new EventEmitter()

// Adding a subscriber to the response event
customEmitter.on('response', (name, id)=>{
    console.log(`user: ${name} with id: ${id} received`)
})

// Emmiting response event
customEmitter.emit('response', 'John', 34)

// HTTP using Event emitter API
const server = http.createServer()  // Looks like server is an object of the event class

// Server emmits in the background
server.on('request', (req, res)=>{
    if (req === '/'){
        res.end('Welcome to my site')
    }
})

server.listen(5000)
