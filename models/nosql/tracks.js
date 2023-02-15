const mongoose = require("mongoose");

const TracksScheme = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        album: {
            type: String,
        },
        cover: {
            type: String,
            validate: {
                validator: (req) => {
                    return true;
                },
                message: "ERROR_URL",
            },
        },
        artist: {
            name: {
                type: String
            },
            nickname: {
                type: String
            },
            nacionality: {
                type: String
            },
            duration: {
                start: {
                    type: Number
                },
                end: {
                    type: Number
                },
            },
            mediaId: {
                type:mongoose.Types.ObjectId,
            },
        },
    },
    // Otro objeto..
    {
        versionKey: false,
        timestamps: true
    }
);
// Exportamos el modelo de mongoose...
module.exports = mongoose.model("tracks", TracksScheme);