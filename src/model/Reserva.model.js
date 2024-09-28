const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');
const Habitacion = require('./Habitacion.model');

class Reserva extends Model { }

Reserva.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fecha_creacion: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        fecha_inicio: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        fecha_fin: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        estado: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        monto_total: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        metodo_pago: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        sequelize,
        modelName: "Reserva",
    }
);

Reserva.hasMany(Habitacion, { foreignKey: 'reserva_id' })

module.exports = Reserva;