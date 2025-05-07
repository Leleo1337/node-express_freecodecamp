const express = require('express')
const path = require('path')

const app = express()
const PORT = 5000

// setup static and middleware
app.use(express.static(path.join(__dirname,'./public')))

app.get('/', (req,res) => {
    res.render(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('/{*any}', (req,res) =>{
    res.status(404).send('<h1>Route not found, <a href="/">Go back to home</a></h1>')
})

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`))