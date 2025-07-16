const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Set up file upload using Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../UPLOADS')); // Destination folder for images
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Filename as current timestamp
    },
});

const upload = multer({ storage: storage });

module.exports = upload
