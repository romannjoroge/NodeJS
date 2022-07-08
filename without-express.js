const http = require('http');
const {readFileSync} = require('fs');

// Get files before creating the server so that they are only run once
const homepage = readFileSync('./test-website/index.html', 'utf-8')
const homestyles = readFileSync('./test-website/styles.css', 'utf-8')

const server = http.createServer((req, res)=>{
    //console.log('A user has hit the server')
    //res.writ)eHead(200, {'content-type': 'text/html'})  // Put information in the response headers (used by the browser)
    //res.write('<h1>Homepage</h1>')
    //res.end()
    const url = req.url
    if (url === '/'){
        res.writeHead(200, {'content-type': 'text.html'})
        res.write(homepage)
        res.end()
    }
    else if (url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>About Us</h1><p>This is a learning website for NodeJS</p>')
        res.end()
    }
    else if (url === '/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homestyles)
        res.end()
    }
    else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.write("<h1>Oops</h1><p>The page your looking for couldn't be found")
        res.end()
    }
})

server.listen(5000, ()=>{
    console.log('Server is up and listening on port 5000!')
})