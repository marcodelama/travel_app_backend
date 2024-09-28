const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../../model/Usuario.model');
const Cliente = require('../../model/Cliente.model');
const Empleado = require('../../model/Empleado.model');


require('dotenv').config();

const SECRET_KEY = process.env.DB_SECRET_KEY || 'clave_secreta';

//login
const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const usuario = await Usuario.findOne({ where: { username } });
        if (!usuario) return res.status(400).json({ message: 'Usuario no encontrado' });
        const pass = await bcrypt.compare(password, usuario.password);
        if (!pass) return res.status(400).json({ message: 'Contraseña incorrecta' });
        const token = jwt.sign({ id: usuario.id, username: usuario.username }, SECRET_KEY, { expiresIn: '24h' });
        res.status(200).json({ message: 'Login exitoso', token });
    } catch (err) {
        res.status(500).json({ message: `Ocurrio un error en el login ${err}` });
    }
}

//registrar cliente
const registrarCliente = async (req, res) => {
    const { num_dni, nombre, apellido, username, password, telefono } = req.body;
    try {
        const existe = await Usuario.findOne({ where: { username } });
        if (existe) return res.status(400).json({ message: 'El nombre de usuario ya está en uso.' });

        const existe_dni = await Cliente.findOne({ where: { num_dni } });
        if (existe_dni) return res.status(400).json({ message: 'El número de DNI se encuentra en uso.' });
        const passHash = await bcrypt.hash(password, 10);

        const cliente = await Cliente.create({
            num_dni: num_dni,
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            correo: username,
        });

        await Usuario.create({
            username: username,
            password: passHash,
            cliente_id: cliente.id
        });

        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (err) {
        res.status(500).json({ message: `Hubo un error al registrar usuario ${err}` });
    }
}

//registrar empleado
const registrarEmpleado = async (req, res) => {
    const { nombre, apellido, nickname, username, password, direccion, telefono, salario } = req.body;
    try {
        const existe = await Usuario.findOne({ where: { username } });
        if (existe) return res.status(400).json({ message: 'El nombre de usuario ya está en uso' });
        const passHash = await bcrypt.hash(password, 10);

        const usuario = await Usuario.create({
            nickname: nickname,
            username: username,
            password: passHash
        });

        //fechas
        const fechaActual = new Date();
        const year = String(fechaActual.getFullYear());
        const month = String(fechaActual.getMonth() + 1).padStart(2, '0');
        const day = String(fechaActual.getDate()).padStart(2, '0');

        const fecha = `${year}-${month}-${day}`;

        await Empleado.create({
            usuario_id: usuario.id,
            nombre: nombre,
            apellido: apellido,
            direccion: direccion,
            telefono: telefono,
            salario: salario,
            fecha_contrato: fecha
        });
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (err) {
        res.status(500).json({ message: `Hubo un error al registrar usuario ${err}` });
    }
}

const getUsuarios = async (req, res) => {
    try {
        //Obtiene todos los registros del modelo insertados por medio del seeder
        const usuarios = await Usuario.findAll();
        //Cantidad de elementos en el JSON
        const size = await Usuario.count();
        //Retorna la respuesta, este es el data:{...}
        return res.status(200).json({ data: usuarios, size: size });
    } catch (err) {
        //Error controlado
        return res.status(500).json({ error: `Hubo un error ${err}` });
    }
}

module.exports = {
    login,
    registrarCliente,
    registrarEmpleado,
    getUsuarios
};