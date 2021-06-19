const fs = require("fs");
const express = require("express");
const app = express();
const port = 8000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.get("/notes", (req, res) => res.sendFile(`${__dirname}/public/notes.html`));

app.get("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      //now it an object
      return res.json(data);
    }
  });
});

app.listen(port, () => console.log(`App listening on port port!`));

app.post("/api/notes", function (req, res) {
  res.send("POST request to the homepage");
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      obj = JSON.parse(data); //now it an object
      obj.push(req.body); //add some data
      json = JSON.stringify(obj); //convert it back to json
      fs.writeFile("./db/db.json", json, "utf8", (err, data) => {
        if (err) {
          console.log(err);
        }
      }); // write it back
    }
  });
});
