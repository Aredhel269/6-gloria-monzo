import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

interface RankingAttributes {
  id: number;
  playerId: number;
  successRate: number;
}

class Ranking extends Model<RankingAttributes> implements RankingAttributes {
  public id!: number;
  public playerId!: number;
  public successRate!: number;
}

Ranking.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    playerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    successRate: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Ranking',
    tableName: 'ranking'
  }
);

export default Ranking;
