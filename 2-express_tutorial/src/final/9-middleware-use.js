const express = require('express')
const logger = require('./middleware/logger')
const authorize = require('./middleware/authorize')

const app = express()
// req => middleware => res

// aplies to all routes
app.use([logger,authorize])

//app.use('/api', authorize)
// api/home/about/products -----> applies to any route that comes within api

app.get('/', logger ,(req,res) => {
   res.send('Home')
})

// app.use(logger)  -> order matter <-

app.get('/about', logger ,(req,res) => {
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