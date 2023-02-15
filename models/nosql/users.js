const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema(
    {//Primera sección de objetos..
        name: {
            type: String
        },
        age: {
            type: Number
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String, 
        },
        role: {
            type: ["user", "admin"],
            default: "user",
        },
    },
    // Segunda sección---Ademas de los campos de arriba, se registran de crear y actualizar en tiempos reales.
    {
        timestamps: true, //todo createdAt, updateAT
        versionKey: false
    }
);
// Exportamos el modelo de mongoose...
module.exports = mongoose.model("users", UserScheme);

