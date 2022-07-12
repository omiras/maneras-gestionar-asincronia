function traerDatosApi(cb) {
    console.log("Me conecto a la API y traigo datos");

    // Simulamos que estos datos los hemos traido de la API. 
    let pokemons = ['Charmander', 'Pikachu', 'Bulbasaur'];

    setTimeout(() => {
        cb(pokemons);
    }, 2000)
}


// cuando termines de traer los datos, que yo sé que eso va a tardar un rato, ejecútame la función que te paso por parámetro 
function obtenerPokemons() {
    // HAcemos la petición a la API
    traerDatosApi(llenarDiv);
}

// función para llenar el DIV del HTML
function llenarDiv(pokemons) {
    console.log("Yo me encargo de llenar el DIV con los pokemons: ", pokemons);
}

obtenerPokemons();