const express = require("express");
const Product = require("../models/product.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { productIds } = req.body; // id's need to be sent as an array with key "productIds" in the body of post api call
    productIds.forEach(async (e) => {
      let temp = await Product.findOne({ productId: e });
      if (temp == null) {
        const obj = {
          productId: e,
          quantity: 10,
          operation: e % 2 === 0 ? "add" : "subtract",
        };
        await Product.create(obj);
      } else {
        if (temp.operation == "add") {
          temp.quantity++;
        } else {
          temp.quantity--;
        }
        await temp.save();
      }
    });
    return res.status(201).send({ message: "success" });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).send(products);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
