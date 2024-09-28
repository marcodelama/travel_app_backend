'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('TipoHabitacions', [
      {
        "id": 1,
        "nombre": "Sencilla",
        "descripcion": "Habitación individual con cama sencilla, baño privado y televisión.",
        "capacidad": "1 persona",
        "precio": 100.0
      },
      {
        "id": 2,
        "nombre": "Doble",
        "descripcion": "Habitación con cama doble, baño privado, televisión y balcón.",
        "capacidad": "2 personas",
        "precio": 150.0
      },
      {
        "id": 3,
        "nombre": "Triple",
        "descripcion": "Habitación con cama doble y una cama individual, baño privado, televisión y balcón.",
        "capacidad": "3 personas",
        "precio": 200.0
      },
      {
        "id": 4,
        "nombre": "Suite",
        "descripcion": "Habitación amplia con cama king-size, sala de estar, baño privado, televisión, balcón y jacuzzi.",
        "capacidad": "2 personas",
        "precio": 250.0
      },
      {
        "id": 5,
        "nombre": "Familiar",
        "descripcion": "Habitación con cama doble y dos camas individuales, baño privado, televisión y balcón.",
        "capacidad": "4 personas",
        "precio": 300.0
      },
      {
        "id": 6,
        "nombre": "Presidencial",
        "descripcion": "Habitación con cama king-size, sala de estar, comedor, baño privado, televisión, balcón, jacuzzi y vista panorámica.",
        "capacidad": "2 personas",
        "precio": 350.0
      },
      {
        "id": 7,
        "nombre": "Ejecutiva",
        "descripcion": "Habitación con cama doble, escritorio, baño privado, televisión y balcón.",
        "capacidad": "2 personas",
        "precio": 120.0
      },
      {
        "id": 8,
        "nombre": "Deluxe",
        "descripcion": "Habitación con cama king-size, baño privado, televisión, balcón y vista al mar.",
        "capacidad": "2 personas",
        "precio": 170.0
      },
      {
        "id": 9,
        "nombre": "Junior Suite",
        "descripcion": "Habitación con cama king-size, sala de estar, baño privado, televisión y balcón.",
        "capacidad": "2 personas",
        "precio": 220.0
      },
      {
        "id": 10,
        "nombre": "Superior",
        "descripcion": "Habitación con cama doble, baño privado, televisión y balcón.",
        "capacidad": "2 personas",
        "precio": 130.0
      },
      {
        "id": 11,
        "nombre": "Confort",
        "descripcion": "Habitación con cama doble, baño privado, televisión y balcón.",
        "capacidad": "2 personas",
        "precio": 180.0
      },
      {
        "id": 12,
        "nombre": "Premium",
        "descripcion": "Habitación con cama king-size, baño privado, televisión, balcón y vista al jardín.",
        "capacidad": "2 personas",
        "precio": 230.0
      },
      {
        "id": 13,
        "nombre": "Estándar",
        "descripcion": "Habitación con cama doble, baño privado, televisión y balcón.",
        "capacidad": "2 personas",
        "precio": 140.0
      },
      {
        "id": 14,
        "nombre": "Clásica",
        "descripcion": "Habitación con cama doble, baño privado, televisión y balcón.",
        "capacidad": "2 personas",
        "precio": 190.0
      },
      {
        "id": 15,
        "nombre": "Económica",
        "descripcion": "Habitación con cama sencilla, baño privado y televisión.",
        "capacidad": "1 persona",
        "precio": 90.0
      },
      {
        "id": 16,
        "nombre": "Habitación con vista al mar",
        "descripcion": "Habitación con cama doble, baño privado, televisión y balcón con vista al mar.",
        "capacidad": "2 personas",
        "precio": 240.0
      },
      {
        "id": 17,
        "nombre": "Habitación con jacuzzi",
        "descripcion": "Habitación con cama doble, baño privado, televisión y jacuzzi.",
        "capacidad": "2 personas",
        "precio": 290.0
      },
      {
        "id": 18,
        "nombre": "Habitación con balcón",
        "descripcion": "Habitación con cama doble, baño privado, televisión y balcón.",
        "capacidad": "2 personas",
        "precio": 150.0
      },
      {
        "id": 19,
        "nombre": "Habitación con terraza",
        "descripcion": "Habitación con cama doble, baño privado, televisión y terraza.",
        "capacidad": "2 personas",
        "precio": 200.0
      },
      {
        "id": 20,
        "nombre": "Habitación con chimenea",
        "descripcion": "Habitación con cama doble, baño privado, televisión y chimenea.",
        "capacidad": "2 personas",
        "precio": 250.0
      },
      {
        "id": 21,
        "nombre": "Habitación con cocina",
        "descripcion": "Habitación con cama doble, baño privado, televisión y cocina.",
        "capacidad": "2 personas",
        "precio": 300.0
      },
      {
        "id": 22,
        "nombre": "Habitación con sala de estar",
        "descripcion": "Habitación con cama doble, baño privado, televisión y sala de estar.",
        "capacidad": "2 personas",
        "precio": 350.0
      },
      {
        "id": 23,
        "nombre": "Habitación con comedor",
        "descripcion": "Habitación con cama doble, baño privado, televisión y comedor.",
        "capacidad": "2 personas",
        "precio": 400.0,
        "imagen": "",
      },
      {
        "id": 24,
        "nombre": "Habitación con vista al jardín",
        "descripcion": "Habitación con cama doble, baño privado, televisión y balcón con vista al jardín.",
        "capacidad": "2 personas",
        "precio": 160.0
      },
      {
        "id": 25,
        "nombre": "Habitación con vista a la ciudad",
        "descripcion": "Habitación con cama doble, baño privado, televisión y balcón con vista a la ciudad.",
        "capacidad": "2 personas",
        "precio": 210.0
      },
      {
        "id": 26,
        "nombre": "Habitación con vista a la montaña",
        "descripcion": "Habitación con cama doble, baño privado, televisión y balcón con vista a la montaña.",
        "capacidad": "2 personas",
        "precio": 260.0
      },
      {
        "id": 27,
        "nombre": "Habitación con acceso a la piscina",
        "descripcion": "Habitación con cama doble, baño privado, televisión y acceso a la piscina.",
        "capacidad": "2 personas",
        "precio": 310.0
      },
      {
        "id": 28,
        "nombre": "Habitación con acceso al spa",
        "descripcion": "Habitación con cama doble, baño privado, televisión y acceso al spa.",
        "capacidad": "2 personas",
        "precio": 360.0
      }],
      {})
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('TipoHabitacions', null, {});
  }
};
