const con = require('../../bdd/bddConfig');

class projet{

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

    async list_projet(){
        return this.execute('SELECT * FROM projet');
    }

    async get_projet(idProjet){
        return this.execute(`SELECT * FROM projet WHERE idProjet = ${idProjet}`);
    }

    async add_projet(nomProjet, description){
        return this.execute(
            `INSERT INTO projet (nomProjet, description) 
            VALUES ('${nomProjet}', '${description}')`
            );
    }

    async delete_projet(idProjet){
        return this.execute(
            `DELETE FROM projet
            WHERE idProjet = ${idProjet};`
            );
    }
}

module.exports = new projet();