const fs = require('fs')
const http = require('http')
const { url } = require('inspector')

/* Create a server - req is a request
                     res is the server response
*/
const testHtmlCode = fs.readFileSync(
    './test.html',
    'utf-8'
)

const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        res.end(`<h1>Welcome to our home page<h1>
                 <p>
                    <a href='/test'>Go to test page</a>
                 </p>
        `)
    }
    else if (req.url === '/test'){
        res.end(testHtmlCode)
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We cant find the file your looking for</p>
    `
    )    
})

// The port the server listens to 
server.listen(5000)