const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');
const Usuario = require('./Usuario.model');


class Cliente extends Model { }

Cliente.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        num_dni: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        nombre: {
            type: DataTypes.STRING,
        },
        apellido: {
            type: DataTypes.STRING,
        },
        telefono: {
            type: DataTypes.STRING,
        },
        correo: {
            type: DataTypes.STRING,
        },
        estado_registro: {
            type: DataTypes.STRING,
            defaultValue: 'A',
        }
    },
    {
        sequelize,
        modelName: "Cliente",
    }
);

Cliente.hasMany(Usuario, { foreignKey: 'cliente_id' });

module.exports = Cliente;