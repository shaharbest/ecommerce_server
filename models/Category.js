const mongoose = require("mongoose");
const { mySchemaOptions } = require("./defaultOptions");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    }
  },
  { ...mySchemaOptions }
);

const CategoryModel = mongoose.model("Categories", categorySchema);
module.exports = CategoryModel;
