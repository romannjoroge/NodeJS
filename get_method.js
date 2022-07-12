const express = require('express')
const app = express()
let {products, people} = require('./data')

app.use(express.static('./methods-public'))

// For parsing urls and getting data posted from a form
app.use(express.urlencoded({extended: false}))

// parse json and adds this to req.body
app.use(express.json())

app.get('/api/people', (req, res)=>{
    res.status(200)
    res.json({success: true, data: people})
})

app.post('/login', (req, res)=>{
    const {name} = req.body
    if (name){
        res.status(200)
        res.send(`Welcome ${name}`)
    }
    else{
        res.status(401)
        res.send('Please input data in form')
    }
})

app.post('/api/people', (req, res)=>{
    const {name} = req.body
    if (name){
        res.status(201).json({succes:true, person:name})
    }
    res.status(400).json({success:false, msg:'please send form data'})
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...')
})