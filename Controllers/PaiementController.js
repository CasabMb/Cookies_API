const PaiementService = require('../Services/PaiementService');

class PaiementController{
    async getAllPaiement(resquest, result){
        try{
            const paiements = await PaiementService.getAllPaiement();
            result.json(paiements);
        } catch (error){
            result.status(500);
            result.json({error : "Il y a eu un probleme lors de la recuperation des paiements"});
        }
    }

    async getPaiementById(request, result){
        try{
            const paiement = await PaiementService.getPaiemntById(request.params.id);
            result.json(paiement);
        } catch (error){
            result.status(500);
            result.json({error : "Il y a eu un probleme lors de la recuperation du paiement"})
        }
    }

    async addPaiement(request, result){
        try{
            const paiement = await PaiementService.addPaiement(request.body);
            result.json(paiement);
        } catch (error){
            result.status(500);
            console.log(error);
            result.json({error : "Il y a eu un probleme lors de l'ajout du paiement"})
        }
    }

    async updatePaiement(request, result){
        try{
            const paiement = await PaiementService.updatePaiement(request.params.id, request.body);
            result.json(paiement);
        } catch (error){
            result.status(500);
            result.json({error : "Il y a eu un probleme lors de la mise a jour du paiement"})
        }
    }

    async deletePaiement(request, result){
        try{
            const paiement = await PaiementService.deletePaiement(request.params.id);
            result.json(paiement);
        } catch (error){
            result.status(500);
            result.json({error : "Il y a eu un probleme lors de la suppression du paiement"})
        }
    }
}

module.exports = new PaiementController();