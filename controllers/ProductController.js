const { request } = require("express");
const { default: Product } = require("../models/Product");


class ProductController {


    async addProduct(req, res) {

        try {

            const { title, description, price } = req.body
            const product = await Product.create({ title, description, price });

            res.json(product);

        } catch (err) {

            res.status(500).json(err);

        }

    }


}


module.exports = new ProductController();