const Router = require('express');
const router = new Router();
const controller = require('../controllers/authController.js');
const { check } = require('express-validator');
const authMiddleware = require('../middlewaree/authMiddleware.js');
const roleMiddleware = require('../middlewaree/roleMiddleware.js');


router.post('/registration', [
    check('username', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', "Пароль должен быть не меньше 4 и больше 10 символов").isLength({ min: 4, max: 10 })
], controller.registration);
router.post('/login', controller.login);

router.get('/users', roleMiddleware(["ADMIN"]), controller.getUsers);


module.exports = router