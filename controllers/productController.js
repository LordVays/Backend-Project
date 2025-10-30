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

    async getProducts(req, res) {
        try {
            const products = await Product.find()
            
            return res.json(products);
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async getOneProduct(req, res) {
        try {
            const { id } = req.params
            const product = await Product.findById(id);

            return res.json(product);
        } catch (error) {
            console.log("Ошибка при получении товара \n", error)
            return res.status(500).json({ error: error.message })
        }
    }

    async updateProduct(req, res) {
        try {
            const product = req.body
            console.log(product._id)

            if(!product._id) {
                res.status(400).json({ message: "ID не указан" });
            }

            const updateProduct = await Product.findByIdAndUpdate(product._id, product, { new: true });

            console.log("Товар успешно обновлен");
            return res.json(updateProduct);
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

}


module.exports = new ProductController();