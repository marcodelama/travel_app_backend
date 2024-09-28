const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

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
            allowNull: false,
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

module.exports = Usuario;