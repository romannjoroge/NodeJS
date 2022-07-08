const express = require('express');
const app = express()

// When user uses get to reach the homepage
app.get('/', (req, res)=>{
    res.status(200)
    res.send('Home Page')
})

app.get('/about', (req, res)=>{
    // console.log(req)
    res.status(200)
    res.send('About Page')
})

// Matches all the paths and all the methods
// Put this at the end to match paths that aren't in your website
app.all('*', (req, res)=>{
    res.status(404)
    res.send('<h1>Could not find the page</h1>')
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000')
})

