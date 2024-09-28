const Cliente = require('../../model/Cliente.model');
const Habitacion = require('../../model/Habitacion.model');
const Hotel = require('../../model/Hotel.model');
const Reserva = require('../../model/Reserva.model');
const TipoHabitacion = require('../../model/TipoHabitacion.model');

Habitacion.belongsTo(Hotel, { foreignKey: 'hotel_id' })
Reserva.belongsTo(Cliente, { foreignKey: 'cliente_id' })


let precioTotalHabitacion

const monto_total = (reserva) =>
    reserva.Habitacions.reduce((total, habitacion) => {
        const fechaInicio = new Date(habitacion.fecha_inicio);
        const fechaFin = new Date(habitacion.fecha_fin);

        const diferenciaDias = Math.ceil((fechaFin - fechaInicio) / (1000 * 60 * 60 * 24));

        precioTotalHabitacion = habitacion.TipoHabitacion.precio * diferenciaDias;

        return total + precioTotalHabitacion;
    }, 0);

const createReserva = async (req, res) => {
    const { fecha_creacion, fechas_inicio, fechas_fin, metodo_pago, habitacion_ids } = req.body; // Cambiado a habitacion_ids
    const cliente_id = req.user.id;

    try {
        // Obtener la menor fecha de fechas_inicio
        let menorFechaInicio = new Date(Math.min(...fechas_inicio.map(fecha => new Date(fecha))));

        // Obtener la mayor fecha de fechas_fin
        let mayorFechaFin = new Date(Math.max(...fechas_fin.map(fecha => new Date(fecha))));

        // Convertir de nuevo a formato de fecha ISO o lo que necesites
        menorFechaInicio = menorFechaInicio.toISOString().split('T')[0];
        mayorFechaFin = mayorFechaFin.toISOString().split('T')[0];

        let fecha_inicio = menorFechaInicio;
        let fecha_fin = mayorFechaFin;
        let estado = 1; //Vigente

        const nuevaReserva = await Reserva.create({
            fecha_creacion,
            metodo_pago,
            fecha_inicio,
            fecha_fin,
            cliente_id,
            estado
        });

        if (habitacion_ids.length !== fechas_inicio.length || habitacion_ids.length !== fechas_fin.length) {
            return res.status(400).json({ message: 'La cantidad de habitaciones no coincide con las fechas proporcionadas' });
        }

        // Actualizar el id_reserva y estado en las habitaciones seleccionadas
        for (let i = 0; i < habitacion_ids?.length; i++) {
            await Habitacion.update(
                {
                    reserva_id: nuevaReserva.id,
                    fecha_inicio: fechas_inicio[i], // Asignar fecha_inicio correspondiente
                    fecha_fin: fechas_fin[i],       // Asignar fecha_fin correspondiente
                    estado: 0 // Cambiar estado a ocupado o reservado
                },
                {
                    where: {
                        id: habitacion_ids[i] // Usar habitacion_ids[i] para la habitación específica
                    }
                }
            );
        }

        res.status(201).json({ message: 'Reserva registrada exitosamente', reservaId: nuevaReserva.id  });
    } catch (err) {
        res.status(500).json({ message: `Hubo un error al registrar reserva ${err}` });
    }
}

const getReserva = async (req, res) => {
    try {
        const reservas = await Reserva.findAll({
            include: {
                model: Habitacion,
                atributes: ['id', 'num_habitacion', 'tipo_id', 'hotel_id'],
                include: [{
                    model: Hotel,
                    atributes: ['nombre']
                },
                {
                    model: TipoHabitacion,
                    atributes: ['nombre']
                }]
            }
        });

        //Cantidad de elementos en el JSON
        const result = reservas.map(reserva => {
            return {
                id: reserva.id,
                fecha_creacion: reserva.fecha_creacion,
                fecha_inicio: reserva.fecha_inicio,
                fecha_fin: reserva.fecha_fin,
                monto_total: monto_total(reserva),
                metodo_pago: reserva.metodo_pago,
                estado_reserva: reserva.estado,
                habitaciones: reserva.Habitacions.map(habitacion => {
                    return {
                        habitacion_id: habitacion.id,
                        tipo_habitacion: habitacion.TipoHabitacion.nombre,
                        precio_total: precioTotalHabitacion,
                        hotel: habitacion.Hotel.nombre,
                        fecha_inicio: habitacion.fecha_inicio,
                        fecha_fin: habitacion.fecha_fin,
                    };
                })
            };
        });

        const size = await Reserva.count();
        //Retorna la respuesta, este es el data:{...}
        return res.status(200).json({ data: result, size: size });
    } catch (error) {
        res.status(500).json({ message: `Hubo un error al obtener reservas ${error}` });
    }
}

const getReservaIdUsuario = async (req, res) => {
    const cliente_id = req.user.id
    try {
        const reservas = await Reserva.findAll({
            where: { cliente_id: cliente_id },
            include: [{
                model: Habitacion,
                atributes: ['id', 'num_habitacion', 'tipo_id', 'hotel_id'],
                include: [{
                    model: Hotel,
                    atributes: ['nombre']
                },
                {
                    model: TipoHabitacion,
                    atributes: ['nombre', 'tipo_habitacion']
                }]
            },
            {
                model: Cliente,
                atributes: ['nombre', 'apellido', 'telefono', 'correo']
            }]
        });

        //Cantidad de elementos en el JSON
        const result = reservas.map(reserva => ({
            id: reserva.id,
            fecha_creacion: reserva.fecha_creacion,
            fecha_inicio: reserva.fecha_inicio,
            fecha_fin: reserva.fecha_fin,
            monto_total: monto_total(reserva),
            metodo_pago: reserva.metodo_pago,
            estado_reserva: reserva.estado,
            habitaciones: reserva.Habitacions.map(habitacion => ({
                habitacion_id: habitacion.id,
                tipo_habitacion: habitacion.TipoHabitacion.nombre,
                precio_total: precioTotalHabitacion,
                hotel: habitacion.Hotel.nombre,
                fecha_inicio: habitacion.fecha_inicio,
                fecha_fin: habitacion.fecha_fin
            }))
        }))

        const size = await result.length;
        //Retorna la respuesta, este es el data:{...}
        return res.status(200).json({ data: result, size: size });
    } catch (error) {
        res.status(500).json({ message: `Hubo un error al obtener reservas ${error}` });
    }
}

module.exports = {
    createReserva,
    getReserva,
    getReservaIdUsuario
}