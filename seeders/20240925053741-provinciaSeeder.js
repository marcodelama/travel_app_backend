'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Provincia', [
      { id: 1, nombre: 'Lima', departamento_id: 1 },
      { id: 2, nombre: 'Barranca', departamento_id: 1 },
      { id: 3, nombre: 'Cajatambo', departamento_id: 1 },
      { id: 4, nombre: 'Canta', departamento_id: 1 },
      { id: 5, nombre: 'Cañete', departamento_id: 1 },
      { id: 6, nombre: 'Huaral', departamento_id: 1 },
      { id: 7, nombre: 'Huarochirí', departamento_id: 1 },
      { id: 8, nombre: 'Huaura', departamento_id: 1 },
      { id: 9, nombre: 'Oyon', departamento_id: 1 },
      { id: 10, nombre: 'Yauyos', departamento_id: 1 },

      // Departamento 2 (Áncash)
      { id: 11, nombre: 'Huaraz', departamento_id: 2 },
      { id: 12, nombre: 'Aija', departamento_id: 2 },
      { id: 13, nombre: 'Antonio Raymondi', departamento_id: 2 },
      { id: 14, nombre: 'Asunción', departamento_id: 2 },
      { id: 15, nombre: 'Bolognesi', departamento_id: 2 },
      { id: 16, nombre: 'Carhuaz', departamento_id: 2 },
      { id: 17, nombre: 'Carlos Fermín Fitzcarrald', departamento_id: 2 },
      { id: 18, nombre: 'Casma', departamento_id: 2 },
      { id: 19, nombre: 'Corongo', departamento_id: 2 },
      { id: 20, nombre: 'Huari', departamento_id: 2 },
      { id: 21, nombre: 'Huarmey', departamento_id: 2 },
      { id: 22, nombre: 'Huaylas', departamento_id: 2 },
      { id: 23, nombre: 'Mariscal Luzuriaga', departamento_id: 2 },
      { id: 24, nombre: 'Ocros', departamento_id: 2 },
      { id: 25, nombre: 'Pallasca', departamento_id: 2 },
      { id: 26, nombre: 'Pomabamba', departamento_id: 2 },
      { id: 27, nombre: 'Recuay', departamento_id: 2 },
      { id: 28, nombre: 'Santa', departamento_id: 2 },
      { id: 29, nombre: 'Sihuas', departamento_id: 2 },
      { id: 30, nombre: 'Yungay', departamento_id: 2 },

      // Departamento 3 (Apurímac)
      { id: 31, nombre: 'Abancay', departamento_id: 3 },
      { id: 32, nombre: 'Andahuaylas', departamento_id: 3 },
      { id: 33, nombre: 'Antabamba', departamento_id: 3 },
      { id: 34, nombre: 'Aymaraes', departamento_id: 3 },
      { id: 35, nombre: 'Cotabambas', departamento_id: 3 },
      { id: 36, nombre: 'Chacoche', departamento_id: 3 },
      { id: 37, nombre: 'Curahuasi', departamento_id: 3 },
      { id: 38, nombre: 'Huancarama', departamento_id: 3 },
      { id: 39, nombre: 'Progreso', departamento_id: 3 },
      { id: 40, nombre: 'San Pedro de Andahuaylas', departamento_id: 3 },

      // Departamento 4 (Arequipa)
      { id: 41, nombre: 'Arequipa', departamento_id: 4 },
      { id: 42, nombre: 'Camaná', departamento_id: 4 },
      { id: 43, nombre: 'Caravelí', departamento_id: 4 },
      { id: 44, nombre: 'Castilla', departamento_id: 4 },
      { id: 45, nombre: 'Caylloma', departamento_id: 4 },
      { id: 46, nombre: 'Islay', departamento_id: 4 },
      { id: 47, nombre: 'La Unión', departamento_id: 4 },

      // Departamento 5 (Ayacucho)
      { id: 48, nombre: 'Ayacucho', departamento_id: 5 },
      { id: 49, nombre: 'Cangallo', departamento_id: 5 },
      { id: 50, nombre: 'Huamanga', departamento_id: 5 },
      { id: 51, nombre: 'Huanca Sancos', departamento_id: 5 },
      { id: 52, nombre: 'Huanta', departamento_id: 5 },
      { id: 53, nombre: 'La Mar', departamento_id: 5 },
      { id: 54, nombre: 'Lucanas', departamento_id: 5 },
      { id: 55, nombre: 'Parinacochas', departamento_id: 5 },
      { id: 56, nombre: 'Páucar del Sara Sara', departamento_id: 5 },
      { id: 57, nombre: 'San Cristóbal', departamento_id: 5 },
      { id: 58, nombre: 'Vilcas Huamán', departamento_id: 5 },

      // Departamento 6 (Cajamarca)
      { id: 59, nombre: 'Cajamarca', departamento_id: 6 },
      { id: 60, nombre: 'Celendín', departamento_id: 6 },
      { id: 61, nombre: 'Chota', departamento_id: 6 },
      { id: 62, nombre: 'Contumazá', departamento_id: 6 },
      { id: 63, nombre: 'Hualgayoc', departamento_id: 6 },
      { id: 64, nombre: 'Jaén', departamento_id: 6 },
      { id: 65, nombre: 'San Marcos', departamento_id: 6 },
      { id: 66, nombre: 'San Pablo', departamento_id: 6 },
      { id: 67, nombre: 'San Miguel', departamento_id: 6 },
      { id: 68, nombre: 'Bambamarca', departamento_id: 6 },

      // Departamento 7 (Callao)
      { id: 69, nombre: 'Callao', departamento_id: 7 },

      // Departamento 8 (Cusco)
      { id: 70, nombre: 'Cusco', departamento_id: 8 },
      { id: 71, nombre: 'Acomayo', departamento_id: 8 },
      { id: 72, nombre: 'Anta', departamento_id: 8 },
      { id: 73, nombre: 'Calca', departamento_id: 8 },
      { id: 74, nombre: 'Canchis', departamento_id: 8 },
      { id: 75, nombre: 'Chumbivilcas', departamento_id: 8 },
      { id: 76, nombre: 'Espinar', departamento_id: 8 },
      { id: 77, nombre: 'La Convención', departamento_id: 8 },
      { id: 78, nombre: 'Paucartambo', departamento_id: 8 },
      { id: 79, nombre: 'Quispicanchi', departamento_id: 8 },
      { id: 80, nombre: 'Urubamba', departamento_id: 8 },

      // Departamento 9 (Huancavelica)
      { id: 81, nombre: 'Huancavelica', departamento_id: 9 },
      { id: 82, nombre: 'Acobamba', departamento_id: 9 },
      { id: 83, nombre: 'Angaraes', departamento_id: 9 },
      { id: 84, nombre: 'Castrovirreyna', departamento_id: 9 },
      { id: 85, nombre: 'Churcampa', departamento_id: 9 },
      { id: 86, nombre: 'Huaytará', departamento_id: 9 },

      // Departamento 10 (Huánuco)
      { id: 87, nombre: 'Huánuco', departamento_id: 10 },
      { id: 88, nombre: 'Ambo', departamento_id: 10 },
      { id: 89, nombre: 'Dos de Mayo', departamento_id: 10 },
      { id: 90, nombre: 'Huacaybamba', departamento_id: 10 },
      { id: 91, nombre: 'Huamalíes', departamento_id: 10 },
      { id: 92, nombre: 'Leoncio Prado', departamento_id: 10 },
      { id: 93, nombre: 'Marañón', departamento_id: 10 },
      { id: 94, nombre: 'Pachitea', departamento_id: 10 },
      { id: 95, nombre: 'Panao', departamento_id: 10 },
      { id: 96, nombre: 'Rondos', departamento_id: 10 },
      { id: 97, nombre: 'Tingo María', departamento_id: 10 },

      // Departamento 11 (Ica)
      { id: 98, nombre: 'Ica', departamento_id: 11 },
      { id: 99, nombre: 'Chincha', departamento_id: 11 },
      { id: 100, nombre: 'Nasca', departamento_id: 11 },
      { id: 101, nombre: 'Palpa', departamento_id: 11 },
      { id: 102, nombre: 'Pisco', departamento_id: 11 },

      // Departamento 12 (Junín)
      { id: 103, nombre: 'Huancayo', departamento_id: 12 },
      { id: 104, nombre: 'Concepción', departamento_id: 12 },
      { id: 105, nombre: 'Jauja', departamento_id: 12 },
      { id: 106, nombre: 'Tarma', departamento_id: 12 },
      { id: 107, nombre: 'Chupaca', departamento_id: 12 },
      { id: 108, nombre: 'Satipo', departamento_id: 12 },
      { id: 109, nombre: 'Mañazo', departamento_id: 12 },

      // Departamento 13 (La Libertad)
      { id: 110, nombre: 'Trujillo', departamento_id: 13 },
      { id: 111, nombre: 'Ascope', departamento_id: 13 },
      { id: 112, nombre: 'Bolívar', departamento_id: 13 },
      { id: 113, nombre: 'Chepén', departamento_id: 13 },
      { id: 114, nombre: 'Gran Chimú', departamento_id: 13 },
      { id: 115, nombre: 'Julcán', departamento_id: 13 },
      { id: 116, nombre: 'Otuzco', departamento_id: 13 },
      { id: 117, nombre: 'Pacasmayo', departamento_id: 13 },
      { id: 118, nombre: 'Pataz', departamento_id: 13 },
      { id: 119, nombre: 'Sánchez Carrión', departamento_id: 13 },
      { id: 120, nombre: 'Virú', departamento_id: 13 },

      // Departamento 14 (Lambayeque)
      { id: 121, nombre: 'Chiclayo', departamento_id: 14 },
      { id: 122, nombre: 'Chota', departamento_id: 14 },
      { id: 123, nombre: 'Ferreñafe', departamento_id: 14 },
      { id: 124, nombre: 'Lambayeque', departamento_id: 14 },

      // Departamento 15 (Loreto)
      { id: 125, nombre: 'Iquitos', departamento_id: 15 },
      { id: 126, nombre: 'Alto Amazonas', departamento_id: 15 },
      { id: 127, nombre: 'Loreto', departamento_id: 15 },
      { id: 128, nombre: 'Mariscal Ramón Castilla', departamento_id: 15 },
      { id: 129, nombre: 'Maynas', departamento_id: 15 },
      { id: 130, nombre: 'Putumayo', departamento_id: 15 },
      { id: 131, nombre: 'Requena', departamento_id: 15 },
      { id: 132, nombre: 'Ucayali', departamento_id: 15 },

      // Departamento 17 (Madre de Dios)
      { id: 133, nombre: 'Puerto Maldonado', departamento_id: 16 },
      { id: 134, nombre: 'Tambopata', departamento_id: 16 },
      { id: 135, nombre: 'Manu', departamento_id: 16 },
      { id: 136, nombre: 'Tahuamanu', departamento_id: 16 },

      // Departamento 18 (Moquegua)
      { id: 137, nombre: 'Moquegua', departamento_id: 17 },
      { id: 138, nombre: 'Ilo', departamento_id: 17 },
      { id: 139, nombre: 'Mariscal Nieto', departamento_id: 17 },

      // Departamento 19 (Pasco)
      { id: 140, nombre: 'Pasco', departamento_id: 18 },
      { id: 141, nombre: 'Daniel Alcides Carrión', departamento_id: 18 },
      { id: 142, nombre: 'Oxapampa', departamento_id: 18 },
      { id: 143, nombre: 'Tucumán', departamento_id: 18 },

      // Departamento 20 (Piura)
      { id: 144, nombre: 'Piura', departamento_id: 19 },
      { id: 145, nombre: 'Ayabaca', departamento_id: 19 },
      { id: 146, nombre: 'Huancabamba', departamento_id: 19 },
      { id: 147, nombre: 'Morropón', departamento_id: 19 },
      { id: 148, nombre: 'Paita', departamento_id: 19 },
      { id: 149, nombre: 'Sullana', departamento_id: 19 },
      { id: 150, nombre: 'Talara', departamento_id: 19 },
      { id: 151, nombre: 'Sechura', departamento_id: 19 },

      // Departamento 21 (Puno)
      { id: 152, nombre: 'Puno', departamento_id: 20 },
      { id: 153, nombre: 'Azángaro', departamento_id: 20 },
      { id: 154, nombre: 'Carabaya', departamento_id: 20 },
      { id: 155, nombre: 'Chucuito', departamento_id: 20 },
      { id: 156, nombre: 'El Collao', departamento_id: 20 },
      { id: 157, nombre: 'Huancané', departamento_id: 20 },
      { id: 158, nombre: 'Lampa', departamento_id: 20 },
      { id: 159, nombre: 'Melgar', departamento_id: 20 },
      { id: 160, nombre: 'San Antonio de Putina', departamento_id: 20 },
      { id: 161, nombre: 'San Román', departamento_id: 20 },
      { id: 162, nombre: 'Yunguyo', departamento_id: 20 },

      // Departamento 22 (San Martín)
      { id: 163, nombre: 'Juanjuí', departamento_id: 21 },
      { id: 164, nombre: 'Moyobamba', departamento_id: 21 },
      { id: 165, nombre: 'San Martín', departamento_id: 21 },
      { id: 166, nombre: 'Tarapoto', departamento_id: 21 },
      { id: 167, nombre: 'Picota', departamento_id: 21 },
      { id: 168, nombre: 'El Dorado', departamento_id: 21 },
      { id: 169, nombre: 'Hualgayoc', departamento_id: 21 },
      { id: 170, nombre: 'Lamas', departamento_id: 21 },

      // Departamento 23 (Tacna)
      { id: 171, nombre: 'Tacna', departamento_id: 22 },
      { id: 172, nombre: 'Candarave', departamento_id: 22 },
      { id: 173, nombre: 'Jorge Basadre', departamento_id: 22 },
      { id: 174, nombre: 'Tarata', departamento_id: 22 },

      // Departamento 24 (Tumbes)
      { id: 175, nombre: 'Tumbes', departamento_id: 23 },
      { id: 176, nombre: 'Contralmirante Villar', departamento_id: 23 },
      { id: 177, nombre: 'Zarumilla', departamento_id: 23 },

      // Departamento 25 (Ucayali)
      { id: 178, nombre: 'Pucallpa', departamento_id: 24 },
      { id: 179, nombre: 'Atalaya', departamento_id: 24 },
      { id: 180, nombre: 'Coronel Portillo', departamento_id: 24 },
      { id: 181, nombre: 'Padre Abad', departamento_id: 24 },
      { id: 182, nombre: 'Purús', departamento_id: 24 },
      { id: 183, nombre: 'Chachapoyas', departamento_id: 24 },
      { id: 184, nombre: 'Bagua', departamento_id: 24 },
      { id: 185, nombre: 'Bongará', departamento_id: 24 },
      { id: 186, nombre: 'Condorcanqui', departamento_id: 24 },
      { id: 187, nombre: 'Luya', departamento_id: 24 },
      { id: 188, nombre: 'Rodríguez de Mendoza', departamento_id: 24 },
      { id: 189, nombre: 'Utcubamba', departamento_id: 24 },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Provincia', null, {});
  }
};
