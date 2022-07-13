const express = require('express')
const router = express.Router()

router.post('/', (req, res)=>{
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

module.exports = router