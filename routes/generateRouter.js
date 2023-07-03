const express = require("express");

function generateRouter(model, propsToPopulate = []) {
  const router = express.Router();

  router
    .route("/")
    .get(async (req, res) => {
      res.json(await model.find().populate(propsToPopulate));
    })
    .post(async (req, res) => {
      await model.create(req.body);
      res.sendStatus(201);
    });

  router
    .route("/:id")
    .get(async (req, res) => {
      res.json(await model.findById(req.params.id).populate(propsToPopulate));
    })
    .delete(async (req, res) => {
      await model.findByIdAndDelete(req.params.id);
      res.send(`delete ${req.params.id}`);
    })
    .patch(async (req, res) => {
      await model.findByIdAndUpdate(req.params.id, req.body);
      res.send(`update ${req.params.id}`);
    });

  return router;
}

module.exports = { generateRouter };
