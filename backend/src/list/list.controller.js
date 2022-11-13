const {
  getList,
  addToList,
  getListItem,
  deleteFromList,
  editInList,
} = require("./list.service");

const displayData = async (req, res, next) => {
  const dataValues = await getList();
  res.json({ data: dataValues });
};

const displaySingleData = async (req, res, next) => {
  const itemId = Number(req.params.itemId);
  const dataValues = await getListItem(itemId);
  res.json({ data: dataValues });
};

const addData = async (req, res, next) => {
  const dataText = req.body.text;
  const result = await addToList(dataText);
  res.json("inserted");
};

const deleteData = async (req, res, next) => {
  const itemId = req.params.itemId;
  const result = await deleteFromList(itemId);
  res.json("deleted");
};

const editData = async (req, res, next) => {
  const itemId = req.params.itemId;
  const editText = req.body.text;
  const result = await editInList(itemId, editText);
  res.json("edited");
};

module.exports = {
  displayData,
  addData,
  displaySingleData,
  deleteData,
  editData,
};
