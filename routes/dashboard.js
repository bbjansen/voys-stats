// Copyright (c) 2020, BB. Jansen
//
// Please see the included LICENSE file for more information.
"use strict";

const express = require("express");
const router = express.Router();

const DB = require("../libs/db");
const db = new DB();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("dashboard", { title: "Voys Stats Logger" });
  
});

module.exports = router;
