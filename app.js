require("dotenv").config();//Aqui usa las variable de entorno extension env.PORT

const express = require("express");//traemos la libreria de express
const cors = require("cors");

//Aqui es la exportacion de la función dbconnect (Conexion a la base de datos )
const dbConnect = require('./config/mongo');

const app = express();
app.use(cors()); //MI app hace uso de libreria cors
app.use(express.json());
app.use(express.static("storage"));

const port = process.env.PORT || 3000;

// Aqui se invocan las rutas ****...------------------------------
app.use("/api", require("./routes"));

app.listen(port, () => { //Comienza a escuchar por el puerto 3000
    console.log(`http://localhost:${port}`) //invocamos el puerto..
});

dbConnect();
