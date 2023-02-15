const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const pathStorage = `${__dirname}/../storage`;
        cb(null, pathStorage)
    },

    filename: function (req, file, cb) {
        //TOD: mi-cv.pdf mi foto.png
        const ext = file.originalname.split(".").pop(); //Devuelve [name, png]
        const filename = `file-${Date.now()}.${ext}`;//(123232)Devuleve en formato de tiempo en unix
        cb(null, filename)
    }
});

const uploadMiddleware = multer({ storage });

module.exports = uploadMiddleware;

