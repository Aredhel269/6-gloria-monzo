import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Carreguem les variables d'entorn des del fitxer .env
dotenv.config();

// Obtenim el valor de DB_PASSWORD o utilitzem una cadena buida com a valor per defecte
const dbPassword = process.env.DB_PASSWORD || "";

// Funció de registre personalitzada
const customLogger = (msg: unknown) => {
  console.log("Sequelize log:", msg);
};

// Connectem a la base de dades amb els valors reals donats al docker-compose
export const sequelize = new Sequelize(
  process.env.DB_NAME || "sprint6",
  process.env.DB_USERNAME || "root",
  dbPassword,
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    logging: customLogger, // Utilitzem la funció de registre personalitzada
  }
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection to database has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testConnection();
