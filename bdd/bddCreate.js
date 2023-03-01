con = require('./bddConfig');

tab = [];
tab.push("CREATE DATABASE vote");

tab.forEach(dbTable => {
    con.query(dbTable, function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});