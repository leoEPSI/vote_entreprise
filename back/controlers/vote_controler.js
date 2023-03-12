const vote = require('../models/vote_model');

class vote_controler{
    async list_vote(request, reponse){
        try {
const vote = require('../models/vote_model');
            const votes = await vote.list_vote();
            
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