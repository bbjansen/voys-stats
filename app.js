// Copyright (c) 2020, BB. Jansen
//
// Please see the included LICENSE file for more information.
"use strict";

const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const app = express();

const DB = require("./libs/db");
const db = new DB();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", require("./routes/index"));

// Start
init();

// Init
async function init() {
  await db.setup();
}

module.exports = app;
