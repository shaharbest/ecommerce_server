const mongoose = require("mongoose");
const { mySchemaOptions } = require("./defaultOptions");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
  },
  { ...mySchemaOptions }
);

const UserModel = mongoose.model("Users", userSchema);
module.exports = UserModel;