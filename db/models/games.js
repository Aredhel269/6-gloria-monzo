'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Games extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Games.init({
    playerId: DataTypes.INTEGER,
    dice1: DataTypes.INTEGER,
    dice2: DataTypes.INTEGER,
    isWin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Games',
  });
  return Games;
};