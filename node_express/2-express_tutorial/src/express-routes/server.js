const express = require("express");
const path = require("path");

const people = require('../express-routes/routes/people')
const auth = require('../express-routes/routes/auth');

const app = express();

app.use(express.static(path.join(__dirname, "../methods-public"))); // static assets
app.use(express.urlencoded({ extended: false })); // parse form data
app.use(express.json()); // parse json

//routes
app.use('/api/people', people)
app.use('/login', auth)


app.listen(5000, () => console.log("server listening on port 5000"));
