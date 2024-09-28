'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Atraccions', [
      {
        "id": 1,
        "nombre": "Catedral de Lima",
        "precio": 30,
        "descripcion": "Imponente catedral colonial en el corazón de Lima",
        "valoracion": 4.5,
        "direccion": "Plaza Mayor, Cercado de Lima",
        "horario": "Lunes a Sábado: 9:00 - 17:00, Domingo: 13:00 - 17:00",
        "provincia_id": 1,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpAb72mcUqP3W2PpaCO_EjkXmCbBOM1M0kRQ&s"
      },
      {
        "id": 2,
        "nombre": "Fortaleza del Real Felipe",
        "precio": 25,
        "descripcion": "Histórica fortaleza militar del siglo XVIII",
        "valoracion": 4.3,
        "direccion": "Plaza Independencia s/n, Callao",
        "horario": "Martes a Domingo: 9:00 - 16:00",
        "provincia_id": 69,
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/9/91/Interiores_de_la_fortaleza_del_Real_Felipe.jpg"
      },
      {
        "id": 3,
        "nombre": "Huaca Pucllana",
        "precio": 15,
        "descripcion": "Sitio arqueológico pre-inca en medio de Miraflores",
        "valoracion": 4.4,
        "direccion": "Calle General Borgoño cuadra 8, Miraflores",
        "horario": "Miércoles a Lunes: 9:00 - 17:00",
        "provincia_id": 1,
        "imagen" : "https://www.inkanmilkyway.com/wp-content/uploads/tour-visita-guiada-huaca-pucllana-lima_2-1.webp"
      },
      {
        "id": 4,
        "nombre": "Playa Tuquillo",
        "precio": 0,
        "descripcion": "Hermosa playa de aguas cristalinas",
        "valoracion": 4.7,
        "direccion": "Huarmey, Áncash",
        "horario": "Acceso libre las 24 horas",
        "provincia_id": 21,
        "imagen": "https://www.plataforma10.com.pe/viajes/wp-content/uploads/2023/04/foto-portada-2.webp"
      },
      {
        "id": 5,
        "nombre": "Chavín de Huántar",
        "precio": 20,
        "descripcion": "Impresionante complejo arqueológico pre-inca",
        "valoracion": 4.6,
        "direccion": "Chavín de Huántar, Áncash",
        "horario": "Martes a Domingo: 9:00 - 17:00",
        "provincia_id": 20,
        "imagen": "https://www.chullostravelperu.com/wp-content/uploads/2023/02/interna-monumento-arqueologico-de-chavin.jpg"
      },
      {
        "id": 6,
        "nombre": "Mirador de Abancay",
        "precio": 0,
        "descripcion": "Vista panorámica de la ciudad y el valle",
        "valoracion": 4.2,
        "direccion": "Cerro Quisapata, Abancay",
        "horario": "Acceso libre las 24 horas",
        "provincia_id": 31,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQInl7drbDq9pFOOpcDFOF4WcL9wuK0dGdrRg&s"
      },
      {
        "id": 7,
        "nombre": "Monasterio de Santa Catalina",
        "precio": 40,
        "descripcion": "Impresionante ciudad dentro de la ciudad de Arequipa",
        "valoracion": 4.8,
        "direccion": "Santa Catalina 301, Arequipa",
        "horario": "Lunes a Domingo: 9:00 - 17:00",
        "provincia_id": 41,
        "imagen" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj8_MFWJygAhe_CEKY6PVwT0NG--hyCESN7Q&s"
      },
      {
        "id": 8,
        "nombre": "Cañón del Colca",
        "precio": 70,
        "descripcion": "Uno de los cañones más profundos del mundo",
        "valoracion": 4.9,
        "direccion": "Valle del Colca, Caylloma",
        "horario": "Visitas guiadas: 8:00 - 17:00",
        "provincia_id": 45,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzLwvI5-KXXSPLyKje1QMUWb6x0GwANgpF6g&s"
      },
      {
        "id": 9,
        "nombre": "Complejo Arqueológico Wari",
        "precio": 10,
        "descripcion": "Antigua capital del imperio Wari",
        "valoracion": 4.3,
        "direccion": "Quinua, Ayacucho",
        "horario": "Lunes a Domingo: 9:00 - 17:00",
        "provincia_id": 48,
        "imagen": "https://www.chullostravelperu.com/wp-content/uploads/2023/03/Complejo-Arqueologico-Wari.jpg"
      },
      {
        "id": 10,
        "nombre": "Baños del Inca",
        "precio": 15,
        "descripcion": "Famosos baños termales de origen inca",
        "valoracion": 4.4,
        "direccion": "Baños del Inca, Cajamarca",
        "horario": "Lunes a Domingo: 5:00 - 20:00",
        "provincia_id": 59,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9qgPtH0OM3Chrqg1i_MiCO0-ia7B0DIvEKw&s"
      },
      {
        "id": 11,
        "nombre": "Machu Picchu",
        "precio": 152,
        "descripcion": "Icónica ciudad inca en las alturas de los Andes",
        "valoracion": 4.9,
        "direccion": "Machu Picchu, Urubamba",
        "horario": "Lunes a Domingo: 6:00 - 17:30",
        "provincia_id": 80,
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Machu_Picchu%2C_Peru_%282018%29.jpg"

      },
      {
        "id": 12,
        "nombre": "Sacsayhuamán",
        "precio": 70,
        "descripcion": "Impresionante fortaleza inca con enormes bloques de piedra",
        "valoracion": 4.7,
        "direccion": "Cusco",
        "horario": "Lunes a Domingo: 7:00 - 18:00",
        "provincia_id": 70,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRgJnmbfFL2gRXF6Qql-jfgGnvmvMCVBFSsA&s"
      },
      {
        "id": 13,
        "nombre": "Complejo Arqueológico de Kotosh",
        "precio": 5,
        "descripcion": "Antiguo templo con las famosas 'Manos Cruzadas'",
        "valoracion": 4.2,
        "direccion": "Carretera Central Km. 5, Huánuco",
        "horario": "Lunes a Domingo: 9:00 - 17:00",
        "provincia_id": 87,
        "imagen" : "https://upload.wikimedia.org/wikipedia/commons/9/9e/Templo_Blanco_de_Kotosh_amb_l%27edifici_del_Templo_de_las_Manos_darrera03.jpg"
      },
      {
        "id": 14,
        "nombre": "Reserva Nacional de Paracas",
        "precio": 10,
        "descripcion": "Hermosa reserva costera con playas y fauna marina",
        "valoracion": 4.6,
        "direccion": "Paracas, Ica",
        "horario": "Lunes a Domingo: 8:00 - 17:00",
        "provincia_id": 98,
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Paracas_National_Reserve._Ica%2C_Peru.jpg/1200px-Paracas_National_Reserve._Ica%2C_Peru.jpg"
      },
      {
        "id": 15,
        "nombre": "Líneas de Nazca",
        "precio": 80,
        "descripcion": "Misteriosos geoglifos en el desierto",
        "valoracion": 4.8,
        "direccion": "Nazca, Ica",
        "horario": "Vuelos: 7:00 - 16:00",
        "provincia_id": 100,
        "imagen": "https://picchutravel.com/wp-content/uploads/las-lineas-de-nazca.jpg"
      },
      {
        "id": 16,
        "nombre": "Santuario Histórico de Chacamarca",
        "precio": 5,
        "descripcion": "Sitio histórico de la Batalla de Junín",
        "valoracion": 4.1,
        "direccion": "Carretera Central Km. 55, Junín",
        "horario": "Lunes a Domingo: 8:00 - 17:00",
        "provincia_id": 103,
        "imagen": "https://www.bitacorarevista.com/web/wp-content/uploads/Foto_2-5-1200x675.jpg"
      },
      {
        "id": 17,
        "nombre": "Chan Chan",
        "precio": 20,
        "descripcion": "La ciudad de barro más grande de América",
        "valoracion": 4.5,
        "direccion": "Carretera Huanchaco, Trujillo",
        "horario": "Lunes a Domingo: 9:00 - 16:00",
        "provincia_id": 110,
        "imagen": "https://www.peruhop.com/wp-content/uploads/Mascotte-of-Chan-Chan-Small.jpg"
      },
      {
        "id": 18,
        "nombre": "Huacas del Sol y de la Luna",
        "precio": 15,
        "descripcion": "Impresionantes pirámides de la cultura Moche",
        "valoracion": 4.6,
        "direccion": "Campiña de Moche, Trujillo",
        "horario": "Lunes a Domingo: 9:00 - 16:00",
        "provincia_id": 110,
        "imagen": "https://portal.andina.pe/EDPfotografia3/Thumbnail/2019/05/19/000587118W.jpg"
      },
      {
        "id": 19,
        "nombre": "Reserva Nacional de Lachay",
        "precio": 10,
        "descripcion": "Oasis de niebla en el desierto costero",
        "valoracion": 4.3,
        "direccion": "Km. 105 Panamericana Norte, Huaura",
        "horario": "Lunes a Domingo: 8:00 - 17:00",
        "provincia_id": 8,
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Lomas_Lachay_1.jpg" 
      },
      {
        "id": 20,
        "nombre": "Museo Tumbas Reales de Sipán",
        "precio": 30,
        "descripcion": "Fascinante museo con tesoros de la cultura Moche",
        "valoracion": 4.8,
        "direccion": "Av. Juan Pablo Vizcardo y Guzmán, Lambayeque",
        "horario": "Martes a Domingo: 9:00 - 17:00",
        "provincia_id": 124,
        "imagen" : "https://upload.wikimedia.org/wikipedia/commons/3/31/Tumbas_Reales_de_Sip%C3%A1n_Museum_01.jpg"
      },
      {
        "id": 21,
        "nombre": "Reserva Nacional Pacaya-Samiria",
        "precio": 100,
        "descripcion": "Vasta reserva de selva tropical amazónica",
        "valoracion": 4.7,
        "direccion": "Loreto",
        "horario": "Tours organizados: horarios variables",
        "provincia_id": 125,
        "imagen" : "https://upload.wikimedia.org/wikipedia/commons/4/49/Aldea_del_Mara%C3%B1on_-_panoramio.jpg"
      },
      {
        "id": 22,
        "nombre": "Lago Sandoval",
        "precio": 50,
        "descripcion": "Hermoso lago en medio de la selva amazónica",
        "valoracion": 4.6,
        "direccion": "Reserva Nacional Tambopata, Madre de Dios",
        "horario": "Tours organizados: 5:00 - 18:00",
        "provincia_id": 133,
        "imagen" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ97WUadPjtv4FnOToiLNfbvGRwFQBKzoQOhw&s"
      },
      {
        "id": 23,
        "nombre": "Cataratas de Gocta",
        "precio": 30,
        "descripcion": "Una de las cataratas más altas del mundo",
        "valoracion": 4.8,
        "direccion": "Cocachimba, Chachapoyas",
        "horario": "Lunes a Domingo: 8:00 - 17:00",
        "provincia_id": 183,
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/1/16/Gocta.jpg"
      },
      {
        "id": 24,
        "nombre": "Kuelap",
        "precio": 40,
        "descripcion": "Impresionante fortaleza de la cultura Chachapoyas",
        "valoracion": 4.7,
        "direccion": "Luya, Amazonas",
        "horario": "Lunes a Domingo: 8:00 - 17:00",
        "provincia_id": 187,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGYz8oM0AhkEp_JSkxW9jfiPJ80ijmFpz0QA&s"
      },
      {
        "id": 25,
        "nombre": "Playa Punta Sal",
        "precio": 0,
        "descripcion": "Hermosa playa de aguas cálidas",
        "valoracion": 4.5,
        "direccion": "Punta Sal, Tumbes",
        "horario": "Acceso libre las 24 horas",
        "provincia_id": 175,
        "imagen": "https://www.turismoenperu.com/imagi/playa-punta-sal-00.jpg"
      },
      {
        "id": 26,
        "nombre": "Laguna de Yarinacocha",
        "precio": 20,
        "descripcion": "Pintoresca laguna rodeada de comunidades indígenas",
        "valoracion": 4.3,
        "direccion": "Yarinacocha, Coronel Portillo",
        "horario": "Tours organizados: 8:00 - 17:00",
        "provincia_id": 180,
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Laguna_de_Yarinacocha_GCA.jpg"
    
      },
      {
        "id": 27,
        "nombre": "Sarcófagos de Karajía",
        "precio": 25,
        "descripcion": "Enigmáticos sarcófagos de la cultura Chachapoyas",
        "valoracion": 4.4,
        "direccion": "Luya, Amazonas",
        "horario": "Lunes a Domingo: 8:00 - 17:00",
        "provincia_id": 187,
        "imagen": "https://www.chullostravelperu.com/wp-content/uploads/2023/02/karajia-sarcofagos.jpg"
      },
      {
        "id": 28,
        "nombre": "Bosque de Piedras de Huayllay",
        "precio": 10,
        "descripcion": "Fascinantes formaciones rocosas naturales",
        "valoracion": 4.5,
        "direccion": "Huayllay, Pasco",
        "horario": "Lunes a Domingo: 8:00 - 17:00",
        "provincia_id": 140,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUjVe3OLOwgscN_itiZrvOaKBfwcltyDnkdw&s"
      },
      {
        "id": 29,
        "nombre": "Complejo Arqueológico El Brujo",
        "precio": 20,
        "descripcion": "Sitio arqueológico con la famosa Señora de Cao",
        "valoracion": 4.6,
        "direccion": "Magdalena de Cao, Ascope",
        "horario": "Lunes a Domingo: 9:00 - 17:00",
        "provincia_id": 111,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt7aS0QsSxrdVsXgX1IDbjdkKiqXThJxSPIg&s"
      },
      {
        "id": 30,
        "nombre": "Catarata de Ahuashiyacu",
        "precio": 10,
        "descripcion": "Hermosa catarata en medio de la selva",
        "valoracion": 4.3,
        "direccion": "Banda de Shilcayo, San Martín",
        "horario": "Lunes a Domingo: 8:00 - 17:00",
        "provincia_id": 165,
        "imagen" : "https://upload.wikimedia.org/wikipedia/commons/c/cd/Cataras_de_Ahuashiyacu.jpg"
      },
      {
        "id": 31,
        "nombre": "Parque Nacional Huascarán",
        "precio": 30,
        "descripcion": "Majestuosa cordillera con nevados y lagunas",
        "valoracion": 4.9,
        "direccion": "Huaraz, Áncash",
        "horario": "Lunes a Domingo: 8:00 - 17:00",
        "provincia_id": 11,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ2hwLsyxMqcPVXoeMxbjDZxTZwghNExzwqw&s"
      },
      {
        "id": 32,
        "nombre": "Choquequirao",
        "precio": 60,
        "descripcion": "Impresionante ciudad inca menos conocida que Machu Picchu",
        "valoracion": 4.8,
        "direccion": "Cachora, Apurímac",
        "horario": "Lunes a Viernes: 8:00 - 15:00",
        "provincia_id": 31,
         "imagen": "https://avatars.mds.yandex.net/i?id=112198bb5cfea9ca0a8476d4c2d89f644ee41cec-10353822-images-thumbs&n=13"
      },
      {
        "id": 33,
        "nombre": "Choquequirao",
        "precio": 60,
        "descripcion": "Impresionante ciudad inca menos conocida que Machu Picchu",
        "valoracion": 4.8,
        "direccion": "Cachora, Apurímac",
        "horario": "Lunes a Domingo: 8:00 - 17:00",
        "provincia_id": 31,
        "imagen": "https://avatars.mds.yandex.net/i?id=112198bb5cfea9ca0a8476d4c2d89f644ee41cec-10353822-images-thumbs&n=13"
      },
      {
        "id": 34,
        "nombre": "Sillustani",
        "precio": 15,
        "descripcion": "Impresionante complejo funerario pre-inca e inca",
        "valoracion": 4.4,
        "direccion": "Puno",
        "horario": "Lunes a Domingo: 8:00 - 17:00",
        "provincia_id": 152,
        "imagen": "https://avatars.mds.yandex.net/i?id=a4bda3db8d9dbcae944b6bf6b7f1267e63022fe7-7011746-images-thumbs&n=13"
      },
      {
        "id": 35,
        "nombre": "Islas Flotantes de los Uros",
        "precio": 40,
        "descripcion": "Fascinantes islas artificiales hechas de totora",
        "valoracion": 4.6,
        "direccion": "Lago Titicaca, Puno",
        "horario": "Tours organizados: 7:00 - 16:00",
        "provincia_id": 152,
        "imagen": "https://avatars.mds.yandex.net/i?id=fcca81f1a501fc5b9e9d1f766025f30751f8376b-4887637-images-thumbs&n=13"
      },
      {
        "id": 36,
        "nombre": "Cañón de Cotahuasi",
        "precio": 50,
        "descripcion": "Uno de los cañones más profundos del mundo",
        "valoracion": 4.7,
        "direccion": "La Unión, Arequipa",
        "horario": "Tours organizados: horarios variables",
        "provincia_id": 47,
        "imagen": "https://avatars.mds.yandex.net/i?id=1dd1a01ca180b0e7482bfe722be8c1fe412c21ce-5029416-images-thumbs&n=13"
      },
      {
        "id": 37,
        "nombre": "Kuélap",
        "precio": 40,
        "descripcion": "Impresionante fortaleza de la cultura Chachapoyas",
        "valoracion": 4.8,
        "direccion": "Luya, Amazonas",
        "horario": "Lunes a Domingo: 8:00 - 17:00",
        "provincia_id": 187,
        "imagen": "https://avatars.mds.yandex.net/i?id=e269ac0ef554c7d746f9fca9ddb8286fbb9b2d0f-10310276-images-thumbs&n=13"
      },
      {
        "id": 38,
        "nombre": "Reserva Nacional de Tambopata",
        "precio": 80,
        "descripcion": "Exuberante reserva de selva tropical con gran biodiversidad",
        "valoracion": 4.9,
        "direccion": "Madre de Dios",
        "horario": "Tours organizados: horarios variables",
        "provincia_id": 134,
        "imagen": "https://avatars.mds.yandex.net/i?id=b86f8642e458ae5bda5f1c18c9a295fea0f64bfe-7674757-images-thumbs&n=13"
      },
      {
        "id": 39,
        "nombre": "Playas de Máncora",
        "precio": 0,
        "descripcion": "Famosas playas de aguas cálidas y ambiente festivo",
        "valoracion": 4.5,
        "direccion": "Máncora, Piura",
        "horario": "Acceso libre las 24 horas",
        "provincia_id": 144,
        "imagen": "https://avatars.mds.yandex.net/i?id=bda6f95bfb00587f0bfda061944b2c139c072d77-7731990-images-thumbs&n=13"
      },
      {
        "id": 40,
        "nombre": "Bosque de Piedras de Huayllay",
        "precio": 10,
        "descripcion": "Fascinantes formaciones rocosas naturales",
        "valoracion": 4.6,
        "direccion": "Huayllay, Pasco",
        "horario": "Lunes a Domingo: 8:00 - 17:00",
        "provincia_id": 140,
        "imagen": "https://avatars.mds.yandex.net/i?id=2a00000179fef267aece7f387b0966bfe74c-3924502-images-thumbs&n=13"
      },
      {
        "id": 41,
        "nombre": "Complejo Arqueológico de Sechín",
        "precio": 15,
        "descripcion": "Antiguo centro ceremonial con impresionantes relieves",
        "valoracion": 4.3,
        "direccion": "Casma, Áncash",
        "horario": "Martes a Domingo: 9:00 - 17:00",
        "provincia_id": 18,
        "imagen": "https://portal.andina.pe/EDPFotografia3/thumbnail/2016/06/17/000362020M.jpg"
      },
      {
        "id": 42,
        "nombre": "Cañón del Sonche",
        "precio": 20,
        "descripcion": "Impresionante cañón con vistas panorámicas",
        "valoracion": 4.5,
        "direccion": "Chachapoyas, Amazonas",
        "horario": "Lunes a Domingo: 8:00 - 17:00",
        "provincia_id": 183,
        "imagen": "https://avatars.mds.yandex.net/i?id=3ec734666b43809ca7450caeb75768fe390d3606-8386641-images-thumbs&n=13"
      },
      {
        "id": 43,
        "nombre": "Complejo Arqueológico de Túcume",
        "precio": 20,
        "descripcion": "Impresionante complejo de pirámides de adobe",
        "valoracion": 4.4,
        "direccion": "Túcume, Lambayeque",
        "horario": "Lunes a Domingo: 8:00 - 17:00",
        "provincia_id": 124,
        "imagen": "https://avatars.mds.yandex.net/i?id=ce36d6756cb997de262ce2df5ad991e8-5676909-images-thumbs&n=13"
      },
      {
        "id": 44,
        "nombre": "Reserva Nacional Salinas y Aguada Blanca",
        "precio": 30,
        "descripcion": "Reserva con volcanes, vicuñas y flamencos",
        "valoracion": 4.6,
        "direccion": "Arequipa",
        "horario": "Lunes a Domingo: 8:00 - 17:00",
        "provincia_id": 41,
        "imagen": "https://avatars.mds.yandex.net/i?id=7b1663dd51fa061349a3aeea55ca12191818a62b-5283999-images-thumbs&n=13"
      },      
      {
        "id": 45,
        "nombre": "Complejo Arqueológico de Caral",
        "precio": 25,
        "descripcion": "La civilización más antigua de América",
        "valoracion": 4.7,
        "direccion": "Supe, Barranca",
        "horario": "Martes a Domingo: 9:00 - 17:00",
        "provincia_id": 2,
        "imagen": "https://avatars.mds.yandex.net/i?id=9d36ea4ec5839b18eb7be27ffaf19df6bcd6e489-9845623-images-thumbs&n=13"
      },
      {
        "id": 46,
        "nombre": "Laguna de Los Cóndores",
        "precio": 50,
        "descripcion": "Sitio arqueológico y laguna de gran belleza",
        "valoracion": 4.8,
        "direccion": "Leymebamba, Amazonas",
        "horario": "Tours organizados: horarios variables",
        "provincia_id": 183,
        "imagen": "https://avatars.mds.yandex.net/i?id=8d88f9ee950086c5fa1b531158d42c1c35d18657-4023814-images-thumbs&n=13"
      },
      {
        "id": 47,
        "nombre": "Museo Santuarios Andinos (Momia Juanita)",
        "precio": 30,
        "descripcion": "Museo que alberga a la famosa momia inca Juanita",
        "valoracion": 4.5,
        "direccion": "La Merced 110, Arequipa",
        "horario": "Lunes a Sábado: 9:00 - 18:00, Domingo: 9:00 - 15:00",
        "provincia_id": 41,
        "imagen": "https://blog.redbus.pe/wp-content/uploads/2018/05/Museo-Santuarios-Andinos-Momia-Juanita.jpg"
      },
      {
        "id": 48,
        "nombre": "Parque Nacional del Manu",
        "precio": 150,
        "descripcion": "Reserva de biosfera con increíble biodiversidad",
        "valoracion": 4.9,
        "direccion": "Madre de Dios y Cusco",
        "horario": "Tours organizados: horarios variables",
        "provincia_id": 135,
        "imagen": "https://avatars.mds.yandex.net/i?id=e3de22f0d953963e78d9cc62a703e80049118bc6-5870336-images-thumbs&n=13"
      },
      {
        "id": 49,
        "nombre": "Chavín de Huántar",
        "precio": 20,
        "descripcion": "Importante centro ceremonial de la cultura Chavín",
        "valoracion": 4.6,
        "direccion": "Huari, Áncash",
        "horario": "Lunes a Domingo: 9:00 - 17:00",
        "provincia_id": 20,
        "imagen": "https://avatars.mds.yandex.net/i?id=f4f4d5c9a4008190c621ac7a4eacd5fd0c848e6f-5247042-images-thumbs&n=13"
      },
      {
        "id": 50,
        "nombre": "Huaca de la Luna",
        "precio": 20,
        "descripcion": "Impresionante templo de la cultura Moche",
        "valoracion": 4.7,
        "direccion": "Moche, Trujillo",
        "horario": "Lunes a Domingo: 9:00 - 16:00",
        "provincia_id": 110,
        "imagen": "https://avatars.mds.yandex.net/i?id=ea393e49de047926b0e0eee5518c78230800fa7b-4398781-images-thumbs&n=13"
      },
      {
        "id": 51,
        "nombre": "Parque Nacional Cerros de Amotape",
        "precio": 30,
        "descripcion": "Reserva de bosque seco ecuatorial",
        "valoracion": 4.4,
        "direccion": "Tumbes",
        "horario": "Lunes a Domingo: 8:00 - 17:00",
        "provincia_id": 175,
        "imagen": "https://avatars.mds.yandex.net/i?id=abee36b5cb05bd5d680db9d8f03a50608fd4dccf6105783e-4937949-images-thumbs&n=13"
      },
      {
        "id": 52,
        "nombre": "Catedral de Puno",
        "precio": 10,
        "descripcion": "Imponente catedral barroca del siglo XVIII",
        "valoracion": 4.3,
        "direccion": "Jr. Lima 707, Puno",
        "horario": "Lunes a Sábado: 8:00 - 12:00 y 15:00 - 18:00",
        "provincia_id": 152,
        "imagen": "https://avatars.mds.yandex.net/i?id=616f8a03a712d7d847d52da07ab97a95-4238070-images-thumbs&n=13"
      },
      {
        "id": 53,
        "nombre": "Laguna Parón",
        "precio": 30,
        "descripcion": "Hermosa laguna de aguas turquesas en los Andes",
        "valoracion": 4.8,
        "direccion": "Huaylas, Áncash",
        "horario": "Lunes a Domingo: 7:00 - 17:00",
        "provincia_id": 22,
        "imagen": "https://avatars.mds.yandex.net/i?id=38e6da72dafe8b79a463babe2d76ca54112b6d57-9873353-images-thumbs&n=13"
      },
      {
        "id": 54,
        "nombre": "Baños Termales de Churín",
        "precio": 20,
        "descripcion": "Famosos baños termales con propiedades curativas",
        "valoracion": 4.2,
        "direccion": "Churín, Lima",
        "horario": "Lunes a Domingo: 6:00 - 22:00",
        "provincia_id": 9,
        "imagen": "https://avatars.mds.yandex.net/i?id=88be54090ba978c5c65d36a12f71f54d3164672f-10071204-images-thumbs&n=13"
      },
      {
        "id": 55,
        "nombre": "Complejo Arqueológico de Marcahuamachuco",
        "precio": 15,
        "descripcion": "Impresionante ciudadela pre-inca",
        "valoracion": 4.5,
        "direccion": "Huamachuco, La Libertad",
        "horario": "Lunes a Domingo: 9:00 - 17:00",
        "provincia_id": 119,
        "imagen": "https://avatars.mds.yandex.net/i?id=b77297bd3f0982136e35b68cff7960a5f5bbc1b3-3797439-images-thumbs&n=13"
      },
      {
        "id": 56,
        "nombre": "Mirador de los Apus",
        "precio": 5,
        "descripcion": "Mirador con vistas panorámicas de Abancay y alrededores",
        "valoracion": 4.3,
        "direccion": "Abancay, Apurímac",
        "horario": "Lunes a Domingo: 6:00 - 18:00",
        "provincia_id": 31,
        "imagen": "https://avatars.mds.yandex.net/i?id=bd44f5167eb1a6dd45b5775876a59727-4524739-images-thumbs&n=13"
      },
      {
        "id": 57,
        "nombre": "Santuario Nacional de Huayllay",
        "precio": 20,
        "descripcion": "Bosque de piedras con formaciones rocosas únicas",
        "valoracion": 4.6,
        "direccion": "Huayllay, Pasco",
        "horario": "Lunes a Domingo: 8:00 - 17:00",
        "provincia_id": 140,
        "imagen": "https://avatars.mds.yandex.net/i?id=c6c9b7391aaadf85efae0c511a4aa73e6555a8af-7547218-images-thumbs&n=13"
      },
      {
        "id": 58,
        "nombre": "Catarata de Gocta",
        "precio": 30,
        "descripcion": "Una de las cataratas más altas del mundo",
        "valoracion": 4.8,
        "direccion": "Chachapoyas, Amazonas",
        "horario": "Lunes a Domingo: 8:00 - 17:00",
        "provincia_id": 183,
        "imagen": "https://avatars.mds.yandex.net/i?id=39be6c6e1b21428eea625c323278892d420e096c-8154230-images-thumbs&n=13"
      },
      {
        "id": 59,
        "nombre": "Complejo Arqueológico de Huánuco Pampa",
        "precio": 10,
        "descripcion": "Centro administrativo inca bien conservado",
        "valoracion": 4.4,
        "direccion": "La Unión, Huánuco",
        "horario": "Lunes a Domingo: 9:00 - 17:00",
        "provincia_id": 87,
        "imagen": "https://avatars.mds.yandex.net/i?id=db15fd7a1a83cd5abe139622e81414222276e78e-10595433-images-thumbs&n=13"
      },
      {
        "id": 60,
        "nombre": "Reserva Nacional de Junín",
        "precio": 20,
        "descripcion": "Importante área de conservación de aves acuáticas",
        "valoracion": 4.5,
        "direccion": "Junín",
        "horario": "Lunes a Domingo: 8:00 - 17:00",
        "provincia_id": 103,
        "imagen": "https://avatars.mds.yandex.net/i?id=f3b2c39de263b2177b2039d4000749834aa519b6-9095672-images-thumbs&n=13"
      },
      {
        "id": 61,
        "nombre": "Templo de Kotosh",
        "precio": 10,
        "descripcion": "Antiguo templo con las famosas 'Manos Cruzadas'",
        "valoracion": 4.3,
        "direccion": "Huánuco",
        "horario": "Lunes a Domingo: 9:00 - 17:00",
        "provincia_id": 87,
        "imagen": "https://avatars.mds.yandex.net/i?id=30f00112b96bc3941dda6eafbea5d4d35794ebe4-6392895-images-thumbs&n=13"
      },
      {
        "id": 62,
        "nombre": "Nevado Huascarán",
        "precio": 100,
        "descripcion": "La montaña más alta del Perú",
        "valoracion": 4.9,
        "direccion": "Parque Nacional Huascarán, Áncash",
        "horario": "Tours organizados: horarios variables",
        "provincia_id": 11,
        "imagen": "https://avatars.mds.yandex.net/i?id=0d692263e8a61947d494ecfed987c1d6da82da78-12574745-images-thumbs&n=13"
      },
      {
        "id": 63,
        "nombre": "Monasterio de Santa Catalina",
        "precio": 40,
        "descripcion": "Convento histórico en Arequipa",
        "valoracion": 4.8,
        "direccion": "Santa Catalina 301, Arequipa",
        "horario": "Lunes a Domingo: 9:00 - 17:00",
        "provincia_id": 41,
        "imagen": "https://avatars.mds.yandex.net/i?id=fb89afaac1d4fee98412ed71e4884ed10ff03d0f-8287477-images-thumbs&n=13"
      },
      {
        "id": 64,
        "nombre": "Parque Nacional Huascarán",
        "precio": 60,
        "descripcion": "Patrimonio Natural de la Humanidad por la UNESCO",
        "valoracion": 4.9,
        "direccion": "Yungay, Áncash",
        "horario": "Lunes a Domingo: 6:00 - 18:00",
        "provincia_id": 21,
        "imagen": "https://avatars.mds.yandex.net/i?id=5f286dd02e300a64f2ab8024525851ee03ea2732-12491025-images-thumbs&n=13"
      }      
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Atraccions', null, {});
  }
};
