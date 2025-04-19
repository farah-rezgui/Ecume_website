const Produit = require('../models/produitShema');

const checkProductStock = async (req, res, next) => {
    try {
        const product = await Produit.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Produit non trouvé' });
        }
        
        if (product.quantityStock <= 0) {
            return res.status(400).json({ message: 'Produit en rupture de stock' });
        }
        
        req.product = product;
        next();
    } catch (error) {
        next(error);
    }
};

const checkProductsAvailability = async (req, res, next) => {
    try {
        const orderItems = req.body.products;
        const products = await Produit.find({ _id: { $in: orderItems.map(item => item.productId) } });

        for (const item of orderItems) {
            const product = products.find(p => p._id.equals(item.productId));
            
            if (!product) {
                return res.status(404).json({ message: `Produit ${item.productId} non trouvé` });
            }
            
            if (product.quantityStock < item.quantity) {
                return res.status(400).json({ 
                    message: `Stock insuffisant pour ${product.titre}`,
                    available: product.quantityStock
                });
            }
        }
        
        req.products = products;
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = { checkProductStock, checkProductsAvailability };