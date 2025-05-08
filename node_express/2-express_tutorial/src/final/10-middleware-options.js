const express = require('express')
const logger = require('./final/middleware/logger')
const authorize = require('./final/middleware/authorize')
const morgan = require('morgan')

const app = express()
// req => middleware => res

// 1. use vs route
// 2. options - ur own / express / third party

// app.use([logger,authorize])
// app.use(express.static('./public'))
app.use(morgan('tiny'))

app.get('/', (req,res) => {
   res.send('Home')
})

app.get('/about', (req,res) => {
   res.send('About')
})

app.get('/api/products', (req,res) => {
   res.send('API Products')
}) 

app.get('/api/items', (req,res) =>{
   console.log(req.user)
   res.send('API Items')
})

app.listen(5000, () => console.log('server listening on port 5000'))