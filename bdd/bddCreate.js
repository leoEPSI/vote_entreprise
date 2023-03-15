con = require("./bddConfig");

tab = [];
tab.push("CREATE DATABASE IF NOT EXISTS vote");
tab.push("USE vote");
tab.push(
  "CREATE TABLE IF NOT EXISTS `user` (`idUtilisateur` int(11) NOT NULL AUTO_INCREMENT,`nomUtilisateur` varchar(50) DEFAULT NULL,PRIMARY KEY (`idUtilisateur`));"
);
tab.push(
  "CREATE TABLE IF NOT EXISTS `projet` (`idProjet` int(11) NOT NULL AUTO_INCREMENT,`nomProjet` varchar(50) DEFAULT NULL,`description` varchar(2500) DEFAULT NULL,PRIMARY KEY (`idProjet`));"
);
tab.push(
  "CREATE TABLE IF NOT EXISTS `vote` (`idVote` int(11) NOT NULL AUTO_INCREMENT,`valeurVote` int(11) DEFAULT NULL,`date` DATE DEFAULT NULL,`idUtilisateurVote` INT(11) DEFAULT NULL,`idProjetVote` INT(11) DEFAULT NULL,PRIMARY KEY (`idVote`));"
);
tab.push(
  "ALTER TABLE vote ADD CONSTRAINT idUtilisateurVoter FOREIGN KEY (idUtilisateurVote) REFERENCES user(idUtilisateur);"
);
tab.push(
  "ALTER TABLE vote ADD CONSTRAINT idProjetVoter FOREIGN KEY (idProjetVote) REFERENCES projet(idProjet);"
);

tab.push(
  "INSERT INTO `user` (`idUtilisateur`, `nomUtilisateur`) VALUES(1, 'rogers'),(2, 'david'),(3, 'maria'),(4, 'morris'),(5, 'daniel'),(6, 'sanders'),(7, 'mark'),(8, 'morgan'),(9, 'paul');"
);
tab.push(
  "INSERT INTO `projet` (`idProjet`, `nomProjet`, `description`) VALUES(1, 'Pont de Lyon', 'Construction du pont'),(2, 'Reconstruction batiment', 'Reconstruction du batiment'),(3, 'Fete des lumieres', 'Organisation de la fete des lumieres');"
);

tab.forEach((dbTable) => {
  con.query(dbTable, function (err, result) {
    if (err) {
      console.log(dbTable);      
      throw err;
    }
    console.log("Database created");
  });
});
