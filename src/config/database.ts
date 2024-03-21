import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false // Desactiva el logging de les consultes SQL per a més claredat
});
