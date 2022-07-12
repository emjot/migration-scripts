require("dotenv").config();

const pluralize = require('pluralize')

const { migrate } = require("./migrate");

async function f() {
  pluralize.addUncountableRule('global-metadata') // configure pluralize analog to cms project
  await migrate();

  process.exit();
}

f();
