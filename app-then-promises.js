// La idea es materializar un documento (o varios) de nuestra colección de MongoDB en NodeJS. Esto nos va a permtir tratar el documento como si fuera un objeto más

// También nos va a permitir definir un esquema para crear un nuevo documento. Esto implica poder aplicar validaciones a nivel de base de datos de forma bastante más sencilla que si lo hicieramos directamente con MongoDB 

// Este manera de trabajar con la BBDD (Base de Datos); es muy MVC-Friendly

// Importante: Mongoose usa MongoDB

const mongoose = require('mongoose');
const { Schema } = mongoose;

// Vamos a definir el esquema de nuestro Planeta. Podemos pensar en el esquema como en definir una clase con validaciones de los campos

// Creando una instncia de la clase Schema (de Mongoose)
const planetSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    velRotation: Number,
    atmosphere: {
        oxygen: Number,
        hydrogen: Number
    }
})

// Relacionamos el esquema planetSchema con un modelo. Dicho de otro modo, el modelo va a ser la colección de la base de datos de MongoDB donde se van a gestionar los documentos
const Planet = mongoose.model('planets', planetSchema);

mongoose.connect('mongodb+srv://root:root@cluster0.lo8dg.mongodb.net/solarsystem').then(err => {
    // En este punto ya estoy coenctado a la base de datos
    const planet = new Planet({
        name: "Promises-Then-3",
        velRotation: 22,
        atmosphere: {
            oxygen: 20,
            hydrogen: 10
        }
    });

    planet.save().then((document) => {
        console.log("Documento insertado: ", document);
    });
});