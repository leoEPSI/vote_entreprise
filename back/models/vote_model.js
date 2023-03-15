const con = require('../../bdd/bddConfig');

class vote{

    async execute(querry){
        try {
            const result = await new Promise((resolve, reject) => {
              con.query(querry, (err, result, fields) => {
                if (err) {
                  reject(err);
                } else {
                  resolve(result);
                }
              });
            });
            return result;
          } catch (error) {
            throw error;
          }
    }

    async list_vote_pour(idProjet){
        return this.execute(`SELECT * FROM vote WHERE idProjetVote = ${idProjet} AND valeurVote = 1`);
    }

    async list_vote_contre(idProjet){
      return this.execute(`SELECT * FROM vote WHERE idProjetVote = ${idProjet} AND valeurVote = 0`);
    }

    async get_vote(idVote){
        return this.execute(`SELECT * FROM vote WHERE idVote = ${idVote}`);
    }

    async add_vote(valeurVote, date, idUtilisateurVote, idProjetVote){
        const dateObject = new Date(date);
        let date_date = dateObject.toISOString().slice(0, 19).replace('T', ' ');
        
        return this.execute(
            `INSERT INTO vote (valeurVote, date, idUtilisateurVote, idProjetVote) 
            VALUES ('${valeurVote}', '${date_date}', '${idUtilisateurVote}', '${idProjetVote}')`
            );
    }

    async verify_vote(idUtilisateurVote, idProjetVote){
      return this.execute(`SELECT * FROM vote WHERE idUtilisateurVote = ${idUtilisateurVote} AND idProjetVote = ${idProjetVote}`);
    }

    async delete_vote(idVote){
        return this.execute(
            `DELETE FROM vote
            WHERE idVote = ${idVote};`
            );
    }
}

module.exports = new vote();