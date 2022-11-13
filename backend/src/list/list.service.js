const knexInstance = require("../database/connection");

const getList = async () => {
  const result = await knexInstance("list").select("*");
  return result;
};

const getListItem = async (itemId) => {
  const result = await knexInstance("list")
    .select("*")
    .where("list_id", itemId);
  return result;
};

const addToList = async (dataText) => {
  const result = await knexInstance("list").insert({
    text: dataText,
  });
  return result;
};

const deleteFromList = async (itemId) => {
  const result = await knexInstance("list").where("list_id", itemId).del();
  return result;
};

const editInList = async (itemId, editText) => {
  const result = await knexInstance("list")
    .where("list_id", itemId)
    .update({ text: editText });
  return result;
};

module.exports = {
  getList,
  addToList,
  getListItem,
  deleteFromList,
  editInList,
};
