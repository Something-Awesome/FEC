const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser")
const db = require("../database/data.js");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.use(cors())

app.use(express.static("public"));

app.get("/faqs", (req, res) => {
  db.Faq.find({},(err,faqs) => {
    if (err) {
      console.log(err)
      res.send(err)
    }
    else res.send(faqs);
  })

})


app.listen(3000, () => console.log("Listening on port 3000!"));