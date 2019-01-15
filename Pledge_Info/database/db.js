const mongoose = require('mongoose');
const database = 'mongodb://127.0.0.1/Corrie_Pledge_Info';

mongoose.connect(database, {
  useNewUrlParser: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log('connected!')
});

const pledgeSchema = new mongoose.Schema({
  name: String,
  amount: Number,
  backerLimit: Number,
  currentNumberOfBackers: Number,
  description: String,
  estimatedDelivery: Date,
  shipsTo: String,
  rewards: Array,
  isAvailable: Boolean,
  earlyBirdDate: Date
})

const Pledge = mongoose.model('Pledge', pledgeSchema);

module.exports.db = db;
module.exports.Pledge = Pledge;