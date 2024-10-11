const app = require('./app/app');
const sequelize = require('./config/db');
require('dotenv').config();

const PORT = process.env.PORT || 4000;

sequelize.sync({ force: true })
  .then(() => {
    console.log('Todas las tablas han sido eliminadas y recreadas.');
  })
  .catch(err => {
    console.error('Hubo un error al sincronizar las tablas:', err);
  });

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
})