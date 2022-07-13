let {people} = require('../data')

const getPeople = (req, res)=>{
    res.status(200)
    res.json({success: true, data: people})
}

const postPeople = (req, res)=>{
    const {name} = req.body
    if (name){
        res.status(201).json({succes:true, person:name})
    }
    res.status(400).json({success:false, msg:'please send form data'})
}

const postPeople_Postman = (req, res)=>{
    const {name} = req.body
    if (name){
        return res.status(201).json({success: true, data: [...people, name]})
    }
    res.status(400).json({success: false, msg: 'please send data'})
}

const putPeople_id = (req, res)=>{
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
}

const deletePeople_id = (req, res)=>{
    const {id} = req.params
    person = people.find((person)=>person.id === Number(id))

    if (!person){
        res.status(404)
        return res.json({succes:false, msg:`Person with id ${id} doesn't exist`})
    }
    const newPeople = people.filter((person)=>person.id !== Number(id))
    res.status(200).json({success:true, data:newPeople})
}

module.exports = {
    deletePeople_id,
    putPeople_id,
    postPeople,
    postPeople_Postman,
    getPeople
}