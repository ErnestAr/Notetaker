const fs = require("fs")

const express = require('express')
const app = express()
const port = 8000
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public/assets'));

app.get('/', (req, res) =>{res.sendFile(`${__dirname}/index.html`)});

app.get('/notes', (req, res) => res.sendFile(`${__dirname}/notes.html`));

app.get('/api/notes',(req, res) => {
    return fs.readFile("../db/db.json", 'utf8', (error, data) =>
    {
        error ? console.error(error) : res.json(data)
    } 
)


})

app.listen(port, () => console.log(`Example app listening on port port!`))


app.post('/api/notes', function (req, res) {
  res.send('POST request to the homepage')
  console.log(req.body); 

})