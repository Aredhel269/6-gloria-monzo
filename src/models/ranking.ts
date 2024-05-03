import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/database";
import Player from "./player";

interface IRankingAttributes {
  id: number;
  playerId: number;
  successRate: number;
}

class Ranking extends Model<IRankingAttributes> implements IRankingAttributes {
  public id!: number;
  public playerId!: number;
  public successRate!: number;

  public static associate() {
    Ranking.belongsTo(Player, { foreignKey: "playerId", targetKey: "id" });
  }
}

Ranking.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    playerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    successRate: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Ranking",
    tableName: "ranking",
  }
);

export default Ranking;
