const express = require("express");
const router = express.Router();
const { validatorCreateItem } = require("../validators/tracks")

const {getItems, getItem, createItem} = require("../controllers/tracks")
// Se generan las rutas de canciones.
router.get("/", getItems)

router.post("/", validatorCreateItem, createItem )
    

module.exports = router;