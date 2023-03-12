const con = require('../../bdd/bddConfig');

class utilisateur{

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

    async list_utilisateur(){
        return this.execute('SELECT * FROM user');
    }

    async get_utilisateur(idUtilisateur){
        return this.execute(`SELECT * FROM user WHERE idUtilisateur = ${idUtilisateur}`);
    }

    async add_utilisateur(nomUtilisateur){
        return this.execute(
            `INSERT INTO user (nomUtilisateur) 
            VALUES ('${nomUtilisateur}')`
            );
    }

    async delete_utilisateur(idUtilisateur){
        return this.execute(
            `DELETE FROM user
            WHERE idUtilisateur = ${idUtilisateur};`
            );
    }
}

module.exports = new utilisateur();