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

    async list_vote(){
        return this.execute('SELECT * FROM vote');
    }

    async get_vote(idVote){
        return this.execute(`SELECT * FROM vote WHERE idVote = ${idVote}`);
    }

    async add_vote(valeurVote, date, idUtilisateurVote, idProjetVote){
        
        // seulement oui ou non
        if (valeurVote != 1 && valeurVote != 0)
            throw new Error("valeurVote doit être égal à 1 ou 0");
        
        // vérifier que l'utilisateur n'a pas déjà voté pour ce projet
        const same_vote = await this.execute(`SELECT * FROM vote WHERE idUtilisateurVote = ${idUtilisateurVote} AND idProjetVote = ${idProjetVote}`);
        if (same_vote.length > 0)
            throw new Error("Un utilisateur ne peut voter qu'une seule fois pour un projet");

        const dateObject = new Date(date);
        let date_date = dateObject.toISOString().slice(0, 19).replace('T', ' ');
        
        return this.execute(
            `INSERT INTO vote (valeurVote, date, idUtilisateurVote, idProjetVote) 
            VALUES ('${valeurVote}', '${date_date}', '${idUtilisateurVote}', '${idProjetVote}')`
            );
    }

    async delete_vote(idVote){
        return this.execute(
            `DELETE FROM vote
            WHERE idVote = ${idVote};`
            );
    }
}

module.exports = new vote();