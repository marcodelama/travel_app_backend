const { Sequelize } = require('sequelize');
require('dotenv').config();

// Configura la conexión usando las variables de entorno
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,   // Será "mssql"
    dialectOptions: {
        encrypt: true,                 // Azure SQL requiere que las conexiones estén encriptadas
    }
});

// Probar la conexión a la base de datos
sequelize.authenticate()
  .then(() => console.log(`Conectado a la base de datos ${process.env.DB_DATABASE}`))
  .catch(err => console.log(`Hubo un error en la conexión: ${err}`));

module.exports = sequelize;