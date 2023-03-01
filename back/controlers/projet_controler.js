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
            //const logiciels = await logiciel_model.list_Logiciel();
            //reponse.status(200).send(logiciels);
        } catch (error) {
            reponse.status(500).send({message: "erreur interne, "+error.message});
        }
    }

    async add_projet(request, reponse){
        try {
            //const logiciels = await logiciel_model.list_Logiciel();
            //reponse.status(200).send(logiciels);
        } catch (error) {
            reponse.status(500).send({message: "erreur interne, "+error.message});
        }
    }

    async delete_projet(request, reponse){
        try {
            //const logiciels = await logiciel_model.list_Logiciel();
            //reponse.status(200).send(logiciels);
        } catch (error) {
            reponse.status(500).send({message: "erreur interne, "+error.message});
        }
    }
}

module.exports = new projet_controler();