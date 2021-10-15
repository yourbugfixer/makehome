const { createPool } = require("mysql");

const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  connectionLimit: 10,
});

module.exports = pool;
