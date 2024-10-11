const router = require('express').Router();
const authenticateToken = require('../middleware/authMiddleware');

const usuarioController = require('../app/http/Usuario.controller');
const hotelController = require("../app/http/Hotel.controller");
const ubicacionController = require('../app/http/Ubicacion.controller');
const atraccionController = require('../app/http/Atraccion.controller');
const reservaController = require('../app/http/Reserva.controller');

router.post('/usuario/login', usuarioController.login);
//Cliente
router.post('/usuario/cliente/create', usuarioController.registrarCliente);

//Trabajador
router.post('/usuario/empleado/create', usuarioController.registrarEmpleado);

//Métodos de retorno generales
router.get('/ubicacion', ubicacionController.getUbicacion)

router.get('/atracciones', atraccionController.getAtracciones)

router.get('/hoteles', hotelController.getHoteles);
router.get('/hotel/:id', hotelController.getHotel)

router.get('/usuarios', usuarioController.getUsuarios)

//Reserva
router.post('/reserva/create', reservaController.createReserva)
router.get('/reservas', reservaController.getReserva)
router.get('/reserva/usuario/:id', reservaController.getReservaIdUsuario)

router.use(authenticateToken);

module.exports = router;