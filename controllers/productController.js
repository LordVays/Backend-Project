const Product = require('../models/Product.js');


class ProductController {

    async addProduct(req, res) {
        try {
            const { title, description, price } = req.body
            const product = await Product.create({ title, description, price })

            res.json("Продукт успешно добавлен", product);
        } catch (error) {
            console.log("Ошибка при добавлении товара", error);

            res.status(400).json({ error: error.message })
        }
    }

}


module.exports = new ProductController();