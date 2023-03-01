const con = require('../../bdd/bddConfig');

class vote{

    async list_vote(){
        //console.log(ancienNomSociete + " " + newNomSociete);
        //return await this.query('UPDATE societe SET nom = ?  WHERE nom = ?',[newNomSociete, ancienNomSociete]);
        return "yes";
    }

    async get_vote(ancienNomSociete, newNomSociete){
        //console.log(ancienNomSociete + " " + newNomSociete);
        return await this.query('UPDATE societe SET nom = ?  WHERE nom = ?',[newNomSociete, ancienNomSociete]);
    }

    async add_vote(ancienNomSociete, newNomSociete){
        //console.log(ancienNomSociete + " " + newNomSociete);
        return await this.query('UPDATE societe SET nom = ?  WHERE nom = ?',[newNomSociete, ancienNomSociete]);
    }

    async delete_vote(ancienNomSociete, newNomSociete){
        //console.log(ancienNomSociete + " " + newNomSociete);
        return await this.query('UPDATE societe SET nom = ?  WHERE nom = ?',[newNomSociete, ancienNomSociete]);
    }
}

module.exports = new vote();