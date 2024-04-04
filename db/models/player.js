'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Player.init({
    name: DataTypes.STRING,
    registrationDate: DataTypes.DATE,
    wins: DataTypes.NUMBER,
    totalGames: DataTypes.NUMBER,
    successRate: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Player',
  });
  return Player;
};