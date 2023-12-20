'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Scores extends Model {}
  Scores.init({
    email: { allowNull: false, primaryKey: true, type: DataTypes.STRING },
    logos_score: DataTypes.INTEGER,
    gibberish_score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Scores',
    tableName: 'scores'
  });
  return Scores;
};