import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import Game from './game';

// Interfície que defineix els atributs del jugador
interface PlayerAttributes {
  id: number; // Identificador únic del jugador
  name: string; // Nom del jugador
  registrationDate: Date; // Data de registre del jugador
  wins: number; // Nombre de partides guanyades pel jugador
  totalGames: number; // Nombre total de partides jugades pel jugador
  successRate: number; // Taxa d'èxit del jugador
}

// Classe que representa el model de jugador
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

// Inicialització del model Player amb els atributs i opcions
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

// Associació amb el model de les tirades (jocs)
Player.hasMany(Game, { foreignKey: 'playerId' });

export default Player;
