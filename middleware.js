const express = require('express')
const app = express()

// IT IS BEST TO INCLUDE THE IMPLEMENTATION IN A DIFFERENT FILE AND IMPORT THE FUNCTION TO APP.JS
// Middleware function that will be executed when a request is received
const logger = (req, res, next) => {
    console.log(req.method, req.url, new Date().getFullYear())
    // At the end of the middleware you have to either stop response by sending res.send() or
    // you pass to the next middleware
    // res.send('Today is awesome!')
    next()
}

// To apply the middleware to all routes
// To apply only to a specific route you add the middleware name to the function for that rout e.g 
//      app.get('/example-route', <middle-ware-name>, (callback function))
// To apply a middleware to all routes underneath a parent route e.g to /app/home and /app/about you can use
//      app.use('/parent-route', <middle-ware-name>)
app.use(logger)

app.get('/', (req, res)=>{
    res.send('Home')
})

/*
app.get('/:page_name', logger, (req, res)=>{
    const {page_name} = req.params
    res.send(page_name)
})
*/

app.get('/about', (req, res)=>{
    res.send('About')
})

app.get('/api/products', (req, res)=>{
    res.send('Products')
})

app.get('/api/items', (req, res)=>{
    res.send('Items')
})

app.get('*', (req, res)=>{
    res.status(404)
    res.send()
})

app.listen(5000, ()=>{
    console.log('Server is listening in port 5000')
})