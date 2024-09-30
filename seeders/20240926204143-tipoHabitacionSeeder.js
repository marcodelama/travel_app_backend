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
        "precio": 100.0,
        "imagen": "https://avatars.mds.yandex.net/i?id=9a2c66b86b6ec512a4f9fccdd35f5c9f4a2fadb9-8340947-images-thumbs&n=13"
      },
      {
        "id": 2,
        "nombre": "Doble",
        "descripcion": "Habitación con cama doble, baño privado, televisión y balcón.",
        "capacidad": "2 personas",
        "precio": 150.0,
        "imagen": "https://webbox.imgix.net/images/pyrmbytbmtplscmx/5efcf843-f7d9-4d4c-bb91-a248b8f83e05.png?auto=format,compress&fit=crop&crop=entropy"
      },
      {
        "id": 3,
        "nombre": "Triple",
        "descripcion": "Habitación con cama doble y una cama individual, baño privado, televisión y balcón.",
        "capacidad": "3 personas",
        "precio": 200.0,
        "imagen": "https://webbox.imgix.net/images/owvecfmxulwbfvxm/6b563539-aef6-40de-8a99-9c195a0295ad.jpg?auto=format,compress&fit=crop&crop=entropy"
      },
      {
        "id": 4,
        "nombre": "Suite",
        "descripcion": "Habitación amplia, baño privado, balcón y jacuzzi.",
        "capacidad": "2 personas",
        "precio": 250.0,
        "imagen": "https://avatars.mds.yandex.net/i?id=b72d30bdc9b8f6b7ee0c12dd626169a960bb06ab-10637298-images-thumbs&n=13"
      },
      {
        "id": 5,
        "nombre": "Familiar",
        "descripcion": "Habitación con cama doble y dos camas individuales, baño privado, televisión",
        "capacidad": "4 personas",
        "precio": 300.0,
        "imagen": "https://example.com/images/familiar.jpg"
      },
      {
        "id": 6,
        "nombre": "Presidencial",
        "descripcion": "Habitación con cama king-size, sala de estar, comedor, baño privado, televisión, balcón, jacuzzi y vista panorámica.",
        "capacidad": "2 personas",
        "precio": 350.0,
        "imagen": "https://example.com/images/presidencial.jpg"
      },
      {
        "id": 7,
        "nombre": "Ejecutiva",
        "descripcion": "Habitación con cama doble, escritorio, baño privado, televisión y balcón.",
        "capacidad": "2 personas",
        "precio": 120.0,
        "imagen": "https://example.com/images/ejecutiva.jpg"
      },
      {
        "id": 8,
        "nombre": "Deluxe",
        "descripcion": "Habitación con cama king-size, baño privado, televisión, balcón y vista al mar.",
        "capacidad": "2 personas",
        "precio": 170.0,
        "imagen": "https://example.com/images/deluxe.jpg"
      },
      {
        "id": 9,
        "nombre": "Junior Suite",
        "descripcion": "Habitación con cama king-size, sala de estar, baño privado, televisión y balcón.",
        "capacidad": "2 personas",
        "precio": 220.0,
        "imagen": "https://example.com/images/juniorsuite.jpg"
      },
      {
        "id": 10,
        "nombre": "Superior",
        "descripcion": "Habitación con cama doble, baño privado, televisión y balcón.",
        "capacidad": "2 personas",
        "precio": 130.0,
        "imagen": "https://example.com/images/superior.jpg"
      },
      {
        "id": 11,
        "nombre": "Confort",
        "descripcion": "Habitación con cama doble, baño privado, televisión y balcón.",
        "capacidad": "2 personas",
        "precio": 180.0,
        "imagen": "https://example.com/images/confort.jpg"
      },
      {
        "id": 12,
        "nombre": "Premium",
        "descripcion": "Habitación con cama king-size, baño privado, televisión, balcón y vista al jardín.",
        "capacidad": "2 personas",
        "precio": 230.0,
        "imagen": "https://example.com/images/premium.jpg"
      },
      {
        "id": 13,
        "nombre": "Estándar",
        "descripcion": "Habitación con cama doble, baño privado, televisión y balcón.",
        "capacidad": "2 personas",
        "precio": 140.0,
        "imagen": "https://example.com/images/estandar.jpg"
      },
      {
        "id": 14,
        "nombre": "Clásica",
        "descripcion": "Habitación con cama doble, baño privado, televisión y balcón.",
        "capacidad": "2 personas",
        "precio": 190.0,
        "imagen": "https://example.com/images/clasica.jpg"
      },
      {
        "id": 15,
        "nombre": "Económica",
        "descripcion": "Habitación con cama sencilla, baño privado y televisión.",
        "capacidad": "1 persona",
        "precio": 90.0,
        "imagen": "https://example.com/images/economica.jpg"
      },
      {
        "id": 16,
        "nombre": "Habitación con vista al mar",
        "descripcion": "Habitación con cama doble, baño privado, televisión y balcón con vista al mar.",
        "capacidad": "2 personas",
        "precio": 240.0,
        "imagen": "https://example.com/images/vistaalmar.jpg"
      },
      {
        "id": 17,
        "nombre": "Habitación con jacuzzi",
        "descripcion": "Habitación con cama doble, baño privado, televisión y jacuzzi.",
        "capacidad": "2 personas",
        "precio": 290.0,
        "imagen": "https://example.com/images/jacuzzi.jpg"
      },
      {
        "id": 18,
        "nombre": "Habitación con balcón",
        "descripcion": "Habitación con cama doble, baño privado, televisión y balcón.",
        "capacidad": "2 personas",
        "precio": 150.0,
        "imagen": "https://example.com/images/conbalcon.jpg"
      },
      {
        "id": 19,
        "nombre": "Habitación con terraza",
        "descripcion": "Habitación con cama doble, baño privado, televisión y terraza.",
        "capacidad": "2 personas",
        "precio": 200.0,
        "imagen": "https://example.com/images/conterraza.jpg"
      },
      {
        "id": 20,
        "nombre": "Habitación con chimenea",
        "descripcion": "Habitación con cama doble, baño privado, televisión y chimenea.",
        "capacidad": "2 personas",
        "precio": 250.0,
        "imagen": "https://example.com/images/chimenea.jpg"
      },
      {
        "id": 21,
        "nombre": "Habitación con cocina",
        "descripcion": "Habitación con cama doble, baño privado, televisión y cocina.",
        "capacidad": "2 personas",
        "precio": 300.0,
        "imagen": "https://example.com/images/concocina.jpg"
      },
      {
        "id": 22,
        "nombre": "Habitación con sala de estar",
        "descripcion": "Habitación con cama doble, baño privado, televisión y sala de estar.",
        "capacidad": "2 personas",
        "precio": 350.0,
        "imagen": "https://example.com/images/saladeestar.jpg"
      },
      {
        "id": 23,
        "nombre": "Habitación con comedor",
        "descripcion": "Habitación con cama doble, baño privado, televisión y comedor.",
        "capacidad": "2 personas",
        "precio": 400.0,
        "imagen": "https://example.com/images/comedor.jpg"
      },
      {
        "id": 24,
        "nombre": "Habitación con vista al jardín",
        "descripcion": "Habitación con cama doble, baño privado, televisión y balcón con vista al jardín.",
        "capacidad": "2 personas",
        "precio": 160.0,
        "imagen": "https://example.com/images/jardin.jpg"
      },
      {
        "id": 25,
        "nombre": "Habitación con vista a la ciudad",
        "descripcion": "Habitación con cama doble, baño privado, televisión y balcón con vista a la ciudad.",
        "capacidad": "2 personas",
        "precio": 210.0,
        "imagen": "https://example.com/images/ciudad.jpg"
      },
      {
        "id": 26,
        "nombre": "Habitación con vista a la montaña",
        "descripcion": "Habitación con cama doble, baño privado, televisión y balcón con vista a la montaña.",
        "capacidad": "2 personas",
        "precio": 260.0,
        "imagen": "https://example.com/images/montana.jpg"
      },
      {
        "id": 27,
        "nombre": "Habitación con acceso a la piscina",
        "descripcion": "Habitación con cama doble, baño privado, televisión y acceso a la piscina.",
        "capacidad": "2 personas",
        "precio": 310.0,
        "imagen": "https://example.com/images/piscina.jpg"
      },
      {
        "id": 28,
        "nombre": "Habitación para personas con movilidad reducida",
        "descripcion": "Habitación con cama doble, baño privado, televisión y acceso adaptado para personas con movilidad reducida.",
        "capacidad": "2 personas",
        "precio": 120.0,
        "imagen": "https://example.com/images/movilidadreducida.jpg"
      },
      {
        "id": 29,
        "nombre": "Habitación tematica",
        "descripcion": "Habitación decorada según una temática especial con cama doble, baño privado y televisión.",
        "capacidad": "2 personas",
        "precio": 200.0,
        "imagen": "https://example.com/images/tematica.jpg"
      }
    ],
      {})
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('TipoHabitacions', null, {});
  }
};
