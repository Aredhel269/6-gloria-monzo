import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import {} from "sequelize";
import Player from "./player";

class Game extends Model {
  declare id: number; // Identificador únic de la tirada de dau
  declare playerId: number; // Identificador del jugador associat a la tirada
  declare dice1: number; // Valor del primer dau
  declare dice2: number; // Valor del segon dau
  declare isWin: boolean; // Indica si la tirada és guanyadora o no

  // Mètode per establir les relacions amb altres models
  public static associate() {
    Game.belongsTo(Player, { foreignKey: "playerId", targetKey: "id" });
  }
}

// Inicialització del model Game amb els atributs i opcions especificats
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
    sequelize, // Connexió a la base de dades
    modelName: "Game",
    tableName: "games", // Nom de la taula a la base de dades
  }
);
// El model definit és la pròpia classe en si mateixa
console.log(
  "El model definit Game és la pròpia classe en si mateixa",
  Game === sequelize.models.Game
); // true
export default Game;
