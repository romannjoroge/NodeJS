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

app.post('/api/postman/people', (req, res)=>{
    const {name} = req.body
    if (name){
        return res.status(201).json({success: true, data: [...people, name]})
    }
    res.status(400).json({success: false, msg: 'please send data'})
})

app.put('/api/people/:id', (req, res)=>{
    const {name} = req.body
    const {id} = req.params
    
    const person = people.find((person)=>person.id === Number(id))

    if (!person){
        res.status(404)
        return res.json({success: false, msg:`Person with id ${id} doesn't exist`})
    }
    const newPerson = people.map((person)=>{
        if (person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(201).json({success: true, data: newPerson})
})

app.delete('/api/people/:id', (req, res)=>{
    const {id} = req.params
    person = people.find((person)=>person.id === Number(id))

    if (!person){
        res.status(404)
        return res.json({succes:false, msg:`Person with id ${id} doesn't exist`})
    }
    const newPeople = people.filter((person)=>person.id !== Number(id))
    res.status(200).json({success:true, data:newPeople})
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...')
})