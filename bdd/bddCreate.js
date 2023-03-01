con = require('./bddConfig');

tab = [];
tab.push("CREATE DATABASE vote");
tab.push("CREATE TABLE IF NOT EXISTS `user` (`idUtilisateur` int(11) NOT NULL AUTO_INCREMENT,`nomUtilisateur` varchar(50) DEFAULT NULL,PRIMARY KEY (`idUtilisateur`));");
tab.push("CREATE TABLE IF NOT EXISTS `projet` (`idProjet` int(11) NOT NULL AUTO_INCREMENT,`nomProjet` varchar(50) DEFAULT NULL,`description` varchar(2500) DEFAULT NULL,PRIMARY KEY (`id`));");
tab.push("CREATE TABLE IF NOT EXISTS `vote` (`idVote` int(11) NOT NULL AUTO_INCREMENT,`valeurVote` int(11) DEFAULT NULL,`date` DATE(15) DEFAULT NULL,`idUtilisateurVote` INT(11) DEFAULT NULL,`idProjetVote` INT(11) DEFAULT NULL,PRIMARY KEY (`idVote`));");
tab.push("ALTER TABLE vote ADD CONSTRAINT idUtilisateurVoter FOREIGN KEY (idUtilisateurVote) REFERENCES user(idUtilisateur);");
tab.push("ALTER TABLE vote ADD CONSTRAINT idProjetVoter FOREIGN KEY (idProjetVote) REFERENCES projet(idProjet);");

tab.forEach(dbTable => {
    con.query(dbTable, function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});