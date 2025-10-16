const { request } = require('express');
const User = require('../models/User');


class UserController {

    async addUser(req, res) {

        try {
            
            const { name, surname, age } = req.body;
            const user = await User.create({ name, surname, age });
            
            res.json(user);

        } catch (error) {
            res
                .status(500)
                .json({ error: error.message });
        }

    }

}


module.exports = new UserController();