// Copyright (c) 2020, BB. Jansen
//
// Please see the included LICENSE file for more information.
"use strict";

const db = require("../utils/knex");

class DB {
  constructor(opts) {
    opts = opts || {};
  }

  // Create tables
  async setup() {
    try {
      // Menu Table
      if (!(await db.schema.hasTable("menu"))) {
        await db.schema.createTable("menu", function (table) {
          table.unique("code");
          table.string("code");
          table.int("count");
        });

        console.info("[db] created table `menu`");
      }

      console.info("[db] ready");
      return;
    } catch (err) {
      if (err.code !== "SQLITE_CONSTRAINT") {
        console.error("[db] " + err.message);
      }
    }
  }

  // Get Menu Count
  async getMenu() {
    try {
      return await db("menu").select();
    } catch (err) {
      console.error("[db] " + err.message);
    }
  }

  // Update Menu Count
  async updateMenu(code) {
    try {
      const check = await db("menu")
        .count("code", { as: "count" })
        .where("code", code);

      if (check[0].count === 0) {
        await db("menu").insert({
          code: code,
          count: 1,
        });
      } else {
        await db("menu").increment("count", 1).where("code", code);
      }
    } catch (err) {
      console.error("[db] " + err.message);
    }
  }
}

module.exports = DB;
