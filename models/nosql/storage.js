const mongoose = require("mongoose");

const StorageScheme = new mongoose.Schema(
    {
        url: {
            type: String
        },
        filename: {
            type: String
        },
    },

    {
        timestamps: true, //todo createdAt, updateAT
        versionKey: false
    }
);
// Exportamos el modelo de mongoose...
module.exports = mongoose.model("storages", StorageScheme);