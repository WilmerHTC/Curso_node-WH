const mongoose = require("mongoose"); //Declaro el paquete de mongoose

const dbConnect = () => { // Conexion a la base de datos.
    const DB_URI = process.env.DB_URI;
    mongoose.connect(
        DB_URI,
        { //Prametro de configuracion y conexionque mongoose usa...
            useNEWUrlParser: true,
            useUnifiedTopology: true,
        },
    
        (err, res) => {//Función calback, de respuesta
            if (!err) {
                console.log('***Conexión correcta***');
            } else {
                console.log('*** ERROR DE CONEXIÓN***');
            };
        }
    
    );
};
module.exports = dbConnect; //Exportar la función d ela conexión con la base de datos. 