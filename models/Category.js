const mongoose = require("mongoose");
const { mySchemaOptions } = require("./defaultOptions");

const categorySchema = new mongoose.Schema(
  {
    name: String,
  },
  { ...mySchemaOptions }
);

const CategoryModel = mongoose.model("Categories", categorySchema);
module.exports = CategoryModel;
