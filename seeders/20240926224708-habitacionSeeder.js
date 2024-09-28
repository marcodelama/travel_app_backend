'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Habitacions', [
      {
        "id": 1,
        "hotel_id": 1,
        "tipo_id": 1,
        "num_habitacion": 101,
      },
      {
        "id": 2,
        "hotel_id": 1,
        "tipo_id": 2,
        "num_habitacion": 102,
      },
      {
        "id": 3,
        "hotel_id": 1,
        "tipo_id": 2,
        "num_habitacion": 103,
      },
      {
        "id": 4,
        "hotel_id": 2,
        "tipo_id": 3,
        "num_habitacion": 104,

      },
      {
        "id": 5,
        "hotel_id": 3,
        "tipo_id": 4,
        "num_habitacion": 105,
      },
      {
        "id": 6,
        "hotel_id": 4,
        "tipo_id": 5,
        "num_habitacion": 106,

      },
      {
        "id": 7,
        "hotel_id": 5,
        "tipo_id": 6,
        "num_habitacion": 107,
      },
      {
        "id": 8,
        "hotel_id": 6,
        "tipo_id": 7,
        "num_habitacion": 108,

      },
      {
        "id": 9,
        "hotel_id": 7,
        "tipo_id": 6,
        "num_habitacion": 109,
      },
      {
        "id": 10,
        "hotel_id": 8,
        "tipo_id": 8,
        "num_habitacion": 110,

      },
      {
        "id": 11,
        "hotel_id": 9,
        "tipo_id": 9,
        "num_habitacion": 111,
      },
      {
        "id": 12,
        "hotel_id": 10,
        "tipo_id": 8,
        "num_habitacion": 112,

      },
      {
        "id": 13,
        "hotel_id": 11,
        "tipo_id": 10,
        "num_habitacion": 113,
      },
      {
        "id": 14,
        "hotel_id": 12,
        "tipo_id": 12,
        "num_habitacion": 114,

      },
      {
        "id": 15,
        "hotel_id": 13,
        "tipo_id": 11,
        "num_habitacion": 115,
      },
      {
        "id": 16,
        "hotel_id": 14,
        "tipo_id": 13,
        "num_habitacion": 116,

      },
      {
        "id": 17,
        "hotel_id": 15,
        "tipo_id": 2,
        "num_habitacion": 117,

      },
      {
        "id": 18,
        "hotel_id": 16,
        "tipo_id": 3,
        "num_habitacion": 118,

      },
      {
        "id": 19,
        "hotel_id": 17,
        "tipo_id": 14,
        "num_habitacion": 119,

      },
      {
        "id": 20,
        "hotel_id": 18,
        "tipo_id": 15,
        "num_habitacion": 120,

      },
      {
        "id": 21,
        "hotel_id": 19,
        "tipo_id": 16,
        "num_habitacion": 121,

      },
      {
        "id": 22,
        "hotel_id": 20,
        "tipo_id": 17,
        "num_habitacion": 122,

      },
      {
        "id": 23,
        "hotel_id": 21,
        "tipo_id": 18,
        "num_habitacion": 123,

      },
      {
        "id": 24,
        "hotel_id": 22,
        "tipo_id": 19,
        "num_habitacion": 124,

      },
      {
        "id": 25,
        "hotel_id": 23,
        "tipo_id": 1,
        "num_habitacion": 125,

      },
      {
        "id": 26,
        "hotel_id": 24,
        "tipo_id": 20,
        "num_habitacion": 126,

      },
      {
        "id": 27,
        "hotel_id": 25,
        "tipo_id": 23,
        "num_habitacion": 127,

      },
      {
        "id": 28,
        "hotel_id": 26,
        "tipo_id": 21,
        "num_habitacion": 128,

      },
      {
        "id": 29,
        "hotel_id": 27,
        "tipo_id": 22,
        "num_habitacion": 129,

      },
      {
        "id": 30,
        "hotel_id": 28,
        "tipo_id": 24,
        "num_habitacion": 130,

      },
      {
        "id": 31,
        "hotel_id": 1,
        "tipo_id": 5,
        "num_habitacion": 131,

      },
      {
        "id": 32,
        "hotel_id": 2,
        "tipo_id": 25,
        "num_habitacion": 132,

      },
      {
        "id": 33,
        "hotel_id": 3,
        "tipo_id": 13,
        "num_habitacion": 133,

      },
      {
        "id": 34,
        "hotel_id": 4,
        "tipo_id": 26,
        "num_habitacion": 134,

      },
      {
        "id": 35,
        "hotel_id": 5,
        "tipo_id": 12,
        "num_habitacion": 135,

      },
      {
        "id": 36,
        "hotel_id": 6,
        "tipo_id": 8,
        "num_habitacion": 136,

      },
      {
        "id": 37,
        "hotel_id": 7,
        "tipo_id": 10,
        "num_habitacion": 137,

      },
      {
        "id": 38,
        "hotel_id": 8,
        "tipo_id": 27,
        "num_habitacion": 138,

      },
      {
        "id": 39,
        "hotel_id": 9,
        "tipo_id": 28,
        "num_habitacion": 139,

      },
      {
        "id": 40,
        "hotel_id": 10,
        "tipo_id": 11,
        "num_habitacion": 140,

      },
      {
        "id": 41,
        "hotel_id": 11,
        "tipo_id": 25,
        "num_habitacion": 141,

      },
      {
        "id": 42,
        "hotel_id": 12,
        "tipo_id": 3,
        "num_habitacion": 142,

      },
      {
        "id": 43,
        "hotel_id": 13,
        "tipo_id": 14,
        "num_habitacion": 143,

      },
      {
        "id": 44,
        "hotel_id": 14,
        "tipo_id": 9,
        "num_habitacion": 144,

      },
      {
        "id": 45,
        "hotel_id": 15,
        "tipo_id": 23,
        "num_habitacion": 145,

      },
      {
        "id": 46,
        "hotel_id": 16,
        "tipo_id": 11,
        "num_habitacion": 146,

      },
      {
        "id": 47,
        "hotel_id": 17,
        "tipo_id": 20,
        "num_habitacion": 147,

      },
      {
        "id": 48,
        "hotel_id": 18,
        "tipo_id": 15,
        "num_habitacion": 148,

      },
      {
        "id": 49,
        "hotel_id": 19,
        "tipo_id": 4,
        "num_habitacion": 149,

      },
      {
        "id": 50,
        "hotel_id": 20,
        "tipo_id": 2,
        "num_habitacion": 150,

      },
      {
        "id": 51,
        "hotel_id": 21,
        "tipo_id": 16,
        "num_habitacion": 151,

      },
      {
        "id": 52,
        "hotel_id": 22,
        "tipo_id": 17,
        "num_habitacion": 152,

      },
      {
        "id": 53,
        "hotel_id": 23,
        "tipo_id": 21,
        "num_habitacion": 153,

      },
      {
        "id": 54,
        "hotel_id": 24,
        "tipo_id": 17,
        "num_habitacion": 154,

      },
      {
        "id": 55,
        "hotel_id": 25,
        "tipo_id": 1,
        "num_habitacion": 155,

      },
      {
        "id": 56,
        "hotel_id": 26,
        "tipo_id": 27,
        "num_habitacion": 156,

      },
      {
        "id": 57,
        "hotel_id": 27,
        "tipo_id": 3,
        "num_habitacion": 157,

      },
      {
        "id": 58,
        "hotel_id": 28,
        "tipo_id": 14,
        "num_habitacion": 158,

      },
      {
        "id": 59,
        "hotel_id": 1,
        "tipo_id": 23,
        "num_habitacion": 159,

      },
      {
        "id": 60,
        "hotel_id": 2,
        "tipo_id": 13,
        "num_habitacion": 160,

      },
      {
        "id": 61,
        "hotel_id": 3,
        "tipo_id": 19,
        "num_habitacion": 161,

      },
      {
        "id": 62,
        "hotel_id": 4,
        "tipo_id": 28,
        "num_habitacion": 162,

      },
      {
        "id": 63,
        "hotel_id": 5,
        "tipo_id": 25,
        "num_habitacion": 163,

      },
      {
        "id": 64,
        "hotel_id": 6,
        "tipo_id": 16,
        "num_habitacion": 164,

      },
      {
        "id": 65,
        "hotel_id": 7,
        "tipo_id": 28,
        "num_habitacion": 165,

      }], {})
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Habitacions', null, {});
  }
};