import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'

// Carreguem les variables d'entorn des del fitxer .env
dotenv.config();

// Obtenim el valor de DB_PASSWORD o utilitzem una cadena buida com a valor per defecte 
const dbPassword = process.env.DB_PASSWORD || '';

// Connectem a la base de dades amb els valors reals donats al docker-compose

export const sequelize = new Sequelize('dice_game_db', 'db_user', dbPassword, {
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql',
  logging: false
});
