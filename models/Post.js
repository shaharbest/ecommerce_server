const mongoose = require("mongoose");
const { mySchemaOptions } = require("./defaultOptions");

const postSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    author: {
      type: mongoose.Types.ObjectId,
      ref: "Users"
    }
  },
  { ...mySchemaOptions }
);

const PostModel = mongoose.model("Posts", postSchema);
module.exports = PostModel;
