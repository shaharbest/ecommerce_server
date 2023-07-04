const mongoose = require("mongoose");
const { mySchemaOptions } = require("./defaultOptions");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Categories",
    },
    producer: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Producers",
    },
  },
  { ...mySchemaOptions }
);

const ProductModel = mongoose.model("Products", productSchema);
module.exports = ProductModel;