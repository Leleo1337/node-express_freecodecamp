const express = require('express')
const path = require('path')
const app = express()
let { people } = require('./data')

// USE METHOD
app.use(express.static(path.join(__dirname,'./methods-public'))) // static assets
app.use(express.urlencoded({extended: false})) // parse form data
app.use(express.json()) // parse json

// GET METHOD
app.get('/api/people', (req,res) =>{
    res.status(200).json({success: true, data: people})
})

app.get('/api/people/:id', (req,res) => {
    const { id } = req.params
    const person = people.find(person => person.id === Number(id))
    
    if(!person){
        return res.status(400).json({success: false, msg: `no person with id: ${id} found`})
    }

    res.status(200).json({success: true, data: person})
})

// POST METHOD
app.post('/login', (req,res) => {
    const { name } = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }else{
        return res.status(200).send('Please provide a name')
    }
})

app.post('/api/people', (req,res) => {
    const { name } = req.body
    if(!name){
        return res.status(400).json({success: false, msg: 'Please provide a name'})
    }
    const newPerson = {
        id: people.length + 1,
        name
    }
    people.push(newPerson)
    res.status(201).json({success: true, data: people})
})

app.post('/api/postman/people', (req,res) => {
    const { name } = req.body
    if(!name){
        return res.status(400).json({success: false, msg: "please provide a name"})
    }
    res.status(201).json({success:true, data: [...people, {id: people.length + 1, name: name}]})
})

// PUT METHOD
app.put('/api/people/:id', (req,res) => {
    const { id } = req.params
    const { name } = req.body
    const person = people.find(person => person.id === Number(id))

    if(!person){
        return res.status(404).json({success: false, msg: `no person with id: ${id} found`})
    }

    person.name = name

    res.status(201).json({success: true, data: person})
})

// DELETE METHOD
app.delete('/api/people/:id', (req,res) => {
    const { id } = req.params
    const person = people.find(person => person.id === Number(id))

    if(!person){
        return res.status(400).json({success: false, msg: `no person with id: ${id} found`})
    }
    people = people.filter(person => person.id !== Number(id))
    res.status(200).json({success: true, data: people})
})

app.listen(5000, () => console.log('server listening on port 5000'))