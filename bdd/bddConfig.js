var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "vote",                 // enlever pour creer la bdd et les tables
});

module.exports = con;
