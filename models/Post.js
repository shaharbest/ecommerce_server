const mongoose = require("mongoose");
const { mySchemaOptions } = require("./defaultOptions");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Users",
    }
  },
  { ...mySchemaOptions }
);

const PostModel = mongoose.model("Posts", postSchema);
module.exports = PostModel;
