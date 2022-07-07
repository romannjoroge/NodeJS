const http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url === '/about'){
        for (let i = 0; i < 100; i++){
            for (let j = 0; j < 100; j++){
                console.log(`i is: ${i} j is: ${j} `)
            }
        }
        res.end(`
            <h1>The Slowness Inducing Page</h1>
            <p>You just made someone on the otherside of the world to wait 5 minutes because you
               sent a request to this page!
            </p>
            <p>This website doesn't use asynchronous code so all other users are forced to let this request
               finish before seeing their page
            </p>
            <p>If you want to make them wait again reload the page!</p>
            <p>Otherwise, if you want to visit the homepage
                <a href="/">click here</a>
            </p>
        `)
    }
    if (req.url === '/'){
        res.end(`
            <h1>This Website Doesn't Use Asynchronous Code</h1>
            <p>If the website is lagging horribly you probably have someone on the other side of the
               world sending a request
               <a href="/about">to this url</a>.
            </p>
            <p>If you want to make another person on the other sid of the world wait as long as you visit
               <a href="/about">the slowness url</a> as well!
            </p>
        `)
    }
    res.end(`
        <h1>Oops!</h1>
        <p>This page doesn't exist!
           <a href="/">Go back to the homepage.</a>
           Sorry for the inconvenience!
        </p>
    `)
})

server.listen(5000, ()=>{
    console.log('Server is up!')
})