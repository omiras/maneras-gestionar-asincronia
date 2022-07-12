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

// Ejecuto la función main
main();

async function main() {

    // Nos conectamos a nuestra instancia de MongoDB Atlas a partir de nuestra "connection string". Nos conectamos a la base de datos "solarsystem"
    await mongoose.connect('mongodb+srv://root:root@cluster0.lo8dg.mongodb.net/solarsystem');
    console.log("Me he contactado a la BBDD");

    // Creamos el planeta Marte, que tiene una velocidad de rotación de 23; y tiene 0 de oxígeno, y 0 de hidrógeno
    const marte = new Planet({
        name: "Carol",
        velRotation: 22,
        atmosphere: {
            oxygen: 20,
            hydrogen: 10
        }
    });



    // Ahora podemos guardar este documento en MongoDB
    await marte.save();


    await mongoose.disconnect();
}