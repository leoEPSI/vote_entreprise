var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost:3306",
  user: "root",
  password: "root"
});

con.connect(function(err) { 
  if (err) throw err;
  console.log("Connected!");
});