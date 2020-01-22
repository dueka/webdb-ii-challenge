const knex = require("knex");

const config = require("../webdb-ii-guided/knexfile.js");

const db = knex(config.development);

module.exports = db;
