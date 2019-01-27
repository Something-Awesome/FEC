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

var fakeCampaign = () => {
  db.Campaign.create({
    goal: 50000,
    projectEnd: '20190423',
    facebookPage: 'https://facebook.com',
    twitterPage: 'https://twitter.com',
    emailAddress: 'nowhere@gmail.com'
  });
};

fakeBackers(100);
fakeCampaign();

module.exports.fakeBackers = fakeBackers;
module.exports.fakeCampaign = fakeCampaign;
