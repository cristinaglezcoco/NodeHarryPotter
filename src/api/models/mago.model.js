const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const magosSchema = new Schema(
    {
        nombre: {type: String, require: true},
        apellido: {type: String, require: true},
        rol: {type: String, enum: ['Profesor', 'Conserje', 'Director', 'Alumno', 'Mortífago', 'Fallecido'], require: true},
        casaNombre: {type: String, enum: ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'], require: true},
        sangreTipo: {type: String, enum: ['Limpia', 'Mestiza', 'Sucia', 'Squib'], require: true},
        patronus: {type: String, default: "Desconocido", require: true},
        agrupacion: {type: String, enum: ['Ninguna', 'Órden del Fénix y Ejército de Dumbledore', 'Órden del Fénix', 'Ejército de Dumbledore', 'Mortífagos', 'Ministerio'], require: true}, 
        horrocruxes: [{type: String}, {type: String}, {type: String}, {type: String}, {type: String}, {type: String}, {type: String}],
        picture: {type: String, require: true}
    },
    {
        timestamps: true
    }
)

const Mago = mongoose.model('mago', magosSchema);
module.exports = Mago;