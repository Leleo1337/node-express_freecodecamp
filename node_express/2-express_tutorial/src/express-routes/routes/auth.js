const express = require('express')
const { sayWelcome } = require('../controllers/auth')

const router = express.Router()

// POST /login
router.post("/", sayWelcome)

module.exports = router