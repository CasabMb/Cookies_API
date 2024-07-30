const CommandeService = require ('../Services/CommandeService');

class CommandeControllers{
    async getAllCommandes(request, result){
        try {
            const commandes = await CommandeService.getAllCommandes();
            result.json(commandes);
        } catch (error) {
            result.status (500);
            console.log(error);
            result.json({message: "Il y a eur un proble lors de la recuparation des commandes"})
        }
    }

    async getCommandeById(request, result){
        try {
            const commande = await CommandeService.getCommandeById(request.params.id);
            result.json(commande);
        } catch (error) {
            result.status (500);
            console.log(error);
            result.json({message: "Il y a eu un probleme lors de la recuperation de la commande"})
        }
    }

    async addCommande(request, result){
        try{
            const commande = await CommandeService.addCommande(request.body);
            result.json(commande);
        } catch (error){
            result.status(500);
            console.log(error);
            result.json({error : "Il y a eu un probleme lors de l'ajout de la commande"})
        }
    }

    async updateCommande(request, result){
        try{
            const commande = await CommandeService.updateCommande(request.params.id, request.body);
            result.json(commande);
        } catch (error){
            result.status(500);
            result.json({error : "Il y a eu un probleme lors de la mise a jour de la commande"})
        }
    }

    async deleteCommande(request, result){
        try{
            const commande = await CommandeService.deleteCommande(request.params.id);
            result.json(commande);
        } catch (error){
            result.status(500);
            result.json({error : "Il y a eu un probleme lors de la suppression de la commande"})
        }
    }


}

module.exports = new CommandeControllers();