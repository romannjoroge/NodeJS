// The power of sending JSON from the server is that it allows you to use any frontend framework
const express = require('express') 
const app = express()
const {products, people} = require('./data.js')

// app.use(express.static('./public'))

app.get('/', (req, res)=>{
    res.status(200)
    res.send('<h1>Home Page</h1><p>To go to products API <a href="/api/products">click here</a></p>')
})

app.get('/api/products', (req, res)=>{
    res.status(200)
    // How to return all the objects but with specific properties
    const newProducts = products.map((product)=>{
        const {id, name, image} = product
        return {id, name, image}
    })
    res.json(newProducts)
})

/*
app.get('/api/products/1', (req, res)=>{
    // How to get a specific object from the JSON
    const product1 = products.find((product)=> product.id === 1)
    res.json(product1)
})
*/

// It would be inefficient to create routes for all the products with the above method so we use route
// parameters that act as a placeholder for the id number of an item
app.get('/api/products/:productID', (req, res)=>{
    //console.log(req.params)
    // Whatever req.params returns is always a string so type conversion might be necessary
    const {productID} = req.params
    const singleProduct = products.find((product)=>product.id === Number(productID))

    // To deal with the possibility that the product doesn't exist thus singleProduct is null
    if (singleProduct){
        res.status(200)
        return res.json(singleProduct)
    }else{
        res.status(404)
        return res.send('Product does not exist')
    }
})

app.get('/api/v1/query', (req, res)=>{
    // console.log(req.query)  Gives you the query string parameters
    const {search, limit, id} = req.query
    let sortedProducts = [...products] // Gives new instance of products
    if (search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)  // Returns all products that start with the search term
        })
    }
    if (limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    
    if (id){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.id === Number(id)
        })
    }
    // Incase the search results to no products being found
    if (sortedProducts.length < 1){
        return res.status(200).json({success: true, data: []})
    }
    res.status(200)
    res.json(sortedProducts)
})

app.get('*', (req, res)=>{
    res.status(404).send("Couldn't find resource")
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...')
})