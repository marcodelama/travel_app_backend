const Departamento = require('../../model/Departamento.model');
const Provincia = require('../../model/Provincia.model');

Provincia.belongsTo(Departamento, { foreignKey: 'departamento_id' });

const getUbicacion = async (req, res) => {
    try {
        const departamentos = await Departamento.findAll({
            include: {
                model: Provincia,
                attributes: ['id', 'nombre'], // Selecciona solo los campos necesarios
            },
        });

        const result = departamentos.map(departamento => ({
            id: departamento.id,
            departamento: departamento.nombre,
            provincias: departamento.Provincia.map(provincia => ({
                id: provincia.id,
                departamento: provincia.nombre,
            })),
        }));

        const size = await result.length;
        return res.status(200).json({ data: result, size: size });
    } catch (err) {
        return res.status(500).json({ error: `Hubo un error ${err}` });
    }
}

module.exports = {
    getUbicacion
}