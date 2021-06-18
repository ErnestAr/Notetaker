const fs = require("fs")
const storage = require("../db/db.json")
// const script = require("../public/assets/js/index.js")
const express = require('express')
const { v4: uuidv4 } = require('uuid');
const app = express()
const port = 8000
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', function(req, res) {
    res.sendFile("public\notes.html")
});

  app.get('/notes', (req, res) => res.sendFile());

app.listen(port, () => console.log(`Example app listening on port port!`))


