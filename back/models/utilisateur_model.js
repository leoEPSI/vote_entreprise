const con = require('../../bdd/bddConfig');

class utilisateur{

    async list_utilisateur(){
        //console.log(ancienNomSociete + " " + newNomSociete);
        //return await this.query('UPDATE societe SET nom = ?  WHERE nom = ?',[newNomSociete, ancienNomSociete]);
        return "yes";
    }

    async get_utilisateur(idUtilisateur){
        //console.log(ancienNomSociete + " " + newNomSociete);
        return await this.query('UPDATE societe SET nom = ?  WHERE nom = ?',[newNomSociete, ancienNomSociete]);
    }

    async add_utilisateur(ancienNomSociete, newNomSociete){
        //console.log(ancienNomSociete + " " + newNomSociete);
        return await this.query('UPDATE societe SET nom = ?  WHERE nom = ?',[newNomSociete, ancienNomSociete]);
    }

    async delete_utilisateur(ancienNomSociete, newNomSociete){
        //console.log(ancienNomSociete + " " + newNomSociete);
        return await this.query('UPDATE societe SET nom = ?  WHERE nom = ?',[newNomSociete, ancienNomSociete]);
    }
}

module.exports = new utilisateur();