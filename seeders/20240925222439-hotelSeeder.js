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
        "descripcion": "Este hotel tiene una muy buena vista al paisaje, donde tendra unos buenos restaurante y mucha naturaleza."
      },
      {
        "id": 14,
        "nombre": "Antonio Raymondi Hotel",
        "direccion": "Calle Grau 567",
        "provincia_id": 13,
        "valoracion": 3,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvRmy-b6IiD_19fdCrLppWR5pZupEaBlMYDg&s",
        "descripcion": "Este hotel de 3 estrellas ofrece recepción 24 horas, cajero automático y wifi gratis. Hay un restaurante de cocina americana y parking privado gratis"
      },
      {
        "id": 15,
        "nombre": "Asunción Boutique Hotel",
        "direccion": "Av. 28 de Julio 890",
        "provincia_id": 14,
        "valoracion": 4,
        "imagen": "https://content.r9cdn.net/rimg/himg/6b/80/1b/expediav2-210435-a71d16-495420.jpg?width=1200&height=630&crop=true",
        "descriocion": "Hotel Boutique Asunción cuenta con 37 habitaciones insonorizadas, y algunas disponen de ventanas insonorizadas, además de TV de pantalla plana con canales vía satélite y Wi-Fi"
      },
      {
        "id": 16,
        "nombre": "Bolognesi Plaza Hotel",
        "direccion": "Jr. Comercio 123",
        "provincia_id": 15,
        "valoracion": 3,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/d9/39/85/foto-4-foto-de-la-recepcion.jpg?w=1200&h=-1&s=1",
        "descripcion" : "El Hotel Plaza Bolognesi está situado en Trujillo y ofrece habitaciones con baño privado, agua caliente y fría las 24 horas, cuenta con conexión WiFi gratuito en todo sus Instalaciones"
      },
      {
        "id": 17,
        "nombre": "Carhuaz Mountain View Hotel",
        "direccion": "Av. La Merced 456",
        "provincia_id": 16,
        "valoracion": 4,
        "imagen" : "https://q-xx.bstatic.com/xdata/images/hotel/840x460/487458847.jpg?k=158daa8e3ec34ce1b47aae8acc41a45a59415c96a1e298daf7211609a9789779&o=",
        "descripcion": "Relación precio/calidad muy bien, servicio amable, habitación simple comida y con jacuzzi (excelente) desayuno buffet muy bueno, limpio todo y zona segura"
      },
      {
        "id": 18,
        "nombre": "Carlos Fermín Fitzcarrald Lodge",
        "direccion": "Jr. Progreso 789",
        "provincia_id": 17,
        "valoracion": 2,
        "imagen" : "https://images.trvl-media.com/lodging/90000000/89060000/89052600/89052561/8c703ebf_y.jpg?impolicy=resizecrop&rw=402&ra=fit",
        "descripcion" : "Hotel económico y sencillo con habitaciones cálidas, desayuno, bar y piscina al aire libre."
      },
      {
        "id": 19,
        "nombre": "Casma Beach Resort",
        "direccion": "Av. Nepeña 234",
        "provincia_id": 18,
        "valoracion": 4,
        "imagen" : "https://static.readytotrip.com/upload/information_system_24/1/6/0/item_1606239/information_items_1606239.jpg",
        "descripcion" : "Con una espectacular vista al mar, kitchenette y parrilla para que disfrutes de unos días de sol y playa."
      },
      {
        "id": 20,
        "nombre": "Corongo Heritage Hotel",
        "direccion": "Calle Real 567",
        "provincia_id": 19,
        "valoracion": 3,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_CCyX9d7wl-JVjXvfMrF18oFNWHuHOnT-Bg&s",
        "descripcion": "Contamos con habitaciones con baño propio y habitaciones simples, internet WIFI, agua caliente, TV Cable. Atencion las 24 horas"
      },
      {
        "id": 21,
        "nombre": "Huari Andean Hotel",
        "direccion": "Jr. San Martín 890",
        "provincia_id": 20,
        "valoracion": 3,
        "imagen": "https://q-xx.bstatic.com/xdata/images/hotel/max400/541136103.jpg?k=6854b532625dc450028853df450ca3e164252c9213718bd56725e797b435b66b",
        "descripcion": "Pase una noche en el hotel, el servicio es muy bueno, sus habitaciones muy cómodas y muy asequibles a bolcillo de cualquier viajero."
      },
      {
        "id": 22,
        "nombre": "Huarmey Sunset Hotel",
        "direccion": "Malecón Grau 123",
        "provincia_id": 21,
        "valoracion": 4,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/22/60/20/photo1jpg.jpg?w=300&h=-1&s=1",
        "descripcion": "Aventúrate a Huarmey, donde playas idílicas y cataratas escondidas te aguardan"
      },
      {
        "id": 23,
        "nombre": "Huaylas Valley Lodge",
        "direccion": "Av. Luzuriaga 456",
        "provincia_id": 22,
        "valoracion": 3,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo279t9QHb-WXHYGjmXVjiNRNrVx5A0l8IQQ&s",
        "descripcion": "Los ambientes verdes de Montaña Jazz están preparados para tu estadía ; ubicado a 1 hora de #Huaraz y entrada de #Carhuaz."
      },
      {
        "id": 24,
        "nombre": "Mariscal Luzuriaga Hotel",
        "direccion": "Jr. Comercio 789",
        "provincia_id": 23,
        "valoracion": 2,
        "imagen": "https://images.trvl-media.com/lodging/18000000/17840000/17830200/17830143/14864177_y.jpg?impolicy=resizecrop&rw=402&ra=fit",
        "descripcion": "Un hotel comodo para que tu viaje sea inolvidable, cuenta con Wifi gratis y una buena vista hacia el pasaje"
      },
      {
        "id": 25,
        "nombre": "Ocros Mountain Retreat",
        "direccion": "Calle Bolognesi 234",
        "provincia_id": 24,
        "valoracion": 3,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZM2Jlf3pU9dAppUSbtrUXCJAUxgMIxR1xrA&s",
        "descripcion": "Este establecimiento está situado en la vertiente occidental de las montañas de Sierra Nevada y ofrece habitaciones con WiFi gratuita."
      },
      {
        "id": 26,
        "nombre": "Pallasca Comfort Hotel",
        "direccion": "Av. 28 de Julio 567",
        "provincia_id": 25,
        "valoracion": 2,
        "imagen": "https://a0.muscache.com/im/pictures/miso/Hosting-51483433/original/aaea2ecd-f67f-4d82-97ec-8cad5deac2ac.jpeg?im_w=720",
        "descripcion" : "Confort Hotel en chanchamayo, esta catalogado en los mejores Hoteles en en la selva central del Peru y ofrece unos precios muy Acordes a su presupuesto"
      },
      {
        "id": 27,
        "nombre": "Pomabamba Plaza Hotel",
        "direccion": "Jr. Lima 890",
        "provincia_id": 26,
        "valoracion": 3,
        "imagen": "https://q-xx.bstatic.com/xdata/images/hotel/max400/538271693.jpg?k=8dd33565c2b6f222fd8cf18866f5e6858bb04ba9f2c0d7dd9a1bf3fab52fd11d",
        "descripcion": "Abre sus puertas a sus clientes en el Jr : - Perú Nro. 125 y 127 a uno pasos de la plaza de Armas. Atención esmerada."
      },
      {
        "id": 28,
        "nombre": "Recuay Andean Lodge",
        "direccion": "Calle Grau 123",
        "provincia_id": 27,
        "valoracion": 3,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/1e/7f/97/one-of-our-four-eco-lodges.jpg?w=1200&h=-1&s=1",
        "descripcion": "Con Andean Lodges vivirás una aventura única y completa, caminando por el Apu Ausangate y descansando en nuestros alojamientos andinos todo incluído."
      },
      {
        "id": 29,
        "nombre": "Santa Coastal Resort",
        "direccion": "Av. Pacífico 456",
        "provincia_id": 28,
        "valoracion": 5,
        "imagen": "https://media-cdn.tripadvisor.com/media/photo-s/29/ca/09/19/villa-la-estancia-beach.jpg",
        "descripcion": "La cierto es que el resort esta situado en un enclave paradisíaco. La playa es increíble, arena blanca, agua cristalina"
      },
      {
        "id": 30,
        "nombre": "Sihuas Valley Hotel",
        "direccion": "Jr. Comercio 789",
        "provincia_id": 29,
        "valoracion": 2,
        "imagen": "https://images.trvl-media.com/lodging/20000000/19340000/19336200/19336111/eb2f3b64_y.jpg?impolicy=resizecrop&rw=402&ra=fit",
        "descripcion": "Si estás buscando un destino para tu próxima escapada, ese destino es Provincia de Sihuas."
      },
      {
        "id": 31,
        "nombre": "Yungay Mountain Hotel",
        "direccion": "Av. 28 de Julio 234",
        "provincia_id": 30,
        "valoracion": 3,
        "imagen": "https://images.trvl-media.com/lodging/16000000/15900000/15894100/15894010/a4509171.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
        "descriocion": "Servicios principales. Restaurante y bar; Desayuno disponible; Traslado desde/hacia el aeropuerto; Traslados por la zona; Terraza; Jardín; Biblioteca."
      },
      {
        "id": 32,
        "nombre": "Abancay Plaza Hotel",
        "direccion": "Jr. Lima 567",
        "provincia_id": 31,
        "valoracion": 3,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/53/a6/f6/hotel-turistas-de-abancay.jpg?w=700&h=-1&s=1",
        "descripcion": "A solo unos pasos de la Plaza de Armas en pleno centro de la ciudad de Abancay , encontrara la ubicación ideal para su estadía tanto para viajes de negocio "
      },
      {
        "id": 33,
        "nombre": "Andahuaylas Comfort Inn",
        "direccion": "Av. Los Chancas 890",
        "provincia_id": 32,
        "valoracion": 3,
        "imagen": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/530087025.jpg?k=29a45d2c72c601827a73e137652ffc509d524bbf8e911f87ccdc564a8520ab36&o=&hp=1",
        "descripcion": "Hotel con buena ubicación y muy buena infraestructura. la atención del personal es buena y cálida"
      },
      {
        "id": 34,
        "nombre": "Antabamba Mountain Lodge",
        "direccion": "Calle Bolognesi 123",
        "provincia_id": 33,
        "valoracion": 2,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/ee/52/a7/marataba-trails-lodge.jpg?w=700&h=-1&s=1",
        "descripcion": "Con 16 habitaciones, incluyendo dos Deluxe suites y un Apart suite independiente, nuestra propiedad está inspirada en los andenes"
      },
      {
        "id": 35,
        "nombre": "Aymaraes Valley Hotel",
        "direccion": "Jr. Cusco 456",
        "provincia_id": 34,
        "valoracion": 3,
        "imagen": "https://media-cdn.tripadvisor.com/media/photo-s/22/09/aa/45/aranwa-sacred-valley.jpg",
        "descripcion": "Las comodidades incluyen sala de reuniones, terraza, jardín y sombrilla Por un suplemento, la propiedad cuenta con servicio de lavandería"
      },
      {
        "id": 36,
        "nombre": "Cotabambas Andean Resort",
        "direccion": "Av. Los Incas 789",
        "provincia_id": 35,
        "valoracion": 4,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1f/d2/ab/e8/foto-de-los-alrededores.jpg?w=1200&h=-1&s=1",
        "descripcion": " El albergue está ubicado en una ladera y se obtiene una gran vista de la naturaleza"
      },
      {
        "id": 37,
        "nombre": "Arequipa Luxury Hotel",
        "direccion": "Calle Santa Catalina 234",
        "provincia_id": 41,
        "valoracion": 5,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/32/42/b2/hotel-boutique-villa.jpg?w=1200&h=-1&s=1",
        "descripcion": "Hotel de 5 estrellas, hotel de lujo con restaurante y spa"
      },
      {
        "id": 38,
        "nombre": "Camaná Beach Resort",
        "direccion": "Av. 9 de Noviembre 567",
        "provincia_id": 42,
        "valoracion": 4,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9_11v3TFM0T_p1iuOQ8WYkaCil-eCkjTj4Q&s",
        "descripcion": "El Camana Beach House es una casa en primera línea de playa, en Los Cerrillos, y está equipada con terraza. Tiene balcón y terraza."
      },
      {
        "id": 39,
        "nombre": "Caravelí Oasis Hotel",
        "direccion": "Jr. Los Ángeles 890",
        "provincia_id": 43,
        "valoracion": 3,
        "imagen": "https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/563031247.jpg?k=2c87527e229861a12646cc54b769584d9ad4053aad68a92f8367198d38ff8438&o=",
        "descripcion": "Un hotel comodo para ti y tu familia, donde cuenta con Wifi gratuito."
      },
      {
        "id": 40,
        "nombre": "Castilla Valley Lodge",
        "direccion": "Calle Grau 123",
        "provincia_id": 44,
        "valoracion": 3,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/6d/af/31/mangwa-valley-game-lodge.jpg?w=700&h=-1&s=1",
        "descripcion": "Con una arquitectura rústica, reflejamos toda la historia de nuestro país en nuestros 7000 m2, contamos con áreas verdes amplias"
      },
      {
        "id": 41,
        "nombre": "Condesuyos Eco Hotel",
        "direccion": "Av. Grau 456",
        "provincia_id": 45,
        "valoracion": 3,
        "imagen": "https://a0.muscache.com/im/pictures/hosting/Hosting-1206609400979541940/original/10377c67-ff1f-4822-a360-9552ace245bb.jpeg?im_w=720",
        "descripcion" : "Un hotel comodo, precio-calidad, que cuenta con psicina."
      },
      {
        "id": 42,
        "nombre": "Islay Beachfront Resort",
        "direccion": "Malecón San Martín 789",
        "provincia_id": 46,
        "valoracion": 4,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/aa/48/78/port-charlotte-hotel.jpg?w=1200&h=-1&s=1",
        "descripcion": "Hotel 4 estrellas, donde cuenta con spa, restaurante y Wifi gratuito."
      },
      {
        "id": 43,
        "nombre": "La Unión Mountain Lodge",
        "direccion": "Calle Bolognesi 123",
        "provincia_id": 47,
        "valoracion": 3,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfVWCPA8s0RbrYx-xRzL65vy-5_8WdzyBWWA&s",
        "descripcion": "Descubre nuestro icónico refugio de montaña, construido en las llanuras del Valle del Río Blanco, con una vista impresionante al majestuoso pico de la montaña"
      },
      {
        "id": 44,
        "nombre": "Alto Amazonas Jungle Hotel",
        "direccion": "Av. Amazonas 456",
        "provincia_id": 48,
        "valoracion": 4,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/68/36/e2/piscina-de-borda-infinita.jpg?w=700&h=-1&s=1",
        "descripcion": "Hotel Alto Amazonas tiene jardín, salón de uso común, restaurante y bar en Leticia. Este hotel de 3 estrellas ofrece servicio de traslado gratuito y servicio de habitaciones. Hay piscina al aire libre, wifi gratis y parking privado"
      },
      {
        "id": 45,
        "nombre": "Bagua Valley Resort",
        "direccion": "Jr. Lima 789",
        "provincia_id": 49,
        "valoracion": 3,
        "imagen" :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsPgL_eLb0__3hCKwMDSVISwa6ixlI_0r5RA&s",
        "descripcion": "Es un hotel acogedor, tiene una piscina buena y está cerca a la ciudad. Los precios son cómodos."
      },
      {
        "id": 46,
        "nombre": "Bongará Eco Lodge",
        "direccion": "Calle Grau 234",
        "provincia_id": 50,
        "valoracion": 2,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/0d/a4/79/eco-lodge.jpg?w=700&h=-1&s=1",
        "descripcion" : "El alojamiento ofrece un camino pre inca de piedras antiguas, dos grandes habitaciones compartidas, un bosque primario de 10,000 metros a la redonda"
      },
      {
        "id": 47,
        "nombre": "Chachapoyas Plaza Hotel",
        "direccion": "Jr. Amazonas 567",
        "provincia_id": 51,
        "valoracion": 4,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-cVXOroLmRi6kAKqBAurJMlmaU-q4FxZIDA&s",
        "descripcion": "Un hotel bien ubicado, atención A1, es un lugar muy agradable, las habitaciones amplias y cómodas"
      },
      {
        "id": 48,
        "nombre": "Condorcanqui Jungle Retreat",
        "direccion": "Calle Bolognesi 123",
        "provincia_id": 52,
        "valoracion": 3,
        "imagen": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/81649803.jpg?k=f1045220a10b360f72531d6634d094091963af385a6260cd053e6f7e6844dc00&o=&hp=1",
        "descripcion": "Jungle Retreat, que cuenta con piscina al aire libre, jardín y terraza, ofrece alojamiento en Rincón con wifi gratis y vistas al mar."
      },
      {
        "id": 49,
        "nombre": "Luya Valley Lodge",
        "direccion": "Av. 28 de Julio 456",
        "provincia_id": 53,
        "valoracion": 3,
        "imagen": "https://imgservice.alojamiento.io/500x245/gocta-andes-lodge-pe-cocachimba-bc-910580-0.jpg",
        "descripcion":"Se encuentra en Chachapoyas, en la región de Amazonas, y tiene jardín. Esta casa o chalet ofrece parking privado gratis, recepción 24 horas"
      },
      {
        "id": 50,
        "nombre": "Rodríguez de Mendoza Mountain Hotel",
        "direccion": "Jr. Lima 789",
        "provincia_id": 54,
        "valoracion": 4,
        "imagen": "https://images.trvl-media.com/lodging/29000000/28830000/28829000/28828944/f4174c60_y.jpg?impolicy=resizecrop&rw=402&ra=fit",
        "descripcion":"Hotel 4 estrellas, que cuenta con una buena vista a la naturaleza, con Wifi gratuito y restaurante"
      },
      {
        "id": 51,
        "nombre": "Chincheros Valley Lodge",
        "direccion": "Av. La Merced 123",
        "provincia_id": 55,
        "valoracion": 3,
        "imagen": "https://la-casa-de-barro-lodge-restaurant.cuzco-hotels.com/data/Images/OriginalPhoto/6977/697767/697767267/image-chincheros-cusco-la-casa-de-barro-lodge-restaurant-6.JPEG",
        "descripcion":"El hotel La Casa De Barro Lodge & Restaurant Chincheros, de 3 estrellas, tiene 11 habitaciones y se encuentra a 20 minutos a pie del Centro Arqueológico"
      },
      {
        "id": 52,
        "nombre": "Huancavelica Comfort Inn",
        "direccion": "Jr. Comercio 456",
        "provincia_id": 56,
        "valoracion": 4,
        "imagen": "https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/211094451.jpg?k=e4008f6f9f03a9e420ab0e0f3847c05577b3ea5129fe66f1ba8169e68525646e&o=",
        "descripcion":"El hotel se sitúa en la misma plaza de la capital, dispone de buenas habitaciones, muy comidas y limpias"
      },
      {
        "id": 53,
        "nombre": "Acobamba Plaza Hotel",
        "direccion": "Av. Los Andes 789",
        "provincia_id": 57,
        "valoracion": 3,
        "imagen": "https://images.trvl-media.com/lodging/102000000/101570000/101563200/101563135/4ed85703_y.jpg?impolicy=resizecrop&rw=402&ra=fit",
        "descripcion":"Hotel con precio comodo, y además que cuenta con una buena vista  a la naturaleza."
      },
      {
        "id": 54,
        "nombre": "Angaraes Valley Lodge",
        "direccion": "Calle Grau 123",
        "provincia_id": 58,
        "valoracion": 2,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/fb/93/0e/reception.jpg?w=500&h=-1&s=1",
        "descripcion":"Estamos a 5 minutos de la ciudad de Urubamba rodeada de mercados, restaurantes y espacios de entretenimiento. "
      },
      {
        "id": 55,
        "nombre": "Castrovirreyna Mountain Hotel",
        "direccion": "Jr. Comercio 456",
        "provincia_id": 59,
        "valoracion": 3,
        "imagen": "https://imgservice.alojamiento.io/500x245/la-fortaleza-del-inca-pe-lunahuana-bc-1192313-0.jpg",
        "descripcion":"A solo 20 minutos del centro de la ciudad, estas majestuosas áreas protegidas te esperan para ofrecerte una experiencia inolvidable."
      },
      {
        "id": 56,
        "nombre": "Churcampa Lodge",
        "direccion": "Av. La Merced 789",
        "provincia_id": 60,
        "valoracion": 4,
        "imagen": "https://images.trvl-media.com/lodging/102000000/101570000/101563200/101563135/4ed85703_y.jpg?impolicy=resizecrop&rw=402&ra=fit",
        "descripcion":"Hotel 4 estrellas, que cuenta con spa, restaurante y todo eso con precios muy flexibles."
      },
      {
        "id": 57,
        "nombre": "Huaytará Boutique Hotel",
        "direccion": "Calle Bolognesi 123",
        "provincia_id": 61,
        "valoracion": 3,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/26/18/ec/hotel-huaytara-plazapi.jpg?w=700&h=-1&s=1",
        "descripcion":"Una joya en huancavelica! Que lindo hospedaje! Perfecto para desconectarse, lindo acogedor Perfecto para ir en familia y lo mejor es Pet friendly!"
      },
      {
        "id": 58,
        "nombre": "Tayacaja Mountain Retreat",
        "direccion": "Jr. Lima 456",
        "provincia_id": 62,
        "valoracion": 2,
        "imagen": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/539579209.jpg?k=baba57779a4294fd35ed69e4c39dc9aaf1678a0fbb6f6fa28cf24e75910e92b8&o=&hp=1",
        "descripcion":"Descubre Tayacaja y conoce los encantos de Huancavelica. Buscas un lugar tranquilo, para relajarte y conectar con la naturaleza."
      },
      {
        "id": 59,
        "nombre": "Ica Luxury Hotel",
        "direccion": "Av. San Martín 789",
        "provincia_id": 63,
        "valoracion": 5,
        "imagen": "https://cache.marriott.com/content/dam/marriott-renditions/PIOLC/piolc-bar-lounge-5376-hor-feat.jpg",
        "descripcion":"El resort se encuentra a 1 km del centro de Paracas y a 15 km del aeropuerto Pisco. El Embarcadero Islas Ballestas está situado a un agradable paseo del Paracas "
      },
      {
        "id": 60,
        "nombre": "Chincha Coastal Resort",
        "direccion": "Jr. Lima 123",
        "provincia_id": 64,
        "valoracion": 4,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/be/37/0e/echo-beach-hotel-chinchaycamac.jpg?w=700&h=-1&s=1",
        "descripcion":"Excelente lugar, bungalows super hermosos con vista al mar, la comida deliciosa, la señora Patricia y los trabajadores súper amables"
      },
      {
        "id": 61,
        "nombre": "Nazca Desert Lodge",
        "direccion": "Av. Los Incas 456",
        "provincia_id": 65,
        "valoracion": 3,
        "imagen": "https://nazcalodge.com/wp-content/uploads/2020/08/Nazca-Lodge-1.jpg",
        "descripcion":"Nazca Lodge tiene vistas a la piscina y está en Nazca. Cuenta con restaurante, mostrador de información turística, bar, jardín y piscina al aire libre abierta todo el año"
      },
      {
        "id": 62,
        "nombre": "Pisco Beachfront Hotel",
        "direccion": "Malecón Grau 789",
        "provincia_id": 66,
        "valoracion": 4,
        "imagen": "https://q-xx.bstatic.com/xdata/images/hotel/840x460/386697815.jpg?k=f04469d1499d82a8eb1564a2bfa88b99900b633f9898ab18f37ec814f2b322d4&o=",
        "descripcion":"Lo bueno: Habitaciones cómodas, frecas y limpias. Piscina limpia y grande, perfecta para el clima de Pisco. Instalaciones amplias"
      },
      {
        "id": 63,
        "nombre": "Huancayo Plaza Hotel",
        "direccion": "Av. Huancavelica 123",
        "provincia_id": 67,
        "valoracion": 4,
        "imagen": "https://q-xx.bstatic.com/xdata/images/hotel/max500/285569711.jpg?k=f3fe24d6859b67841fe1cb606b32c361507408bdca3f94c0388bc228001e95e6&o=",
        "descripcion":"¡Habitaciones modernas y confortables!"
      },
      {
        "id": 64,
        "nombre": "Concepción Valley Lodge",
        "direccion": "Jr. Comercio 456",
        "provincia_id": 68,
        "valoracion": 3,
        "imagen": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/560606187.jpg?k=59515e3ccd4170353e3f6f635e8821e3625cbd3f4bd559a055e5c76ba5ccff7a&o=&hp=1",
        "descripcion":"Villa Concepción Lodge se encuentra en Anta y ofrece wifi gratis, jardín, salón de uso común y terraza"
      },
      {
        "id": 65,
        "nombre": "Chanchamayo Eco Hotel",
        "direccion": "Av. Los Andes 789",
        "provincia_id": 69,
        "valoracion": 5,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLKmbqBmQ5RZybft_kCSTri7cG1UhrxbQXng&s",
        "descripcion":"Disfruta de la naturaleza de Chanchamayo en nuestro hotel Fundo San José Parque Ecológico & Lodge que está equipado de piscina, habitaciones familiares"
      },
      {
        "id": 66,
        "nombre": "Jauja Mountain Hotel",
        "direccion": "Calle Grau 123",
        "provincia_id": 70,
        "valoracion": 4,
        "imagen": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/496167337.jpg?k=a3ee4604e440a6958911f26f8c053c07b43a8185976a702f7ad9040288d548eb&o=&hp=1",
        "descripcion":"Es un hotel muy particular: encierra historia, tradición, encanto y calidez."
      },
      {
        "id": 67,
        "nombre": "Junín Adventure Lodge",
        "direccion": "Jr. Comercio 456",
        "provincia_id": 71,
        "valoracion": 3,
        "imagen": "https://media-cdn.tripadvisor.com/media/photo-s/0d/91/f4/77/the-rio-dorado.jpg",
        "descripcion":"Habitaciones cómodas y bien equipadas, ubicadas estratégicamente para poder descansar y relajarte después de un día de caminata por el parque Lanín."
      },
      {
        "id": 68,
        "nombre": "Satipo Jungle Retreat",
        "direccion": "Av. La Merced 789",
        "provincia_id": 72,
        "valoracion": 4,
        "imagen": "https://a0.muscache.com/im/pictures/70a64736-6fbf-436f-aa8b-9d8995705416.jpg?im_w=720",
        "descripcion":"Para aquellos que buscan exclusividad y privacidad, el Jungle Retreat es la elección ideal"
      },
      {
        "id": 69,
        "nombre": "Tarma Valley Hotel",
        "direccion": "Calle Bolognesi 123",
        "provincia_id": 73,
        "valoracion": 3,
        "imagen": "https://images.trvl-media.com/lodging/9000000/8210000/8209100/8209006/a19a7151.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
        "descripcion":"Este es un lodge inmerso en la selva, con unas cabañas Preciosas y cama king size. La atención es espectacular."
      },
      {
        "id": 70,
        "nombre": "Yauli Comfort Inn",
        "direccion": "Jr. Lima 456",
        "provincia_id": 74,
        "valoracion": 2,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/f2/36/87/aqui-se-muestra-la-parte.jpg?w=700&h=-1&s=1",
        "descripcion":"Hotel que cuenta con una buena vista al paisaje, y con restaurante."
      },
      {
        "id": 71,
        "nombre": "Cusco Luxury Resort",
        "direccion": "Av. Sol 789",
        "provincia_id": 75,
        "valoracion": 5,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/00/f6/77/courtyard.jpg?w=300&h=-1&s=1",
        "descripcion":"El Palacio del Inka es una mansión de cinco siglos de antigüedad ubicada en el corazón del centro de Cusco."
      },
      {
        "id": 72,
        "nombre": "Urubamba Valley Lodge",
        "direccion": "Jr. Comercio 123",
        "provincia_id": 76,
        "valoracion": 4,
        "imagen": "https://tourbly.pe/wp-content/uploads/2023/11/aranwa-sacred-valley.jpg",
        "descripcion":"Con una arquitectura rústica, reflejamos toda la historia de nuestro país en nuestros 7000 m2, contamos con áreas verdes amplias, salones para conferencias"
      },
      {
        "id": 73,
        "nombre": "Paucartambo Mountain Hotel",
        "direccion": "Av. La Merced 456",
        "provincia_id": 77,
        "valoracion": 3,
        "imagen": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/530416539.jpg?k=247f31dfa6df9e39004c52b3bfae89d114658848ec573e56a6ea8dcea8ac4ad0&o=&hp=1",
        "descripcion":"Un hotel para que tengas cercania con la naturaleza, donde cuenta con Wifi gratuito."
      },
      {
        "id": 74,
        "nombre": "Paruro Boutique Hotel",
        "direccion": "Calle Grau 789",
        "provincia_id": 78,
        "valoracion": 3,
        "imagen": "https://images.trvl-media.com/lodging/1000000/520000/519400/519319/d158097a_y.jpg?impolicy=resizecrop&rw=402&ra=fit",
        "descripcion":"Hotel comodo, con una buena atención y que incluye Wifi gratuito"
      },
      {
        "id": 75,
        "nombre": "Quispicanchi Eco Hotel",
        "direccion": "Av. Amazonas 123",
        "provincia_id": 79,
        "valoracion": 4,
        "imagen": "https://cdn.turisapps.com/site-1038/ffaba40a-6bdf-4ba6-8299-1a18040cc17f/main.webp",
        "descripcion":"Lugar mágico 100 % ecosostenible, brindamos alimentación consciente y somos Cero Basura y Cero Huella de Carbono"
      },
      {
        "id": 76,
        "nombre": "Chumbivilcas Adventure Lodge",
        "direccion": "Jr. Comercio 456",
        "provincia_id": 80,
        "valoracion": 3,
        "imagen": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/319734281.jpg?k=158a2c60ed05d1043eed34633ce30433932806165f6afc586404050408f8efcf&o=&hp=1",
        "descripcion":"Cuenta con una vista maravillosa donde encontraras mucha historia historica."
      },
      {
        "id": 77,
        "nombre": "Espinar Valley Lodge",
        "direccion": "Av. Sol 789",
        "provincia_id": 81,
        "valoracion": 4,
        "imagen": "https://media-cdn.tripadvisor.com/media/photo-s/0c/d7/c4/66/hotel-location.jpg",
        "descripcion":"Estacionamiento gratis · Internet de alta velocidad gratuito (WiFi) · Gimnasio / Sala de entrenamiento"
      },
      {
        "id": 78,
        "nombre": "La Convención Jungle Hotel",
        "direccion": "Calle Bolognesi 123",
        "provincia_id": 82,
        "valoracion": 3,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/7a/be/69/jardin-del-hotel-cusco.jpg?w=700&h=-1&s=1",
        "descripcion":"Para que te sientas como en casa, las habitaciones en el hotel incluyen televisor de pantalla plana, minibar y frigorífico."
      },
      {
        "id": 79,
        "nombre": "Anta Mountain Lodge",
        "direccion": "Jr. Lima 456",
        "provincia_id": 83,
        "valoracion": 2,
        "imagen": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/547796218.jpg?k=22503eeef44cf7e20560b010f4d0f08a2132dbb9850a5212277026ee00a4f6fa&o=&hp=1",
        "descripcion":"Se encuentra en Anta y ofrece wifi gratis, jardín, salón de uso común y terraza. "
      },
      {
        "id": 80,
        "nombre": "Canchis Adventure Hotel",
        "direccion": "Av. Huancavelica 789",
        "provincia_id": 84,
        "valoracion": 4,
        "imagen": "https://cache.marriott.com/content/dam/marriott-renditions/CUZLC/cuzlc-spa-8093-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1920px:*",
        "descripcion":"Situado a 5 minutos a pie de las Cascadas Alcamayo, el Machupicchu Adventure Hotel ofrece servicio de cambio de divisas y mostrador de información turística"
      },
      {
        "id": 81,
        "nombre": "Apurímac Valley Lodge",
        "direccion": "Jr. Amazonas 123",
        "provincia_id": 85,
        "valoracion": 3,
        "imagen": "https://img.hwnstatic.com/500/350/80/false/S9z7b46NbIHi:mh2q5WxMn4RKFPJS6cqAlQnm8jgrw07uJ1TwkfeZ2:z6EuJb9P.f32giKbcfSkeD7M9k5tiBgvd1XVrKN8m4Sgz8y4PIOkMHFo.q4lZUv3GvqVjZfcugMJsPyknRzjFO9PwLXXbgNg51jFRG7SzeJrEUEeamcX7J7sz20GW3jc8X1WIvQ__",
        "descripcion":"Es un hotel que está situado en Yucay, a cinco minutos Urubamba, el centro del Valle Sagrado de los Incas."
      },
      {
        "id": 82,
        "nombre": "Aymara Boutique Hotel",
        "direccion": "Av. Sol 456",
        "provincia_id": 86,
        "valoracion": 4,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/63/fe/c3/sala-living-room.jpg?w=700&h=-1&s=1",
        "descripcion":"La verdad es un hotel muy bien ubicado, los chicos nos trataron de 10! la limpieza impecable, lo recomiendo si sos un aventurero"
      },
      {
        "id": 83,
        "nombre": "Camaná Beachfront Hotel",
        "direccion": "Malecón Grau 789",
        "provincia_id": 87,
        "valoracion": 4,
        "imagen": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/380488791.jpg?k=ed25dbc7c3db67d21fad7d4d322e8ff876171395150acdf432547c92712cd805&o=&hp=1",
        "descripcion":"El Camana Beach House es una casa en primera línea de playa, en Los Cerrillos"
      },
      {
        "id": 84,
        "nombre": "Carabaya Mountain Lodge",
        "direccion": "Calle Bolognesi 123",
        "provincia_id": 88,
        "valoracion": 3,
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/ee/52/92/marataba-trails-lodge.jpg?w=700&h=-1&s=1",
        "descripcion":"Hotel en el centro de Macusani - a más de 4300 msnm. Hotel a una cuadra de la plaza de armas."
      },
      {
        "id": 85,
        "nombre": "San Román Adventure Hotel",
        "direccion": "Jr. Comercio 456",
        "provincia_id": 89,
        "valoracion": 4,
        "imagen": "https://alojamientos.selvacentral.info/wp-content/uploads/2023/02/Hotel-Aventura-Peru2.jpg",
        "descripcion":"Hotel San Román ⋆⋆⋆, que se encuentra a 41 km de Estadio Yanamayo y a 42 km de Mirador de Punta Uta, ofrece habitaciones en Juliaca."
      }], {})
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Hotels', null, {});
  }
};
