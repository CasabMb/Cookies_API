const DetailsCommandeService = require ('../Services/DetailsCommandeService');

class DetailsCommandeController{
    async getAllDetailsCommandes(request, result){
        try{
            const detailsCommandes = await DetailsCommandeService.getAllDetailsCommandes();
            result.json(detailsCommandes);
        } catch(error){
            result.status(500);
            result.json({error : "Il y a eu un probleme lors de la recuperation des Details Commande"});
        }      
    }

    async getDetailsCommandeById(request, result){
        try{
            const detailsCommande = await DetailsCommandeService.getDetailsCommandeById(request.params.id);
            result.json(detailsCommande);
        } catch(error) {
            result.status(500);
            console.log(error);
            result.json({error : "Il y a eu un probleme lors de la recuperation du details commande"})
            
        }
    }

    async addDetailsCommande(request, result){
        try{
            const detailsCommande = await DetailsCommandeService.addDetailsCommande(request.body);
            result.json(detailsCommande);
        } catch (error){
            result.status(500);
            console.log(error);
            result.json({error : "Il y a eu un probleme lors de l'ajout du detailsCommande"})
        }
    }

    async updateDetailsCommande(request, result){
        try{
            const detailsCommande = await DetailsCommandeService.updateDetailsCommande(request.params.id, request.body);
            result.json(detailsCommande);
        } catch (error){
            result.status(500);
            console.log(error);
            result.json({error : "Il y a eu un probleme lors de la mise a jour du detailsCommande"})
        }
    }

    async deleteDetailsCommande(request, result){
        try{
            const detailsCommande = await DetailsCommandeService.deleteDetailsCommande(request.params.id);
            result.json(detailsCommande);
        } catch (error){
            result.status(500);
            result.json({error : "Il y a eu un probleme lors de la suppression du detailsCommande"})
        }
    }
}

module.exports = new DetailsCommandeController();