const express = require('express');
const path = require('path');  // We need an absolute path when telling express to send a file
const app = express()

// Eliminates the need for creating a app.get method for all of your static assets - images ,CSS and JS files
// set up static and middleware

// Basically sets up routes for static assets for you
// If index.html is static you could place it in public folder and get rid of the app.get('/') code
// This only works for index.html other pages still have their own routes
app.use(express.static('./public'))

/*
app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'./test-website/index.html'))
})
*/

// A route needs to be added for all other files
app.get('/about', (req, res)=>{
    res.status(200)
    res.sendFile(path.resolve(__dirname,'./test-website/about.html'))
})

app.get('/api/v1/query', (req, res)=>{
    console.log(req.query)
    res.send('Hello World!')
})

app.all('*', (req, res)=>{
    res.status(404)
    res.send("<h1>Couldn't find resource</h1>")
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...')
})