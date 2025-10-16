const Router = require('express');
const ProductController = require('../controllers/ProductController.js');
const UserController = require('../controllers/UserController.js');

const router = new Router();


router.post('/product', ProductController.addProduct);
router.delete('/id:', ProductController.removeProduct);   
router.put('/id:', ProductController.editProduct); 

router.post('/user', UserController.addUser); 


module.exports = router