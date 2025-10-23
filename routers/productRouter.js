const Router = require('express');
const ProductController = require('../controllers/productController.js');

const router = new Router();


router.post('./product', ProductController.addProduct);


module.exports = router