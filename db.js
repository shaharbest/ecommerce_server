require("dotenv").config();
const mongoose = require("mongoose");

function connect() {
  mongoose.connect(`mongodb+srv://${process.env.ATLAS_HOST}`, {
    user: process.env.ATLAS_USER,
    pass: process.env.ATLAS_PASSWORD,
    dbName: process.env.ATLAS_DATABASE,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites: true,
    w: "majority",
  });
}

async function disconnect() {
  await mongoose.disconnect();
}

module.exports = { connect, disconnect };
