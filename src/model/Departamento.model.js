const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');
const Provincia = require('./Provincia.model')

class Departamento extends Model {}

Departamento.init(
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
        }
    },
    {
        sequelize,
        modelName: "Departamento",
    }
);

Departamento.hasMany(Provincia, { foreignKey: 'departamento_id' });

module.exports = Departamento;