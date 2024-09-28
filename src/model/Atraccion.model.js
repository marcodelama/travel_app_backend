const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class Atraccion extends Model {}

Atraccion.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        precio:{
            type: DataTypes.FLOAT,
            defaultValue: 0,
        },
        valoracion:{
            type: DataTypes.FLOAT,
            defaultValue: 0,
        },
        direccion:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        horario: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imagen:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: "Atraccion",
    }
);

module.exports = Atraccion;