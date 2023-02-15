const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname;//Direccion de  la ruta.. total del pc.
const removeExtension = (fileName) => {
    return fileName.split('.').shift();
};

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file); //TODO..index o tracks
    if (name !== 'index') {
        console.log(`Cargando ruta ${name}`);
        router.use(`/${name}`, require(`./${file}`));//va ser .. http://localhost:3001/api/tracks
    }
});



module.exports = router;