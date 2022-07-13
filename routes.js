const express = require('express')
const app = express()

// When importing routes don't call it router
const people = require('./router/people')
const login = require('./router/auth')

// Telling express where static assets are located
app.use(express.static('./methods-public'))

// Parsing url for form data
app.use(express.urlencoded({extended: false}))

// Parsing JSON data
app.use(express.json())

// Telling it to use te people router when on /api/people routes
app.use('/api/people', people)
app.use('/login', login)

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...')
})