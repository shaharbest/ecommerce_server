const cors = require("cors");
const db = require("./db");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const { generateRouter } = require("./routes/generateRouter");

const ProductModel = require("./models/Product"),
  UserModel = require("./models/User"),
  CategoryModel = require("./models/Category"),
  PostModel = require("./models/Post"),
  ProducerModel = require("./models/Producer"),
  OrderModel = require("./models/Order");

db.connect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/products", generateRouter(ProductModel, ["category", "producer"]));
app.use("/users", generateRouter(UserModel));
app.use("/posts", generateRouter(PostModel, ["author"]));
app.use("/categories", generateRouter(CategoryModel));
app.use("/producers", generateRouter(ProducerModel));
app.use("/orders", generateRouter(OrderModel, ["cartEntries.product"]));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something broke!');
})

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
