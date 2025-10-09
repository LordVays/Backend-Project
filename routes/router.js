const Router = require('express');
const { default: ProductController } = require('../controllers/ProductController.js');

const router = new Router();


router.post('/product', ProductController.addProduct);


module.exports = router