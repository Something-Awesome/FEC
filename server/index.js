const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const seedData = require('../database/seedData.js');




// server setup
const app = express();
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
  //seedData.fakeBackers(10);
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
