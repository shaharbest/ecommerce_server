const mongoose = require("mongoose");
const { mySchemaOptions } = require("./defaultOptions");

const cartEntrySchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Products",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      ref: "Users",
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    cartEntries: [cartEntrySchema],
  },
  { ...mySchemaOptions }
);

const Order = mongoose.model("Orders", orderSchema);
module.exports = Order;
