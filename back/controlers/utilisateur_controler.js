
class utilisateur_controler{
    async list_utilisateur(request, reponse){
        try {
            //const logiciels = await logiciel_model.list_Logiciel();
            //reponse.status(200).send(logiciels);
        } catch (error) {
            reponse.status(500).send({message: "erreur interne, "+error.message});
        }
    }

    async get_utilisateur(request, reponse){
        try {
            //const logiciels = await logiciel_model.list_Logiciel();
            //reponse.status(200).send(logiciels);
        } catch (error) {
            reponse.status(500).send({message: "erreur interne, "+error.message});
        }
    }

    async add_utilisateur(request, reponse){
        try {
            //const logiciels = await logiciel_model.list_Logiciel();
            //reponse.status(200).send(logiciels);
        } catch (error) {
            reponse.status(500).send({message: "erreur interne, "+error.message});
        }
    }

    async delete_utilisateur(request, reponse){
        try {
            //const logiciels = await logiciel_model.list_Logiciel();
            //reponse.status(200).send(logiciels);
        } catch (error) {
            reponse.status(500).send({message: "erreur interne, "+error.message});
        }
    }

}

module.exports = new utilisateur_controler();