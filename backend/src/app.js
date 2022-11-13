const express = require("express");
const bodyParser = require("body-parser");
const list = require("./list/list.router");
const app = express();
var cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

/* ------------------------- Define end points here ------------------------- */
app.use("/list", list);

module.exports = app;
