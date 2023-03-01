var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root"
});

module.exports = con;
/*
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE vote", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
*/
