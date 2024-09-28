'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Departamentos', [
      {
        nombre: 'Lima',
        descripcion: 'Capital del Perú, conocida por su rica historia y su gastronomía.',
      },
      {
        nombre: 'Ancash',
        descripcion: 'Famosa por el Callejón de Huaylas y el Parque Nacional Huascarán.',
      },
      {
        nombre: 'Apurímac',
        descripcion: 'Región andina conocida por su belleza natural y tradiciones culturales.',
      },
      {
        nombre: 'Arequipa',
        descripcion: 'Conocida como la "Ciudad Blanca" por sus edificios de sillar blanco.',
      },
      {
        nombre: 'Ayacucho',
        descripcion: 'Conocida por su cultura, tradiciones y su producción de artesanías.',
      },
      {
        nombre: 'Cajamarca',
        descripcion: 'Conocida por sus atractivos turísticos y su rica historia incaica.',
      },
      {
        nombre: 'Callao',
        descripcion: 'Conocido por su puerto y su importancia comercial para el país.',
      },
      {
        nombre: 'Cusco',
        descripcion: 'Antigua capital del Imperio Inca y puerta de entrada a Machu Picchu.',
      },
      {
        nombre: 'Huancavelica',
        descripcion: 'Famosa por sus tradiciones y su producción agrícola.',
      },
      {
        nombre: 'Huánuco',
        descripcion: 'Famosa por su biodiversidad y el atractivo turístico de la ciudad de Huánuco.',
      },
      {
        nombre: 'Ica',
        descripcion: 'Conocida por sus viñedos y el oasis de Huacachina.',
      },
      {
        nombre: 'Junín',
        descripcion: 'Conocida por sus hermosos paisajes y el lago Junín.',
      },
      {
        nombre: 'La Libertad',
        descripcion: 'Conocida por su producción de caña de azúcar y la ciudad de Trujillo.',
      },
      {
        nombre: 'Lambayeque',
        descripcion: 'Famosa por su herencia cultural y el Museo Tumbas Reales de Sipán.',
      },
      {
        nombre: 'Loreto',
        descripcion: 'La región más extensa del Perú, rica en flora y fauna amazónica.',
      },
      {
        nombre: 'Madre de Dios',
        descripcion: 'Conocida por su biodiversidad y el Parque Nacional del Manu.',
      },
      {
        nombre:'Moquegua',
        descripcion: 'Región montañosa rica en minerales y biodiversidad.'
      },
      {
        nombre: 'Pasco',
        descripcion: 'Región montañosa rica en minerales y biodiversidad.',
      },
      {
        nombre: 'Piura',
        descripcion: 'Famosa por sus playas y su cultura, especialmente la marinera.',
      },
      {
        nombre: 'Puno',
        descripcion: 'Famosa por el lago Titicaca, el lago navegable más alto del mundo.',
      },
      {
        nombre: 'San Martín',
        descripcion: 'Conocido por su biodiversidad y el Parque Nacional de la Cordillera Azul.',
      },
      {
        nombre: 'Tacna',
        descripcion: 'Conocida por su historia, cultura y la ciudad de Tacna.',
      },
      {
        nombre: 'Tumbes',
        descripcion: 'Famosa por sus playas y su biodiversidad en el ecosistema costero.',
      },
      {
        nombre: 'Ucayali',
        descripcion: 'Famosa por su biodiversidad y la cultura amazónica.',
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Departamentos', null, {});
  }
};
