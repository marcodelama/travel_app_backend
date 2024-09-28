const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');
const TipoHabitacion = require('./TipoHabitacion.model')

class Habitacion extends Model { }

Habitacion.init(
    {
        num_habitacion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        estado: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 1
        },
        fecha_inicio: {
            type: DataTypes.DATE,
            defaultValue: null
        },
        fecha_fin: {
            type: DataTypes.DATE,
            defaultValue: null
        }
    },
    {
        sequelize,
        modelName: "Habitacion",
    }
);

Habitacion.belongsTo(TipoHabitacion, { foreignKey: 'tipo_id' })

module.exports = Habitacion;