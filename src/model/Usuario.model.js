const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');
const Reserva = require('./Reserva.model');

class Usuario extends Model {}

Usuario.init(
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
        },
        estado_registro: {
            type: DataTypes.STRING,
            defaultValue: 'A',
        }
    },
    {
        sequelize,
        modelName: "Usuario",
    }
);

Usuario.hasMany(Reserva, { foreignKey: 'usuario_id' });

module.exports = Usuario;