const mongoose = require("mongoose");
const { mySchemaOptions } = require("./defaultOptions");

const producerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { ...mySchemaOptions }
);

const ProducerModel = mongoose.model("Producers", producerSchema);
module.exports = ProducerModel;