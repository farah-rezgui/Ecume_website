const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    if (err.name === 'ValidationError') {
        return res.status(400).json({
            message: 'Erreur de validation',
            errors: Object.values(err.errors).map(e => e.message)
        });
    }

    if (err.name === 'CastError') {
        return res.status(400).json({ message: 'ID de format invalide' });
    }

    if (err.code === 11000) {
        return res.status(400).json({ message: 'Valeur dupliquée', field: Object.keys(err.keyPattern)[0] });
    }

    res.status(500).json({ message: 'Erreur serveur' });
};

const notFound = (req, res) => {
    res.status(404).json({ message: 'Route non trouvée' });
};

module.exports = { errorHandler, notFound };