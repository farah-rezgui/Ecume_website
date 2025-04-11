const multer = require('multer');
const path = require('path');

// Définir le stockage des fichiers
const storage = multer.diskStorage({
destination: function (req, file, cb) {
    cb(null, 'uploads/'); // dossier où stocker les images
},
filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// Filtrer uniquement les fichiers images
const fileFilter = (req, file, cb) => {
if (file.mimetype.startsWith('image')) {
    cb(null, true);
} else {
    cb(new Error('Seules les images sont autorisées'), false);
}
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
