const { Router } = require('express');
const router = Router();
const { verifyAccessToken } = require('../config/jwt_methods')

const {
    addProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    getAllProductsNoImage
} = require('../controllers/productControllers');
const { checkAdmin } = require('../middlware/auth');


router.get('/all', getAllProducts);
router.get('/all-no-image', getAllProductsNoImage);
router.post('/add', verifyAccessToken, checkAdmin, addProduct);
router.post('/update/:id', verifyAccessToken, checkAdmin, updateProduct);
router.get('/delete/:id', verifyAccessToken, checkAdmin, deleteProduct);
router.get('/:id', getProduct);

module.exports = router;

