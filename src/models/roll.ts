import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import Player from './player';

interface RollAttributes {
  id: number;
  playerId: number;
  dice1: number;
  dice2: number;
  isWin: boolean;
}

class Roll extends Model<RollAttributes> implements RollAttributes {
  public id!: number;
  public playerId!: number;
  public dice1!: number;
  public dice2!: number;
  public isWin!: boolean;
}

Roll.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    playerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dice1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dice2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isWin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    sequelize,
    modelName: 'Roll',
    tableName: 'rolls' // Nom de la taula a la base de dades
  }
);

// associació amb el model dels jugadors
Roll.belongsTo(Player, { foreignKey: 'playerId' });

export default Roll;
