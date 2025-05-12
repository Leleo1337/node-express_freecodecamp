const express = require('express')
const router = express.Router()

// remove a ' . ' from the below paths to run on app.js
const { myMiddleware } = require('../middleware/myMiddleware');
const { getPeople, getPeopleByID, createPerson, createPersonPostman, updatePerson, deletePerson } = require('../controllers/people');

// GET api/people
router.get("/", getPeople);

// GET api/people/:id
router.get("/:id", getPeopleByID);

// POST api/people
router.post("/", myMiddleware, createPerson)
router.post("/postman", createPersonPostman)

// PUT api/people/:id
router.put("/:id", updatePerson)

// DELETE api/people/:id
router.delete("/:id", deletePerson)

module.exports = router