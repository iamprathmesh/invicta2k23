"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const db = {};

const sequelize = new Sequelize('invicta_trivia', 'admin', 'AReallyStrongPassword#4#4', {
  host: 'invicta-trivia-db.cjltllr6gufx.ap-south-1.rds.amazonaws.com',
  dialect: 'mysql'
})
// const sequelize = new Sequelize('invicta_trivia', 'root', 'hg64PM@gs9m5xI3RMBU', {
//   host: 'localhost',
//   dialect: 'mysql'
// })

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
