// game.ts

import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';
import Player from './player';

class Game extends Model {
  public id!: number;
  public playerId!: number;
  public dice1!: number;
  public dice2!: number;
  public isWin!: boolean;

  // Mètode per establir les relacions amb altres models
  public static associate() {
    Game.belongsTo(Player, { foreignKey: 'playerId' });
  }
}

Game.init(
  // atributs de la taula de la base de dades games.
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    playerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dice1: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dice2: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isWin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: 'games', // Nom de la taula a la base de dades
    sequelize, // Connexió a la base de dades
  }
);

export default Game;
