import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import Player from "./player";

class Game extends Model {
  public id!: number;
  public playerId!: number;
  public dice1!: number;
  public dice2!: number;
  public isWin!: boolean;

  public static associate() {
    Game.belongsTo(Player, { foreignKey: "playerId", targetKey: "id" });
  }
}

Game.init(
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
    sequelize,
    modelName: "Game",
    tableName: "games",
  }
);

export default Game;






