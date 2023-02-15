const express = require("express");
const router = express.Router();

const {getItems, getItem, createItem} = require("../controllers/tracks")
// Se generan las rutas de canciones.
router.get("/", getItems)

router.post("/", createItem )
    

module.exports = router;