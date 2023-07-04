function getAll(model, propsToPopulate) {
  return async (req, res) => {
    const allEntries =
      await model.find().populate(propsToPopulate);
    res.json(allEntries);
  };
}

function getOneById(model, propsToPopulate) {
  return async (req, res) => {
    const entryId = req.params.id;
    const entry = await model.findById(entryId)
      .populate(propsToPopulate)
    res.json(entry);
  };
}

function insertOne(model) {
  return async (req, res) => {
    await model.create(req.body);
    res.sendStatus(201);
  };
}

function deleteOneById(model) {
  return async (req, res) => {
    const entryId = req.params.id;
    await model.findByIdAndDelete(entryId);
    res.send(`delete ${entryId}`);
  };
}

function updateOneById(model) {
  return async (req, res) => {
    const entryId = req.params.id;
    await model.findByIdAndUpdate(entryId, req.body);
    res.send(`update ${entryId}`);
  };
}

module.exports = {
  getAll,
  getOneById,
  insertOne,
  deleteOneById,
  updateOneById,
}