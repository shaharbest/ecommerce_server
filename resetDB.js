const db = require("./db");
const ProductModel = require("./models/Product");
const CategoryModel = require("./models/Category");
const UserModel = require("./models/User");
const PostModel = require("./models/Post");
const ProducerModel = require("./models/Producer");
const OrderModel = require("./models/Order");

const allModels = [
  ProductModel,
  CategoryModel,
  UserModel,
  PostModel,
  ProducerModel,
  OrderModel,
];

main();

async function cleanDB() {
  const promises = allModels.map(m => m.deleteMany().exec());
  await Promise.all(promises);
}

async function sampleDataInsertion() {
  const sample = require("./sample.json");

  const allCategories = await CategoryModel.insertMany(
    sample.categories.map(name => ({ name }))
  );

  const allProducers = await ProducerModel.insertMany(
    sample.producers.map(name => ({ name }))
  );

  const allProducts = await ProductModel.insertMany(
    sample.products.map(p => ({
      ...p,
      category: allCategories[p.category]._id,
      producer: allProducers[p.producer]._id,
    }))
  );

  const allUsers = await UserModel.insertMany(sample.users);

  await PostModel.insertMany(
    sample.posts.map(p => ({
      ...p,
      user: allUsers[p.user]._id,
    }))
  );

  sample.orders.forEach(curOrder => {
    curOrder.customer = allUsers[curOrder.customer]._id;
    curOrder.cartEntries.forEach(e =>
      e.product = allProducts[e.product]._id);
  });

  const allOrders = await OrderModel.insertMany(sample.orders);
}

async function resetDB() {
  console.log("cleaning...");
  await cleanDB();
  console.log("clean!");

  console.log("insert sample data...");
  await sampleDataInsertion();
  console.log("insertion completed");
}

async function main() {
  try {
    db.connect();
    await resetDB();
  }
  catch (error) {
    console.error(error);
  }
  finally {
    db.disconnect();
  }
}