const express = require('express');
const db = require('../database/db.js');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(cors());

app.listen(port, ()=> console.log('listening on port ' + port));

app.get('/pledges', function(req, res) {
  db.Pledge.find(function(err, pledges) {
    if (err) { console.log('error'); }
    res.send(pledges);
  });
});