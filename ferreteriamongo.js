
//llama a mongo
let mongoose = require('mongoose');
//Busca la propiedad esquema
let Schema = mongoose.Schema;


let ferreteriamongo = new Schema({
    //Creamos una especie de clase que por ser de mongo es Schema 
    nombre: String,
    herramienta: String,
    precio: String,
    imagen: String
});
//Exportamos el modelo de moongose
module.exports = mongoose.model("Ferreteriamongo",ferreteriamongo);