import { Sequelize } from 'sequelize';

// Connexió a la base de dades amb els valors reals donats al docker-compose
export const sequelize = new Sequelize('dice_game_db', 'db_user', 'db_password', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false // Desactiva el logging de les consultes SQL per a més claredat
});


// db.config.js

module.exports = {
  development: {
    username: 'db_user',
    password: 'db_password',
    database: 'dice_game_db',
    host: 'localhost',
    dialect: 'mysql'
  },
  // Afegeix altres configuracions si és necessari (per exemple, per a entorns de producció, proves, etc.)
};
