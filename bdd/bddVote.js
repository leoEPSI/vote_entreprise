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


// const MongoClient = require('mongodb').MongoClient;
// const uri = 'mongodb+srv://admin:admin@voteBDD.mongodb.net/BDDEntreprise?retryWrites=true&w=majority';

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('Connected to MongoDB Atlas');
//   // Code pour interagir avec la base de données
// });