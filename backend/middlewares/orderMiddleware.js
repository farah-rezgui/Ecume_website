const Order = require('../models/commandeShema');

const checkOrderOwnership = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id);
        
        if (!order) {
            return res.status(404).json({ message: 'Commande non trouvée' });
        }
        
        // Vérifier si l'utilisateur est admin ou le propriétaire de la commande
        if (req.user.isAdmin || order.client.email === req.user.email) {
            req.order = order;
            return next();
        }
        
        res.status(403).json({ message: 'Non autorisé à accéder à cette commande' });
    } catch (error) {
        next(error);
    }
};

const checkOrderStatus = (allowedStatuses) => {
    return (req, res, next) => {
        if (!allowedStatuses.includes(req.order.status)) {
            return res.status(400).json({ 
                message: `Action non permise pour le statut ${req.order.status}`,
                allowedStatuses
            });
        }
        next();
    };
};

module.exports = { checkOrderOwnership, checkOrderStatus };