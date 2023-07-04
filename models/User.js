const mongoose = require("mongoose");
const { mySchemaOptions } = require("./defaultOptions");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    }
  },
  { ...mySchemaOptions }
);

const UserModel = mongoose.model("Users", userSchema);
module.exports = UserModel;