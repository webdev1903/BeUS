const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productId: { type: Number, required: true },
    quantity: { type: Number, required: true },
    operation: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("product", productSchema);
