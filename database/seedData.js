const db = require('./index.js');
const faker = require('faker');

faker.locale = 'en_US';

var fakeBackers = (num) => {
  for (var i = 0; i < num; i += 1) {
    db.Backer.create({
      pledgeAmount: faker.finance.amount()
    });
  }
};

//fakeBackers(10);

module.exports.fakeBackers = fakeBackers;