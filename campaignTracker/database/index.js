const mongoose = require('mongoose');
var mongoDB = 'mongodb://caseyShamey:cassidy12@ds111025.mlab.com:11025/sandbox';

mongoose.connect(mongoDB, {
  useMongoClient: true
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var backerSchema = mongoose.Schema({
  pledgeAmount: Number
});

var campaignSchema = mongoose.Schema({
  goal: Number,
  projectEnd: String
});

var Backer = mongoose.model('Backer', backerSchema);

Backer.on('error', function(err) {
  if (err) {
    console.error(err);
  }
});

var Campaign = mongoose.model('Campaign', campaignSchema);

Campaign.on('error', function(err) {
  if (err) {
    console.error(err);
  }
});

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
});



module.exports.Backer = Backer;
module.exports.Campaign = Campaign;