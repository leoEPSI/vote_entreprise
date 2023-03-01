const con = require('../../bdd/bddConfig');

class projet{

    async list_projet(ancienNomSociete, newNomSociete){
        //console.log(ancienNomSociete + " " + newNomSociete);
        //return await this.query('UPDATE societe SET nom = ?  WHERE nom = ?',[newNomSociete, ancienNomSociete]);
        return "yes";
    }

    async get_projet(ancienNomSociete, newNomSociete){
        //console.log(ancienNomSociete + " " + newNomSociete);
        return await this.query('UPDATE societe SET nom = ?  WHERE nom = ?',[newNomSociete, ancienNomSociete]);
    }

    async add_projet(ancienNomSociete, newNomSociete){
        //console.log(ancienNomSociete + " " + newNomSociete);
        return await this.query('UPDATE societe SET nom = ?  WHERE nom = ?',[newNomSociete, ancienNomSociete]);
    }

    async delete_projet(ancienNomSociete, newNomSociete){
        //console.log(ancienNomSociete + " " + newNomSociete);
        return await this.query('UPDATE societe SET nom = ?  WHERE nom = ?',[newNomSociete, ancienNomSociete]);
    }
}

module.exports = new projet();