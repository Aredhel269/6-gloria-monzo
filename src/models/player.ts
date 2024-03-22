import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import Game from './game';

interface PlayerAttributes {
  id: number;
  name: string;
  registrationDate: Date;
  wins: number; // Nombre de partides guanyades
  totalGames: number; // Nombre total de partides jugades
  successRate: number; // Taxa d'èxit del jugador
}

class Player extends Model<PlayerAttributes> implements PlayerAttributes {
  public id!: number;
  public name!: string;
  public registrationDate!: Date;
  public wins!: number;
  public totalGames!: number;
  public successRate!: number;

  // Mètode per calcular el percentatge d'èxit del jugador
  public calculateSuccessRate(): number {
    if (this.totalGames === 0) {
      return 0;
    }
    return (this.wins / this.totalGames) * 100;
  }
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
    },
    wins: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    totalGames: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    successRate: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
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
