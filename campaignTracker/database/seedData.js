const db = require('./index.js');
const faker = require('faker');

faker.locale = 'en_US';


var fakeBackers = (num) => {
  // if (db.Backer) {
  //   //db.Backer.collection.drop();
  // } else {
  for (var i = 0; i < num; i += 1) {
    db.Backer.create({
      pledgeAmount: Math.floor(faker.finance.amount(1, 100, 2))
    });
  }
};
console.log('Database Seeded');
//};

fakeBackers(100);

module.exports.fakeBackers = fakeBackers;