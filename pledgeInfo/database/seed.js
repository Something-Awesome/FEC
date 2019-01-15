const db = require("./db.js");
const data = require('./generatedData.js');

const seedDatabaseFromGeneratedData = function(data){
  db.Pledge.remove((err)=>{
    db.Pledge.create(data)
  })

}

seedDatabaseFromGeneratedData(data.generatedData);