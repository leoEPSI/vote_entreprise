const projet = require('../models/projet_model');

class projet_controler{
    async list_projet(request, reponse){
        try {
            const projets = await projet.list_projet();
            reponse.status(200).send(projets);
        } catch (error) {
            reponse.status(500).send({message: "erreur interne, "+error.message});
        }
    }

    async get_projet(request, reponse){
        try {
            const idProjet = request.params.id;

            let projet_ = await projet.get_projet(idProjet);
            reponse.status(200).send(projet_);
        } catch (error) {
            reponse.status(500).send({message: "erreur interne, "+error.message});
        }
    }

    async add_projet(request, reponse){
        try {
            const query = request.query;
            const nomProjet = query.nomProjet;
            const description = query.description;

            let projet_ = await projet.add_projet(nomProjet, description);
            reponse.status(200).send(projet_);
        } catch (error) {
            reponse.status(500).send({message: "erreur interne, "+error.message});
        }
    }

    async delete_projet(request, reponse){
        try {
            const idProjet = request.params.id;

            let projet_ = await projet.delete_projet(idProjet);
            reponse.status(200).send(projet_);
        } catch (error) {
            reponse.status(500).send({message: "erreur interne, "+error.message});
        }
    }
}

module.exports = new projet_controler();