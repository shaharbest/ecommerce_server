const express = require("express");
const auth = require("../middlewares/auth");
const generic = require('../controllers/generic');

function generateRouter(model, propsToPopulate = []) {
  const router = express.Router();

  router.route("/")
    .get(generic.getAll(model, propsToPopulate))
    .post(auth, generic.insertOne(model));

  router.route("/:id")
    .get(generic.getOneById(model, propsToPopulate))
    .delete(auth, generic.deleteOneById(model))
    .patch(auth, generic.updateOneById(model));

  return router;
}

module.exports = { generateRouter };