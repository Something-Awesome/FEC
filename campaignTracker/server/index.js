const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
var request = require('request');
const api = require('../client/src/config/rebrandly.js');
const cors = require('cors');




// server setup
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.listen(process.env.PORT || 1234, () => {
  console.log('Your server is running');
});

// get backer amounts from database
app.get('/pledgeTracker', (req, res) => {
  db.Backer.find({}).exec((err, backers) => {
    if (err) {
      res.status(404).send('404 Error!');
    } else {
      var totalBackers = backers.length;
      var backerAmounts = backers.map(backer => {
        return backer.pledgeAmount;
      });
      var totalPledged = backerAmounts.reduce((ac, cv) => {
        return ac + cv;
      }, 0);
      console.log(totalPledged);
      var pledgeTrackerInfo = {};
      pledgeTrackerInfo.totalBackers = totalBackers;
      pledgeTrackerInfo.totalPledged = totalPledged;

      res.send(pledgeTrackerInfo);
    }
  });
});

app.get('/campaign', (req, res) => {
  db.Campaign.find({}).exec((err, campaign) => {
    if (err) {
      res.status(404).send('404 Error!');
    } else {
      res.send(campaign[0]);
    }
  });
});

app.get('/shortenUrl', (req, res) => {
  console.log('api', api);
  request({
    uri: 'https://api.rebrandly.com/v1/links',
    method: 'POST',
    body: JSON.stringify({
      destination: 'https://localhost:1234',
      domain: { fullName: 'rebrand.ly' }
      //, slashtag: "A_NEW_SLASHTAG"
      //, title: "Rebrandly YouTube channel"
    }),
    headers: {
      'Content-Type': 'application/json',
      'apikey': api.REBRANDLY_API_KEY
      //'workspace': 'YOUR_WORKSPACE_ID'
    }
  }, function(err, response, body) {
    var link = JSON.parse(body);
    console.log('Long URL was ' + link.destination + ', short URL is ' + link.shortUrl);
    res.send(link);
  });
});