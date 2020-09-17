// Copyright (c) 2020, BB. Jansen
//
// Please see the included LICENSE file for more information.
"use strict";

const db = require("../utils/knex");
const moment = require("moment")

//import moment from "moment"

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
          table.unique("date");
          table.string("date");
          table.int("0");
          table.int("1");
          table.int("2");
          table.int("3");
          table.int("4");
          table.int("5");
          table.int("6");
          table.int("7");
          table.int("8");
          table.int("9");
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
      const data = await db("menu").select();

      let dataset = []

      for (const point of data) {

        dataset.push({
          date: point.date,
          data: {
            0: point[0],
            1: point[1],
            2: point[2],
            3: point[3],
            4: point[4],
            5: point[5],
            6: point[6],
            7: point[7],
            8: point[8],
            9: point[9]
          }
        })
      }

      return dataset

    } catch (err) {
      console.error("[db] " + err.message);
    }
  }
  
  // Update Menu Count
  async updateMenu(code) {
    try {
      
      const date = moment().format('YYYY-MM-DD')

      const check = await db("menu")
      .count("date", { as: "count" })
      .where("date", date);

      if (check[0].count === 0) {

        await db("menu").insert({
          date: date,
          0: 0,
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 0
        });

      } else {
        await db("menu").increment(code, 1).where("date", date);
      }

    } catch (err) {
      console.error("[db] " + err.message);
    }
  }
}

module.exports = DB;
