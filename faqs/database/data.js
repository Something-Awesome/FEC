const mongoose = require("mongoose");
const dbURL = 'mongodb://localhost:27017/kickfaqs';

mongoose.connect(dbURL, {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to database...');
})

const faqSchema = new mongoose.Schema({
    id: Number,
    question: String,
    answer: String
});

const Faq = mongoose.model('Faq', faqSchema);

module.exports.Faq = Faq;
module.exports.db = db;

