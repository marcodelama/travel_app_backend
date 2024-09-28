'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Hotels', [
      {
        "id": 1,
        "nombre": "Grand Hotel Lima",
        "direccion": "Av. Javier Prado Este 2480",
        "provincia_id": 1,
        "valoracion": 5,
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Hotel_Bolivar_21_1.jpg",
        "descripcion": "Lugar estupendo para alojarse en el barrio Centro histórico de Lima, a unos 3 km del Parque Pedro Ruiz Gallo"
      },
      {
        "id": 2,
        "nombre": "Miraflores Park Hotel",
        "direccion": "Av. Malecón de la Reserva 1035",
        "provincia_id": 1,
        "valoracion": 5,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/62/1f/2f/hotel-exterior.jpg?w=700&h=-1&s=1",
        "descripcion": "Este moderno hotel de lujo está a 2 km del centro comercial Larcomar, ubicado sobre un acantilado."
      },
      {
        "id": 3,
        "nombre": "Hotel Barranca Bay",
        "direccion": "Jr. Gálvez 267",
        "provincia_id": 2,
        "valoracion": 3,
        "imagen": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/332711650.jpg?k=30a78a4b4afbcb56f1381159b51ce13cdd6623ebfc84a03446b6272992d2bfb0&o=&hp=1",
        "descripcion": "El Hotel Barranca Beach es un establecimiento que ofrece los servicios de alojamiento, desayuno, almuerzos y cenas, está ubicado en la Playa Miraflores 645"

      },
      {
        "id": 4,
        "nombre": "Cajatambo Lodge",
        "direccion": "Calle Bolognesi 123",
        "provincia_id": 3,
        "valoracion": 2,
        "imagen": "https://imgservice.alojamiento.io/webp/500x245/AzRT8xsWDLcQL9frPSuXFfBPP68gnzkfmgGPsxCmnowuVp_VK83QtIkP7Bd-6IIMwiROqhrXk2flqPwC6G3uzLTYgJqrnVhmJ6vEOiH1hUc4Eh80KrJa73EweFEP5p24GPt8yNCsx115PKpoVmsxcss9zxi-99BlcXCK71NGAZQccbT6iGI=?property_id=BC-11565132",
        "descripcion": "Excelente estadía en Cajatambo, super recomendable. Ubicación perfecta porque todo se encuentra muy cerca. El hotel cumple con la comidad"
      },
      {
        "id": 5,
        "nombre": "Canta Valley Resort",
        "direccion": "Av. 28 de Julio 456",
        "provincia_id": 4,
        "valoracion": 4,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/12/c3/73/la-noche-en-tambo-lodge.jpg?w=700&h=-1&s=1",
        "descripcion": "En este mágico lugar podrás disfrutar de la piscina, de vistas maravillosas, fogatas, paseos a caballo y platos de comida exquisitos."
      },
      {
        "id": 6,
        "nombre": "Cañete Beachfront Hotel",
        "direccion": "Malecón San Martín 789",
        "provincia_id": 5,
        "valoracion": 4,
        "imagen": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/419225151.jpg?k=87c345fb7fcd71832acd0b2978d01171850b5a914ab3f75301885073c182f091&o=&hp=1",
        "descripcion": "Es un Hotel amplio con habitaciones limpias y grandes, piscina limpia y lo mejor es su buena comida EXCELENTE y su Pisco Sour."
      },
      {
        "id": 7,
        "nombre": "Huaral Plaza Hotel",
        "direccion": "Jr. Derecha 345",
        "provincia_id": 6,
        "valoracion": 3,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/87/f4/79/hospedaje-alameda-sur.jpg?w=1200&h=-1&s=1",
        "descripcion" : "Hotel muy básico. Las habitaciones son aseadas, cuentan con servicio de TV, internet, ducha con agua caliente y un closet para tus artículos personales"
      },
      {
        "id": 8,
        "nombre": "Huarochirí Mountain Lodge",
        "direccion": "Av. Los Andes 567",
        "provincia_id": 7,
        "valoracion": 3,
        "imagen": "https://media-cdn.tripadvisor.com/media/photo-s/07/1c/8d/1e/hotel-turistico-el-rodeo.jpg",
        "descripcion" : "Un viaje a través de la historia antigua, cultura, magníficos paisajes de Cusco, el Valle Sagrado de los Incas y finalizando tu aventura en el majestuoso Machu Picchu-"
      },
      {
        "id": 9,
        "nombre": "Huaura Sunset Hotel",
        "direccion": "Malecón Roca 234",
        "provincia_id": 8,
        "valoracion": 4,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/61/42/b5/la-piscina.jpg?w=700&h=-1&s=1",
        "descripcion": "Sunset se encuentra en Chancay, a 2,4 km de Playa Puerto de Chancay, y ofrece alojamiento con jardín, parking privado gratis, terraza y restaurante"
      },
      {
        "id": 10,
        "nombre": "Oyón Termal Hotel",
        "direccion": "Jr. Bolognesi 890",
        "provincia_id": 9,
        "valoracion": 3,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEdnLPRDphkBrEheUVPgRuVg-UUcRVP4PdTg&s",
        "descripcion": "El complejo termal, cuenta con una piscina pública, pozos privados, sauna y baños de barro."
      },
      {
        "id": 11,
        "nombre": "Yauyos Eco Lodge",
        "direccion": "Calle Lima 432",
        "provincia_id": 10,
        "valoracion": 2,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOVCDQvNf_BxuuF8W65xJdb7Si1rkoV88Ztg&s",
        "descripcion": "Yauyos Lodge está sobre una meseta a 15 Mts. sobre el río Cañete , lo que les brinda una excelente vista del paisaje rodeado de árboles y mucha naturaleza"
      },
      {
        "id": 12,
        "nombre": "Huaraz Adventure Hotel",
        "direccion": "Av. Luzuriaga 789",
        "provincia_id": 11,
        "valoracion": 4,
        "imagen": "https://media-cdn.tripadvisor.com/media/photo-s/12/7c/59/25/img-20180329-115933-largejpg.jpg",
        "descripcion": "Huaraz Adventures ofrece la mejor experiencia a nuestros turistas nacionales y extranjeros a lo largo y ancho de los Andes Peruanos."
      },
      {
        "id": 13,
        "nombre": "Aija Comfort Inn",
        "direccion": "Jr. Comercio 234",
        "provincia_id": 12,
        "valoracion": 2,
        "imagen": "https://images.trvl-media.com/lodging/24000000/23100000/23093800/23093777/1fbf1f37_y.jpg?impolicy=resizecrop&rw=402&ra=fit",
        "descripcion": ""
      },
      {
        "id": 14,
        "nombre": "Antonio Raymondi Hotel",
        "direccion": "Calle Grau 567",
        "provincia_id": 13,
        "valoracion": 3,
        "imagen": "https://amyscrypt.com/wp-content/uploads/2018/05/Haunted-Gran-Hotel-Bolivar_-1.jpg"
      },
      {
        "id": 15,
        "nombre": "Asunción Boutique Hotel",
        "direccion": "Av. 28 de Julio 890",
        "provincia_id": 14,
        "valoracion": 4,
        "imagen": "https://amyscrypt.com/wp-content/uploads/2018/05/Haunted-Gran-Hotel-Bolivar_-1.jpg"
      },
      {
        "id": 16,
        "nombre": "Bolognesi Plaza Hotel",
        "direccion": "Jr. Comercio 123",
        "provincia_id": 15,
        "valoracion": 3,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/d9/39/85/foto-4-foto-de-la-recepcion.jpg?w=1200&h=-1&s=1"
      },
      {
        "id": 17,
        "nombre": "Carhuaz Mountain View Hotel",
        "direccion": "Av. La Merced 456",
        "provincia_id": 16,
        "valoracion": 4,
        "imagen" : "https://q-xx.bstatic.com/xdata/images/hotel/840x460/487458847.jpg?k=158daa8e3ec34ce1b47aae8acc41a45a59415c96a1e298daf7211609a9789779&o="
      },
      {
        "id": 18,
        "nombre": "Carlos Fermín Fitzcarrald Lodge",
        "direccion": "Jr. Progreso 789",
        "provincia_id": 17,
        "valoracion": 2,
        "imagen" : "https://images.trvl-media.com/lodging/90000000/89060000/89052600/89052561/8c703ebf_y.jpg?impolicy=resizecrop&rw=402&ra=fit"
      },
      {
        "id": 19,
        "nombre": "Casma Beach Resort",
        "direccion": "Av. Nepeña 234",
        "provincia_id": 18,
        "valoracion": 4,
        "imagen" : "https://static.readytotrip.com/upload/information_system_24/1/6/0/item_1606239/information_items_1606239.jpg"
      },
      {
        "id": 20,
        "nombre": "Corongo Heritage Hotel",
        "direccion": "Calle Real 567",
        "provincia_id": 19,
        "valoracion": 3,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_CCyX9d7wl-JVjXvfMrF18oFNWHuHOnT-Bg&s"
      },
      {
        "id": 21,
        "nombre": "Huari Andean Hotel",
        "direccion": "Jr. San Martín 890",
        "provincia_id": 20,
        "valoracion": 3,
        "imagen": "https://q-xx.bstatic.com/xdata/images/hotel/max400/541136103.jpg?k=6854b532625dc450028853df450ca3e164252c9213718bd56725e797b435b66b"
      },
      {
        "id": 22,
        "nombre": "Huarmey Sunset Hotel",
        "direccion": "Malecón Grau 123",
        "provincia_id": 21,
        "valoracion": 4,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/22/60/20/photo1jpg.jpg?w=300&h=-1&s=1"
      },
      {
        "id": 23,
        "nombre": "Huaylas Valley Lodge",
        "direccion": "Av. Luzuriaga 456",
        "provincia_id": 22,
        "valoracion": 3,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo279t9QHb-WXHYGjmXVjiNRNrVx5A0l8IQQ&s"
      },
      {
        "id": 24,
        "nombre": "Mariscal Luzuriaga Hotel",
        "direccion": "Jr. Comercio 789",
        "provincia_id": 23,
        "valoracion": 2,
        "imagen": "https://images.trvl-media.com/lodging/18000000/17840000/17830200/17830143/14864177_y.jpg?impolicy=resizecrop&rw=402&ra=fit"
      },
      {
        "id": 25,
        "nombre": "Ocros Mountain Retreat",
        "direccion": "Calle Bolognesi 234",
        "provincia_id": 24,
        "valoracion": 3,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZM2Jlf3pU9dAppUSbtrUXCJAUxgMIxR1xrA&s"
      },
      {
        "id": 26,
        "nombre": "Pallasca Comfort Hotel",
        "direccion": "Av. 28 de Julio 567",
        "provincia_id": 25,
        "valoracion": 2,
        "imagen": "https://a0.muscache.com/im/pictures/miso/Hosting-51483433/original/aaea2ecd-f67f-4d82-97ec-8cad5deac2ac.jpeg?im_w=720"
      },
      {
        "id": 27,
        "nombre": "Pomabamba Plaza Hotel",
        "direccion": "Jr. Lima 890",
        "provincia_id": 26,
        "valoracion": 3,
        "imagen": "https://q-xx.bstatic.com/xdata/images/hotel/max400/538271693.jpg?k=8dd33565c2b6f222fd8cf18866f5e6858bb04ba9f2c0d7dd9a1bf3fab52fd11d"
      },
      {
        "id": 28,
        "nombre": "Recuay Andean Lodge",
        "direccion": "Calle Grau 123",
        "provincia_id": 27,
        "valoracion": 3,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/1e/7f/97/one-of-our-four-eco-lodges.jpg?w=1200&h=-1&s=1"
      },
      {
        "id": 29,
        "nombre": "Santa Coastal Resort",
        "direccion": "Av. Pacífico 456",
        "provincia_id": 28,
        "valoracion": 5,
        "imagen": "https://media-cdn.tripadvisor.com/media/photo-s/29/ca/09/19/villa-la-estancia-beach.jpg"
      },
      {
        "id": 30,
        "nombre": "Sihuas Valley Hotel",
        "direccion": "Jr. Comercio 789",
        "provincia_id": 29,
        "valoracion": 2,
        "imagen": "https://images.trvl-media.com/lodging/20000000/19340000/19336200/19336111/eb2f3b64_y.jpg?impolicy=resizecrop&rw=402&ra=fit"
      },
      {
        "id": 31,
        "nombre": "Yungay Mountain Hotel",
        "direccion": "Av. 28 de Julio 234",
        "provincia_id": 30,
        "valoracion": 3,
        "imagen": "https://images.trvl-media.com/lodging/16000000/15900000/15894100/15894010/a4509171.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
      },
      {
        "id": 32,
        "nombre": "Abancay Plaza Hotel",
        "direccion": "Jr. Lima 567",
        "provincia_id": 31,
        "valoracion": 3,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/53/a6/f6/hotel-turistas-de-abancay.jpg?w=700&h=-1&s=1"
      },
      {
        "id": 33,
        "nombre": "Andahuaylas Comfort Inn",
        "direccion": "Av. Los Chancas 890",
        "provincia_id": 32,
        "valoracion": 3,
        "imagen": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/530087025.jpg?k=29a45d2c72c601827a73e137652ffc509d524bbf8e911f87ccdc564a8520ab36&o=&hp=1"
      },
      {
        "id": 34,
        "nombre": "Antabamba Mountain Lodge",
        "direccion": "Calle Bolognesi 123",
        "provincia_id": 33,
        "valoracion": 2,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/ee/52/a7/marataba-trails-lodge.jpg?w=700&h=-1&s=1"
      },
      {
        "id": 35,
        "nombre": "Aymaraes Valley Hotel",
        "direccion": "Jr. Cusco 456",
        "provincia_id": 34,
        "valoracion": 3,
        "imagen": "https://media-cdn.tripadvisor.com/media/photo-s/22/09/aa/45/aranwa-sacred-valley.jpg"
      },
      {
        "id": 36,
        "nombre": "Cotabambas Andean Resort",
        "direccion": "Av. Los Incas 789",
        "provincia_id": 35,
        "valoracion": 4,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1f/d2/ab/e8/foto-de-los-alrededores.jpg?w=1200&h=-1&s=1"
      },
      {
        "id": 37,
        "nombre": "Arequipa Luxury Hotel",
        "direccion": "Calle Santa Catalina 234",
        "provincia_id": 41,
        "valoracion": 5,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/32/42/b2/hotel-boutique-villa.jpg?w=1200&h=-1&s=1"
      },
      {
        "id": 38,
        "nombre": "Camaná Beach Resort",
        "direccion": "Av. 9 de Noviembre 567",
        "provincia_id": 42,
        "valoracion": 4,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9_11v3TFM0T_p1iuOQ8WYkaCil-eCkjTj4Q&s"
      },
      {
        "id": 39,
        "nombre": "Caravelí Oasis Hotel",
        "direccion": "Jr. Los Ángeles 890",
        "provincia_id": 43,
        "valoracion": 3,
        "imagen": "https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/563031247.jpg?k=2c87527e229861a12646cc54b769584d9ad4053aad68a92f8367198d38ff8438&o="
      },
      {
        "id": 40,
        "nombre": "Castilla Valley Lodge",
        "direccion": "Calle Grau 123",
        "provincia_id": 44,
        "valoracion": 3,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/6d/af/31/mangwa-valley-game-lodge.jpg?w=700&h=-1&s=1"
      },
      {
        "id": 41,
        "nombre": "Condesuyos Eco Hotel",
        "direccion": "Av. Grau 456",
        "provincia_id": 45,
        "valoracion": 3,
        "imagen": "https://a0.muscache.com/im/pictures/hosting/Hosting-1206609400979541940/original/10377c67-ff1f-4822-a360-9552ace245bb.jpeg?im_w=720"
      },
      {
        "id": 42,
        "nombre": "Islay Beachfront Resort",
        "direccion": "Malecón San Martín 789",
        "provincia_id": 46,
        "valoracion": 4,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/aa/48/78/port-charlotte-hotel.jpg?w=1200&h=-1&s=1"
      },
      {
        "id": 43,
        "nombre": "La Unión Mountain Lodge",
        "direccion": "Calle Bolognesi 123",
        "provincia_id": 47,
        "valoracion": 3,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfVWCPA8s0RbrYx-xRzL65vy-5_8WdzyBWWA&s"
      },
      {
        "id": 44,
        "nombre": "Alto Amazonas Jungle Hotel",
        "direccion": "Av. Amazonas 456",
        "provincia_id": 48,
        "valoracion": 4,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/68/36/e2/piscina-de-borda-infinita.jpg?w=700&h=-1&s=1"
      },
      {
        "id": 45,
        "nombre": "Bagua Valley Resort",
        "direccion": "Jr. Lima 789",
        "provincia_id": 49,
        "valoracion": 3,
        "imagen" :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsPgL_eLb0__3hCKwMDSVISwa6ixlI_0r5RA&s"
      },
      {
        "id": 46,
        "nombre": "Bongará Eco Lodge",
        "direccion": "Calle Grau 234",
        "provincia_id": 50,
        "valoracion": 2,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/0d/a4/79/eco-lodge.jpg?w=700&h=-1&s=1"
      },
      {
        "id": 47,
        "nombre": "Chachapoyas Plaza Hotel",
        "direccion": "Jr. Amazonas 567",
        "provincia_id": 51,
        "valoracion": 4,
        "imagen": ""
      },
      {
        "id": 48,
        "nombre": "Condorcanqui Jungle Retreat",
        "direccion": "Calle Bolognesi 123",
        "provincia_id": 52,
        "valoracion": 3
      },
      {
        "id": 49,
        "nombre": "Luya Valley Lodge",
        "direccion": "Av. 28 de Julio 456",
        "provincia_id": 53,
        "valoracion": 3
      },
      {
        "id": 50,
        "nombre": "Rodríguez de Mendoza Mountain Hotel",
        "direccion": "Jr. Lima 789",
        "provincia_id": 54,
        "valoracion": 4
      },
      {
        "id": 51,
        "nombre": "Chincheros Valley Lodge",
        "direccion": "Av. La Merced 123",
        "provincia_id": 55,
        "valoracion": 3
      },
      {
        "id": 52,
        "nombre": "Huancavelica Comfort Inn",
        "direccion": "Jr. Comercio 456",
        "provincia_id": 56,
        "valoracion": 4
      },
      {
        "id": 53,
        "nombre": "Acobamba Plaza Hotel",
        "direccion": "Av. Los Andes 789",
        "provincia_id": 57,
        "valoracion": 3
      },
      {
        "id": 54,
        "nombre": "Angaraes Valley Lodge",
        "direccion": "Calle Grau 123",
        "provincia_id": 58,
        "valoracion": 2
      },
      {
        "id": 55,
        "nombre": "Castrovirreyna Mountain Hotel",
        "direccion": "Jr. Comercio 456",
        "provincia_id": 59,
        "valoracion": 3
      },
      {
        "id": 56,
        "nombre": "Churcampa Lodge",
        "direccion": "Av. La Merced 789",
        "provincia_id": 60,
        "valoracion": 4
      },
      {
        "id": 57,
        "nombre": "Huaytará Boutique Hotel",
        "direccion": "Calle Bolognesi 123",
        "provincia_id": 61,
        "valoracion": 3
      },
      {
        "id": 58,
        "nombre": "Tayacaja Mountain Retreat",
        "direccion": "Jr. Lima 456",
        "provincia_id": 62,
        "valoracion": 2
      },
      {
        "id": 59,
        "nombre": "Ica Luxury Hotel",
        "direccion": "Av. San Martín 789",
        "provincia_id": 63,
        "valoracion": 5
      },
      {
        "id": 60,
        "nombre": "Chincha Coastal Resort",
        "direccion": "Jr. Lima 123",
        "provincia_id": 64,
        "valoracion": 4
      },
      {
        "id": 61,
        "nombre": "Nazca Desert Lodge",
        "direccion": "Av. Los Incas 456",
        "provincia_id": 65,
        "valoracion": 3
      },
      {
        "id": 62,
        "nombre": "Pisco Beachfront Hotel",
        "direccion": "Malecón Grau 789",
        "provincia_id": 66,
        "valoracion": 4
      },
      {
        "id": 63,
        "nombre": "Huancayo Plaza Hotel",
        "direccion": "Av. Huancavelica 123",
        "provincia_id": 67,
        "valoracion": 4
      },
      {
        "id": 64,
        "nombre": "Concepción Valley Lodge",
        "direccion": "Jr. Comercio 456",
        "provincia_id": 68,
        "valoracion": 3
      },
      {
        "id": 65,
        "nombre": "Chanchamayo Eco Hotel",
        "direccion": "Av. Los Andes 789",
        "provincia_id": 69,
        "valoracion": 5
      },
      {
        "id": 66,
        "nombre": "Jauja Mountain Hotel",
        "direccion": "Calle Grau 123",
        "provincia_id": 70,
        "valoracion": 4
      },
      {
        "id": 67,
        "nombre": "Junín Adventure Lodge",
        "direccion": "Jr. Comercio 456",
        "provincia_id": 71,
        "valoracion": 3
      },
      {
        "id": 68,
        "nombre": "Satipo Jungle Retreat",
        "direccion": "Av. La Merced 789",
        "provincia_id": 72,
        "valoracion": 4
      },
      {
        "id": 69,
        "nombre": "Tarma Valley Hotel",
        "direccion": "Calle Bolognesi 123",
        "provincia_id": 73,
        "valoracion": 3
      },
      {
        "id": 70,
        "nombre": "Yauli Comfort Inn",
        "direccion": "Jr. Lima 456",
        "provincia_id": 74,
        "valoracion": 2
      },
      {
        "id": 71,
        "nombre": "Cusco Luxury Resort",
        "direccion": "Av. Sol 789",
        "provincia_id": 75,
        "valoracion": 5
      },
      {
        "id": 72,
        "nombre": "Urubamba Valley Lodge",
        "direccion": "Jr. Comercio 123",
        "provincia_id": 76,
        "valoracion": 4
      },
      {
        "id": 73,
        "nombre": "Paucartambo Mountain Hotel",
        "direccion": "Av. La Merced 456",
        "provincia_id": 77,
        "valoracion": 3
      },
      {
        "id": 74,
        "nombre": "Paruro Boutique Hotel",
        "direccion": "Calle Grau 789",
        "provincia_id": 78,
        "valoracion": 3
      },
      {
        "id": 75,
        "nombre": "Quispicanchi Eco Hotel",
        "direccion": "Av. Amazonas 123",
        "provincia_id": 79,
        "valoracion": 4
      },
      {
        "id": 76,
        "nombre": "Chumbivilcas Adventure Lodge",
        "direccion": "Jr. Comercio 456",
        "provincia_id": 80,
        "valoracion": 3
      },
      {
        "id": 77,
        "nombre": "Espinar Valley Lodge",
        "direccion": "Av. Sol 789",
        "provincia_id": 81,
        "valoracion": 4
      },
      {
        "id": 78,
        "nombre": "La Convención Jungle Hotel",
        "direccion": "Calle Bolognesi 123",
        "provincia_id": 82,
        "valoracion": 3
      },
      {
        "id": 79,
        "nombre": "Anta Mountain Lodge",
        "direccion": "Jr. Lima 456",
        "provincia_id": 83,
        "valoracion": 2
      },
      {
        "id": 80,
        "nombre": "Canchis Adventure Hotel",
        "direccion": "Av. Huancavelica 789",
        "provincia_id": 84,
        "valoracion": 4
      },
      {
        "id": 81,
        "nombre": "Apurímac Valley Lodge",
        "direccion": "Jr. Amazonas 123",
        "provincia_id": 85,
        "valoracion": 3
      },
      {
        "id": 82,
        "nombre": "Aymara Boutique Hotel",
        "direccion": "Av. Sol 456",
        "provincia_id": 86,
        "valoracion": 4
      },
      {
        "id": 83,
        "nombre": "Camaná Beachfront Hotel",
        "direccion": "Malecón Grau 789",
        "provincia_id": 87,
        "valoracion": 4
      },
      {
        "id": 84,
        "nombre": "Carabaya Mountain Lodge",
        "direccion": "Calle Bolognesi 123",
        "provincia_id": 88,
        "valoracion": 3
      },
      {
        "id": 85,
        "nombre": "San Román Adventure Hotel",
        "direccion": "Jr. Comercio 456",
        "provincia_id": 89,
        "valoracion": 4
      }], {})
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Hotels', null, {});
  }
};
