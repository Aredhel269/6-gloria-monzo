// player.ts

import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/database";
import Game from "./game";

interface IPlayerAttributes {
  id: number;
  name: string;
  registrationDate: Date;
  wins: number;
  losses: number;
  totalGames: number;
  succesRate: number;
}

class Player extends Model<IPlayerAttributes> implements IPlayerAttributes {
  public id!: number;
  public name!: string;
  public registrationDate!: Date;
  public wins!: number;
  public losses!: number;
  public totalGames!: number;
  public succesRate!: number;

  public calculateWinPercentage(): number {
    if (this.totalGames === 0) {
      return 0;
    }
    return (this.wins / this.totalGames) * 100;
  }

  public static associate() {
    Player.hasMany(Game, { foreignKey: "playerId", sourceKey: "id" });
  }
}

Player.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    registrationDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    wins: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    losses: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    totalGames: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    succesRate: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "Player",
    tableName: "players",
  }
);

export default Player;
