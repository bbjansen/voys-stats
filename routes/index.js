// Copyright (c) 2020, BB. Jansen
//
// Please see the included LICENSE file for more information.
"use strict";

const express = require("express");
const router = express.Router();

const DB = require("../libs/db");
const db = new DB();

/* GET menu stats */
router.get("/menu/", async function (req, res, next) {
  const menu = await db.getMenu();

  res.status(200).json(menu);
});

/* UPDATE menu stats */
router.get("/menu/update/:code", async function (req, res, next) {
  const menu = await db.updateMenu(req.params.code);

  res.status(200).json(menu);
});

module.exports = router;
