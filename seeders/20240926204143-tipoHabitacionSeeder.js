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
        "imagen": "https://avatars.mds.yandex.net/i?id=dc6039bb2e71e954cd53a74a20792801-4568174-images-thumbs&n=13"
      },
      {
        "id": 6,
        "nombre": "Presidencial",
        "descripcion": "Habitación con cama king-size, sala de estar, comedor, baño privado, televisión, balcón, jacuzzi y vista panorámica.",
        "capacidad": "2 personas",
        "precio": 350.0,
        "imagen": "https://www.businesstravel.fr/images/stories/hotels/nhhoteles/nh-hotel-mood-room.jpg"
      },
      {
        "id": 7,
        "nombre": "Ejecutiva",
        "descripcion": "Habitación con cama doble, escritorio, baño privado, televisión y balcón.",
        "capacidad": "2 personas",
        "precio": 120.0,
        "imagen": "https://www.aedashomes.com/blog/wp-content/uploads/2017/10/cabeceros-cama.jpg"
      },
      {
        "id": 8,
        "nombre": "Deluxe",
        "descripcion": "Habitación con cama king-size, baño privado, televisión, balcón y vista al mar.",
        "capacidad": "2 personas",
        "precio": 170.0,
        "imagen": "https://i.travelapi.com/hotels/1000000/180000/177900/177816/613a03b4_z.jpg"
      },
      {
        "id": 9,
        "nombre": "Junior Suite",
        "descripcion": "Habitación con cama king-size, sala de estar, baño privado, televisión y balcón.",
        "capacidad": "2 personas",
        "precio": 220.0,
        "imagen": "https://media-cdn.tripadvisor.com/media/photo-s/0b/08/3d/46/habitacion-junior-suite.jpg"
      },
      {
        "id": 10,
        "nombre": "Superior",
        "descripcion": "Habitación con cama doble, baño privado, televisión y balcón.",
        "capacidad": "2 personas",
        "precio": 130.0,
        "imagen": "https://media-cdn.tripadvisor.com/media/photo-s/01/e4/26/3f/habitacion-superior.jpg"
      },
      {
        "id": 11,
        "nombre": "Confort",
        "descripcion": "Habitación con cama doble, baño privado, televisión y balcón.",
        "capacidad": "2 personas",
        "precio": 180.0,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/1e/8b/c0/habitacion-cuadruple.jpg?w=900&h=-1&s=1"
      },
      {
        "id": 12,
        "nombre": "Premium",
        "descripcion": "Habitación con cama king-size, baño privado, televisión, balcón y vista al jardín.",
        "capacidad": "2 personas",
        "precio": 230.0,
        "imagen": "https://i.pinimg.com/originals/43/e6/08/43e608a0dd0544b76241f98b2761be2b.jpg"
      },
      {
        "id": 13,
        "nombre": "Estándar",
        "descripcion": "Habitación con cama doble, baño privado, televisión y balcón.",
        "capacidad": "2 personas",
        "precio": 140.0,
        "imagen": "https://i.pinimg.com/736x/af/a6/c8/afa6c8e0b7d52f704957da9124ba7149--modern-bedroom-decor-design-bedroom.jpg"
      },
      {
        "id": 14,
        "nombre": "Clásica",
        "descripcion": "Habitación con cama doble, baño privado, televisión y balcón.",
        "capacidad": "2 personas",
        "precio": 190.0,
        "imagen": "https://img-20.ccm2.net/Y1rULlNSxSYnuQy7xrvBoEzVhRs=/6a52be77015946f091d33153e7bf8673/ccm-faq/830443.jpg"
      },
      {
        "id": 15,
        "nombre": "Económica",
        "descripcion": "Habitación con cama sencilla, baño privado y televisión.",
        "capacidad": "1 persona",
        "precio": 90.0,
        "imagen": "https://a0.muscache.com/im/pictures/50593fde-2fc7-455f-8cbd-cb29278125b7.jpg?aki_policy=x_large"
      },
      {
        "id": 16,
        "nombre": "Habitación con vista al mar",
        "descripcion": "Habitación con cama doble, baño privado, televisión y balcón con vista al mar.",
        "capacidad": "2 personas",
        "precio": 240.0,
        "imagen": "https://ak-d.tripcdn.com/images/0583s12000d6jpgnxE7FB_R_960_660_R5_D.jpg"
      },
      {
        "id": 17,
        "nombre": "Habitación con jacuzzi",
        "descripcion": "Habitación con cama doble, baño privado, televisión y jacuzzi.",
        "capacidad": "2 personas",
        "precio": 290.0,
        "imagen": "https://www.apartamentai.lt/wp-content/uploads/2019/01/apartamentai-vilniuje-kambariai-su-spa-vilnius-11.jpg"
      },
      {
        "id": 18,
        "nombre": "Habitación con balcón",
        "descripcion": "Habitación con cama doble, baño privado, televisión y balcón.",
        "capacidad": "2 personas",
        "precio": 150.0,
        "imagen": "https://tophotels.ru/icache/hotel_photos/74/3085/83025/786451_1600x1200.jpg"
      },
      {
        "id": 19,
        "nombre": "Habitación con terraza",
        "descripcion": "Habitación con cama doble, baño privado, televisión y terraza.",
        "capacidad": "2 personas",
        "precio": 200.0,
        "imagen": "https://avatars.mds.yandex.net/get-altay/4581272/2a0000017929404cfc8111227728af84534d/XXL"
      },
      {
        "id": 20,
        "nombre": "Habitación con chimenea",
        "descripcion": "Habitación con cama doble, baño privado, televisión y chimenea.",
        "capacidad": "2 personas",
        "precio": 250.0,
        "imagen": "https://i.pinimg.com/originals/7f/46/df/7f46dffcc7529251f42551cf4b3d7756.jpg"
      },
      {
        "id": 21,
        "nombre": "Habitación con cocina",
        "descripcion": "Habitación con cama doble, baño privado, televisión y cocina.",
        "capacidad": "2 personas",
        "precio": 300.0,
        "imagen": "https://i.pinimg.com/736x/5c/51/38/5c5138ed5a83d45551253d2675f2f5cb.jpg"
      },
      {
        "id": 22,
        "nombre": "Habitación con sala de estar",
        "descripcion": "Habitación con cama doble, baño privado, televisión y sala de estar.",
        "capacidad": "2 personas",
        "precio": 350.0,
        "imagen": "https://avatars.mds.yandex.net/i?id=a59c3487652150ec7cc8d6db2ced21a2019af8ee-4470847-images-thumbs&n=13"
      },
      {
        "id": 23,
        "nombre": "Habitación con comedor",
        "descripcion": "Habitación con cama doble, baño privado, televisión y comedor.",
        "capacidad": "2 personas",
        "precio": 400.0,
        "imagen": "https://i.pinimg.com/originals/79/42/c2/7942c21a52e865dfdc0fcaf93331b21a.jpg"
      },
      {
        "id": 24,
        "nombre": "Habitación con vista al jardín",
        "descripcion": "Habitación con cama doble, baño privado, televisión y balcón con vista al jardín.",
        "capacidad": "2 personas",
        "precio": 160.0,
        "imagen": "https://i.pinimg.com/736x/b0/38/b2/b038b24dd63b755601a08502018640fd.jpg"
      },
      {
        "id": 25,
        "nombre": "Habitación con vista a la ciudad",
        "descripcion": "Habitación con cama doble, baño privado, televisión y balcón con vista a la ciudad.",
        "capacidad": "2 personas",
        "precio": 210.0,
        "imagen": "https://i.pinimg.com/736x/cc/6c/3e/cc6c3e0e7452043df053547311bca412--mexico-city-hotels-in-mexico.jpg"
      },
      {
        "id": 26,
        "nombre": "Habitación con vista a la montaña",
        "descripcion": "Habitación con cama doble, baño privado, televisión y balcón con vista a la montaña.",
        "capacidad": "2 personas",
        "precio": 260.0,
        "imagen": "https://cache.marriott.com/content/dam/marriott-renditions/EGEAV/whrbw-traditional-guestroom-4253-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*"
      },
      {
        "id": 27,
        "nombre": "Habitación con acceso a la piscina",
        "descripcion": "Habitación con cama doble, baño privado, televisión y acceso a la piscina.",
        "capacidad": "2 personas",
        "precio": 310.0,
        "imagen": "https://i.pinimg.com/736x/72/dc/27/72dc27903615e0c1042e06a86a12e254.jpg"
      },
      {
        "id": 28,
        "nombre": "Habitación para personas con movilidad reducida",
        "descripcion": "Habitación con cama doble, baño privado, televisión y acceso adaptado para personas con movilidad reducida.",
        "capacidad": "2 personas",
        "precio": 120.0,
        "imagen": "https://avatars.mds.yandex.net/i?id=577a9c1f01c6b02135f931e4ca94ed3c-4394907-images-thumbs&n=13"
      },
      {
        "id": 29,
        "nombre": "Habitación tematica",
        "descripcion": "Habitación decorada según una temática especial con cama doble, baño privado y televisión.",
        "capacidad": "2 personas",
        "precio": 200.0,
        "imagen": "https://i.pinimg.com/736x/37/37/94/373794efd8786f82e4800fe87f438100.jpg"
      }
    ],
      {})
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('TipoHabitacions', null, {});
  }
};
