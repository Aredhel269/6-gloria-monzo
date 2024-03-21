import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import Game from './game';

interface PlayerAttributes {
  id: number;
  name: string;
  registrationDate: Date;
}

class Player extends Model<PlayerAttributes> implements PlayerAttributes {
  public id!: number;
  public name!: string;
  public registrationDate!: Date;
}

Player.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    registrationDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  },
  {
    sequelize,
    modelName: 'Player',
    tableName: 'players' // Nom de la taula a la base de dades
  }
);

// associació amb el model de les tirades
Player.hasMany(Game, { foreignKey: 'playerId' });

export default Player;
