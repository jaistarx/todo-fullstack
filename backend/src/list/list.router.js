const express = require("express");
const {
  displayData,
  addData,
  displaySingleData,
  deleteData,
  editData,
} = require("./list.controller");
const list = express.Router();

list.route("/").get(displayData);
list.route("/add").post(addData);
list.route("/:itemId").get(displaySingleData).put(editData).delete(deleteData);

module.exports = list;
