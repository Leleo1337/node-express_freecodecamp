
let { people } = require("../../data");

function getPeople(req, res) {
    res.status(200).json({ success: true, data: people });
}

function getPeopleByID(req, res) {
    const { id } = req.params;
    const person = people.find((person) => person.id === Number(id));
    
    if (!person) {
       return res.status(400).json({ success: false, msg: `no person with id: ${id} found` });
    }
    
    res.status(200).json({ success: true, data: person });
}

function createPerson(req, res){
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: "Please provide a name" });
    }
    const newPerson = {
        id: people.length + 1,
        name,
    };
    people.push(newPerson);
    res.status(201).json({ success: true, person: name });
}

function createPersonPostman(req,res){
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: "please provide a name" });
    }
    res.status(201).json({ success: true, data: [...people, { id: people.length + 1, name: name }] });
}

function updatePerson(req, res){
   const { id } = req.params;
   const { name } = req.body;
   const person = people.find((person) => person.id === Number(id));

   if (!person) {
      return res.status(404).json({ success: false, msg: `no person with id: ${id} found` });
   }

   person.name = name;

   res.status(201).json({ success: true, data: person });
}

function deletePerson(req, res){
   const { id } = req.params;
   const person = people.find((person) => person.id === Number(id));

   if (!person) {
      return res.status(400).json({ success: false, msg: `no person with id: ${id} found` });
   }
   people = people.filter((person) => person.id !== Number(id));
   res.status(200).json({ success: true, data: people });
}


module.exports = { getPeople, getPeopleByID, createPerson, createPersonPostman, updatePerson, deletePerson }