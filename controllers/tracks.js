const { tracksModel } = require('../models')

// Obtener lista de base de datos
const getItems = async (req, res) => {
    const data = await tracksModel.find({});
    res.send({ data });
};

// Obtenemos un detalle, inserta un registro
const getItem = (req, res) => { };

// Se crean 
const createItem = async (req, res) => { 
    const { body } = req;
    console.log(body);
    const data = await tracksModel.create(body)
    res.send({ data });
};

// Se atualizan los regstros
const updateItem = (req, res) => { };

// Se eliminan los registros
const deleteItem = (req, res) => { };

// Se exportan las funciónes.
module.exports = {getItems, getItem, createItem, updateItem, deleteItem};