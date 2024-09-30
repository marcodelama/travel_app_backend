const Hotel = require('../../model/Hotel.model');
const Habitacion = require('../../model/Habitacion.model');
const TipoHabitacion = require('../../model/TipoHabitacion.model');
const Provincia = require('../../model/Provincia.model');
const Departamento = require('../../model/Departamento.model');

const getHoteles = async (req, res) => {
    try {
        const hoteles = await Hotel.findAll({
            include: [
                {
                    model: Provincia,
                    atributes: ['id', 'nombre'],
                    include: { // Aquí es donde anidas la relación con TipoHabitacion
                        model: Departamento, // Incluir el modelo TipoHabitacion
                        attributes: ['id', 'nombre'], // Selecciona los campos necesarios de TipoHabitacion
                    }
                },
                {
                    model: Habitacion,
                    attributes: ['id', 'estado', 'num_habitacion', 'reserva_id'], // Selecciona los campos necesarios de Habitacion
                    include: { // Aquí es donde anidas la relación con TipoHabitacion
                        model: TipoHabitacion, // Incluir el modelo TipoHabitacion
                        attributes: ['id', 'nombre', 'capacidad', 'precio'], // Selecciona los campos necesarios de TipoHabitacion
                    }
                }]
        });

        const result = hoteles.map(hotel => ({
            id: hotel.id,
            nombre: hotel.nombre,
            descripcion: hotel.descripcion,
            direccion: hotel.direccion,
            valoracion: hotel.valoracion,
            habitaciones: hotel.Habitacions.map(habitacion => ({
                habitacion_id: habitacion.id,
                estado: habitacion.estado,
                num_habitacion: habitacion.num_habitacion,
                reserva_id: habitacion.reserva_id,
                tipo_habitacion: {
                    tipo_id: habitacion.TipoHabitacion.id,
                    nombre: habitacion.TipoHabitacion.nombre,
                    capacidad: habitacion.TipoHabitacion.capacidad,
                    precio: habitacion.TipoHabitacion.precio
                }
            })),
            ubicacion: {
                provincia: hotel.Provincium.nombre,
                departamento: hotel.Provincium.Departamento.nombre,
            },
            imagen: hotel.imagen
        }))

        const size = await result.length;
        return res.status(200).json({ data: result, size: size });

    } catch (error) {
        console.error('Error al obtener las habitaciones:', error);
        return res.status(500).json({ mensaje: 'Error al obtener las habitaciones' });
    }
};

const getHotel = async (req, res) => {
    const { id } = req.params; // Obtener el ID del hotel desde los parámetros de la solicitud
    try {
        // Buscar el hotel por ID, incluyendo las relaciones necesarias
        const hotel = await Hotel.findOne({
            where: { id }, // Filtrar por el ID del hotel
            include: [
                {
                    model: Provincia,
                    attributes: ['id', 'nombre'],
                    include: {
                        model: Departamento,
                        attributes: ['id', 'nombre'], // Selecciona los campos necesarios de Departamento
                    }
                },
                {
                    model: Habitacion,
                    attributes: ['id', 'estado', 'num_habitacion', 'reserva_id'],
                    include: {
                        model: TipoHabitacion,
                        attributes: ['id', 'nombre', 'capacidad', 'precio'],
                    }
                }
            ]
        });

        // Verificar si se encontró el hotel
        if (!hotel) {
            return res.status(404).json({ mensaje: 'Hotel no encontrado' });
        }

        // Mapear el resultado a un formato deseado
        const result = {
            id: hotel.id,
            nombre: hotel.nombre,
            direccion: hotel.direccion,
            descripcion: hotel.descripcion,
            valoracion: hotel.valoracion,
            habitaciones: hotel.Habitacions.map(habitacion => ({
                habitacion_id: habitacion.id,
                estado: habitacion.estado,
                num_habitacion: habitacion.num_habitacion,
                reserva_id: habitacion.reserva_id,
                tipo_habitacion: {
                    tipo_id: habitacion.TipoHabitacion.id,
                    nombre: habitacion.TipoHabitacion.nombre,
                    capacidad: habitacion.TipoHabitacion.capacidad,
                    precio: habitacion.TipoHabitacion.precio
                }
            })),
            ubicacion: {
                provincia: hotel.Provincium.nombre,
                departamento: hotel.Provincium.Departamento.nombre,
            },
            imagen: hotel.imagen
        };

        return res.status(200).json({ data: result });

    } catch (error) {
        console.error('Error al obtener el hotel:', error);
        return res.status(500).json({ mensaje: 'Error al obtener el hotel' });
    }
}

module.exports = {
    getHoteles,
    getHotel
}

//http://localhost:4000/api/v1/hoteles