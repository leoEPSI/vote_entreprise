
class vote_controler{
    async list_vote(request, reponse){
        try {
            //const logiciels = await logiciel_model.list_Logiciel();
            
            reponse.status(200).send("test");
        } catch (error) {
            reponse.status(500).send({message: "erreur interne, "+error.message});
        }
    }

    async get_vote(request, reponse){
        try {
            //const logiciels = await logiciel_model.list_Logiciel();
            //reponse.status(200).send(logiciels);
        } catch (error) {
            reponse.status(500).send({message: "erreur interne, "+error.message});
        }
    }

    async add_vote(request, reponse){
        try {
            //const logiciels = await logiciel_model.list_Logiciel();
            //reponse.status(200).send(logiciels);
        } catch (error) {
            reponse.status(500).send({message: "erreur interne, "+error.message});
        }
    }

    async delete_vote(request, reponse){
        try {
            //const logiciels = await logiciel_model.list_Logiciel();
            //reponse.status(200).send(logiciels);
        } catch (error) {
            reponse.status(500).send({message: "erreur interne, "+error.message});
        }
    }
    
}

module.exports = new vote_controler();