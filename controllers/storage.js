const { storageModel } = require('../models');
const PUBLIC_URL = process.env.PUBLIC_URL;

// Obtener lista de base de datos
const getItems = async (req, res) => {
    const data = await storageModel.find({});
    res.send({ data });
};

// Obtenemos un detalle, inserta un registro
const getItem = (req, res) => { };

// Se crean 
const createItem = async (req, res) => { 
    const { body, file } = req;
    console.log(file);
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData);
    res.send({ data }); 
};
// Se atualizan los registros
const updateItem = (req, res) => {};

// Se eliminan los registros
const deleteItem = (req, res) => {};

// Se exportan las funciónes.
module.exports = {getItems, getItem, createItem, updateItem, deleteItem};