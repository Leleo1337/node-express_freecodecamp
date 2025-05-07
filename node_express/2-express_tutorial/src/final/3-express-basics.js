const express = require('express')
const app = express()

app.get('/', (req,res) => {
    console.log('user hit the page')
    res.status(200).send('Home page')
})

app.get('/about', (req,res) =>{
    res.status(200).send('About page')
})

app.get('/api', (req,res) =>{
    res.status(200).send(`Api page`)
})

app.all('/{*any}', (req,res) => {  // express 5.0 dont alow '*', use '/{*any}' instead
    res.status(404).send('<h1>Resource not found, go back to our <a href="/">Home page</a></h1>')
})

app.listen(5000, () => console.log('server running on port 5000'))

// app.get - Read data 
// app.post - Insert data
// app.put - Update data
// app.delete - Delete data
// -----------
// app.all
// app.use
// app.listen