const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class TipoHabitacion extends Model { }

TipoHabitacion.init(
    {
        id: {
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
        capacidad: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        precio: {
            type: DataTypes.DOUBLE,
            allowNull: true,
        },
        imagen:{
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        sequelize,
        modelName: "TipoHabitacion",
    }
);

module.exports = TipoHabitacion;