const { request } = require("express");
const  Product  = require("../models/Product");

class ProductController {

  async addProduct(req, res) {
    try {
      const { title, description, price } = req.body;
      const product = await Product.create({ title, description, price });
      res.json(product); 
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({error: error.message });
    }
  }

  async removeProduct(req, res) {
    try {
      // const { id } = req.params
      console.log(req.params)

    } catch (error) {

    }
  }

  async editProduct(req, res) {
    try {
      const { id } = req.params
    } catch (error) {

    }
  }

}

module.exports = new ProductController();
