const mongoose = require("mongoose");
const { mySchemaOptions } = require("./defaultOptions");

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Categories",
    },
    producer: {
      type: mongoose.Types.ObjectId,
      ref: "Producers",
    },
  },
  { ...mySchemaOptions }
);

const ProductModel = mongoose.model("Products", productSchema);
module.exports = ProductModel;