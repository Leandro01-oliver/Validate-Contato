const mysql = require("mysql2/promise");

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'db_sepog',
  password:'L1A2D3O20#'
});


export {connection};