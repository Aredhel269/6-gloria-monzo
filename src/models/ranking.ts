import { Model, DataTypes, UUIDV4 } from "sequelize";
import { sequelize } from "../config/database";
import Player from "./player";

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

  // Definim la relació amb la taula de jugadors (Player)
  public static associate() {
    Ranking.belongsTo(Player, { foreignKey: "playerId", targetKey: "id" });
  }
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
    modelName: "Ranking",
    tableName: "ranking", // Nom de la taula a la base de dades
  }
);
// El model definit és la pròpia classe en si mateixa
console.log(
  "El model definit Ranking és la pròpia classe en si mateixa",
  Ranking === sequelize.models.Ranking
); // true
export default Ranking;
