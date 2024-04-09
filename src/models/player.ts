import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/database";
import Game from "./game";
//import { v4 as UUIDV4 } from "uuid"; // Importa la funció v4 com a UUIDV4
// Interfície que defineix els atributs del jugador
interface IPlayerAttributes {
  id: number; // Identificador únic del jugador
  name: string; // Nom del jugador
  registrationDate: Date; // Data de registre del jugador
  wins: number; // Nombre de partides guanyades pel jugador
  totalGames: number; // Nombre total de partides jugades pel jugador
  successRate: number; // Taxa d'èxit del jugador
}

// Classe que representa el model de jugador
class Player extends Model<IPlayerAttributes> implements IPlayerAttributes {
  declare id: number;
  declare name: string;
  declare registrationDate: Date;
  declare wins: number;
  declare totalGames: number;
  declare successRate: number;

  // Mètode per calcular el percentatge d'èxit del jugador
  public calculateSuccessRate(): number {
    if (this.totalGames === 0) {
      return 0;
    }
    return (this.wins / this.totalGames) * 100;
  }
  // Associació amb el model de les tirades (jocs)
  public static associate() {
    Player.hasMany(Game, { foreignKey: "playerId", sourceKey: "id" });
  }
}

// Inicialització del model Player amb els atributs i opcions
Player.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    registrationDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    wins: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    totalGames: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    successRate: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "Player",
    tableName: "players", // Nom de la taula a la base de dades
  }
);

// El model definit és la pròpia classe en si mateixa
console.log(
  "El model definit Player és la pròpia classe en si mateixa",
  Player === sequelize.models.Player
); // true

export default Player;

// Importa la llibreria dotenv
import dotenv from "dotenv";

// Carrega les variables d'entorn des del fitxer .env
dotenv.config();

// Imprimeix una variable d'entorn per comprovar si s'ha llegit correctament
console.log("Valor de DB_PASSWORD:", process.env.DB_PASSWORD);
