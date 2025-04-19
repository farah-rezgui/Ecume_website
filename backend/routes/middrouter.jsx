const { 
    authMiddleware, 
    adminMiddleware,
    validateRequest,
    checkProductStock
} = require('../middlewares');

router.get('/:id', 
    authMiddleware, 
    validateObjectId, 
    checkProductStock, 
    productController.getProduct
);