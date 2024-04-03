import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

// Definició dels atributs que tindrà el model Ranking
interface RankingAttributes {
  id: number; // Identificador únic de la classificació
  playerId: number; // Identificador del jugador associat a la classificació
  successRate: number; // Percentatge d'èxit del jugador
}

class Ranking extends Model<RankingAttributes> implements RankingAttributes {
  declare id: number; // Identificador únic de la classificació
  declare playerId: number; // Identificador del jugador associat a la classificació
  declare successRate: number; // Percentatge d'èxit del jugador
}

// Inicialització del model Ranking amb els atributs i opcions especificats
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
    modelName: 'Ranking',
    tableName: 'ranking', // Nom de la taula a la base de dades
  }
);

export default Ranking;
