const {createReadStream} = require('fs');
const http = require('http');


const stream1 = createReadStream('./test/big.txt', {encoding: 'utf-8'})

stream1.on('data', (result)=>{
    console.log(result)
})
// Listens for a file closing event
stream1.on('close', ()=>{
    console.log('File is closed')
})
stream1.on('error', (err)=>console.log(err))

const server = http.createServer()

server.on('request', (req, res)=>{
    const fileStream = createReadStream('./test/big.txt', 'utf-8')
    fileStream.on('open', ()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error', (err)=>{
        res.end(err)
    })
})

server.listen(5000)
