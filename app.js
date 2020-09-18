// Copyright (c) 2020, BB. Jansen
//
// Please see the included LICENSE file for more information.
"use strict";

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const app = express();

// load db
const DB = require("./libs/db");
const db = new DB();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/dashboard", require("./routes/dashboard"));
app.use("/api", require("./routes/api"));

// bootstrap db
init();

// Init
async function init() {
  await db.setup();
}

module.exports = app;
