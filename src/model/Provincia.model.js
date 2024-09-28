const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

//Importación de modelos
const Atraccion = require('./Atraccion.model');


class Provincia extends Model {}

Provincia.init(
    {
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
        modelName: "Provincia",
    }
);

Provincia.hasMany(Atraccion, {foreignKey:'provincia_id'})

module.exports = Provincia;

//Provincia es el padre de la table Hoteles, porque una provincia puede tener varios hoteles
//Revisa si se actualizó en mysql de xampp
//Lo abriste? NOsi pero es mas divertido asi jjja
//Dejen dormir
//Para probar las apis
//y yo que hago?
//Ve al seeder de provincias, copia el JSON
//Pídele a Claude que genere un JSON con 85 hoteles 
//No te escuché
//Ambosh
//Envíalo por WhatsApp

//Crea una BD de nombre park-me
//Luego ejecuta "npm run dev"
//Ingresa a la BD y dirígete a "Diseñador"
//Valida si existe conexión entre la tabla provincia y Hoteles

//@Lider de Documentación de Dropdowns
//Left?
//Sí
//Qué error?
//Sí
//Envía captura
//@Julio Sullcaray, ejecuta en tu visual, lo hago?xd
//Creo que está clonando a CoxXDDDDDDDDD
//Dime
//Si se enlazaron