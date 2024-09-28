const Provincia = require('../../model/Provincia.model');
const Atraccion = require('../../model/Atraccion.model')
const Departamento = require('../../model/Departamento.model');

Atraccion.belongsTo(Provincia, { foreignKey: 'provincia_id' });

const getAtracciones = async (req, res) => {
    try {
        const atracciones = await Atraccion.findAll({
            include: [
                {
                    model: Provincia,
                    attributes: ['id', 'nombre'],
                    include: {
                        model: Departamento,
                        attributes: ['id', 'nombre'],
                    },
                },
            ],
        });

        console.log('atracciones', atracciones)

        const result = await atracciones.map(atraccion => ({
            id: atraccion.id,
            nombre: atraccion.nombre,
            descripcion: atraccion.descripcion,
            valoracion: atraccion.valoracion,
            direccion: atraccion.direccion,
            horario: atraccion.horario,
            ubicacion:{
                provincia: atraccion.Provincium?.nombre,
                departamento: atraccion.Provincium?.Departamento?.nombre
            }
        }))

        const size = await Atraccion.count();;
        return res.status(200).json({ data: result, size: size });
    } catch (err) {
        return res.status(500).json({ error: `Hubo un error ${err}` });
    }
}

module.exports = {
    getAtracciones
}

//Primero crea el modelo de habitación, todo es manual
//El seeder se genera con un comando -----> "npx sequelize-cli seed:generate --name nombre-del-seeder"
//Luego el modelo para tipo de habitación y lo unes a habitación, como hicimos ayer con provinicia y hotel
//Creas el seeder para tipo de habitación, pídele a chatgpt los datos
//Me avisas cuando termines y también si tienes dudas