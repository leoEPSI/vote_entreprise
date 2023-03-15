const vote = require('../models/vote_model');

class vote_controler{
    async list_vote(request, reponse){
        try {
            const idProjet = request.params.id;
            const vote_pour = await vote.list_vote_pour(idProjet);
            const vote_contre = await vote.list_vote_contre(idProjet);
            let votes = {
                'valeurPour': vote_pour.length,
                'valeurContre': vote_contre.length
            }
            reponse.status(200).send( JSON.stringify(votes));
        } catch (error) {
            reponse.status(500).send({message: "erreur interne, "+error.message});
        }
    }

    async get_vote(request, reponse){
        try {
            const idVote = request.params.id;

            let vote_ = await vote.get_vote(idVote);
            reponse.status(200).send(vote_);
        } catch (error) {
            reponse.status(500).send({message: "erreur interne, "+error.message});
        }
    }

    async add_vote(request, reponse){
        try {
            const query = request.query;

            const valeurVote = query.valeurVote;
            const date = query.date;
            const idUtilisateurVote = query.idUtilisateurVote;
            const idProjetVote = query.idProjetVote;

            // seulement oui ou non
            if (valeurVote != 1 && valeurVote != 0)
                return "valeurVote doit être égal à 1 ou 0";

            // vérifier que l'utilisateur n'a pas déjà voté pour ce projet
            let same_vote = await vote.verify_vote(idUtilisateurVote, idProjetVote);
            if (same_vote.length > 0)
                return "Un utilisateur ne peut voter qu'une seule fois pour un projet";

            let vote_ = await vote.add_vote(valeurVote, date, idUtilisateurVote, idProjetVote);
            reponse.status(200).send(vote_);
        } catch (error) {
            reponse.status(500).send({message: "erreur interne, "+error.message});
        }
    }

    async delete_vote(request, reponse){
        try {
            const idVote = request.params.id;

            let vote_ = await vote.delete_vote(idVote);
            reponse.status(200).send(vote_);
        } catch (error) {
            reponse.status(500).send({message: "erreur interne, "+error.message});
        }
    }
    
}

module.exports = new vote_controler();