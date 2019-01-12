const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/KickstarterClone', {
  useNewUrlParser: true
});

var db = mongoose.connection;

var backerSchema = mongoose.Schema({
  pledgeAmount: Number
});

var Backer = mongoose.model('Backer', backerSchema);

Backer.on('error', function(err) {
  if (err) {
    console.error(err);
  }
});

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
});



module.exports.Backer = Backer;