const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');
const Habitacion = require('./Habitacion.model');
const Provincia = require('./Provincia.model');

class Hotel extends Model { }

Hotel.init(
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
        direccion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING,
        },
        valoracion: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        },
        imagen:{
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        modelName: "Hotel",
    }
);

Hotel.hasMany(Habitacion, { foreignKey: 'hotel_id' })
Hotel.belongsTo(Provincia, { foreignKey: 'provincia_id' })

module.exports = Hotel;