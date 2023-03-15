const utilisateur = require('../models/utilisateur_model');

class utilisateur_controler{
    async list_utilisateur(request, reponse){
        try {
            const utilisateurs = await utilisateur.list_utilisateur();
            reponse.status(200).send(utilisateurs);
        } catch (error) {
            reponse.status(500).send({message: "erreur interne, "+error.message});
        }
    }

    async get_utilisateur(request, reponse){
        try {
            const idUtilisateur = request.params.id;

            let utilisateur_ = await utilisateur.get_utilisateur(idUtilisateur);
            reponse.status(200).send(utilisateur_);
        } catch (error) {
            reponse.status(500).send({message: "erreur interne, "+error.message});
        }
    }

    async add_utilisateur(request, reponse){
        try {
            const nomUtilisateur = request.query.nomUtilisateur;

            let utilisateur_ = await utilisateur.add_utilisateur(nomUtilisateur);
            reponse.status(200).send(utilisateur_);
        } catch (error) {
            reponse.status(500).send({message: "erreur interne, "+error.message});
        }
    }

    async delete_utilisateur(request, reponse){
        try {
            const idUtilisateur = request.params.id;

            let utilisateur_ = await utilisateur.delete_utilisateur(idUtilisateur);
            reponse.status(200).send(utilisateur_);
        } catch (error) {
            reponse.status(500).send({message: "erreur interne, "+error.message});
        }
    }

}

module.exports = new utilisateur_controler();