const LivraisonService = require('../Services/LivraisonService');

class LivraisonController{
    async getAllLivraison(resquest, result){
        try{
            const livraisons = await LivraisonService.getAllLivraison();
            result.json(livraisons);
        } catch (error){
            result.status(500);
            result.json({error : "Il y a eu un probleme lors de la recuperation des livraisons"});
        }
    }

    async getLivraisonById(request, result){
        try{
            const livraison = await LivraisonService.getLivraisonById(request.params.id);
            result.json(livraison);
        } catch (error){
            result.status(500);
            result.json({error : "Il y a eu un probleme lors de la recuperation de la livraison"})
        }
    }

    async addLivraison(request, result){
        try{
            const livraison = await LivraisonService.addLivraison(request.body);
            result.json(livraison);
        } catch (error){
            result.status(500);
            console.log(error);
            result.json({error : "Il y a eu un probleme lors de l'ajout de la livraison"})
        }
    }

    async updateLivraison(request, result){
        try{
            const livraison = await LivraisonService.updateLivraison(request.params.id, request.body);
            result.json(livraison);
        } catch (error){
            result.status(500);
            console.log(error);
            result.json({error : "Il y a eu un probleme lors de la mise a jour de la livraison"})
        }
    }

    async deleteLivraison(request, result){
        try{
            const livraison = await LivraisonService.deleteLivraison(request.params.id);
            result.json(livraison);
        } catch (error){
            result.status(500);
            result.json({error : "Il y a eu un probleme lors de la suppression de la livraison"})
        }
    }
}

module.exports = new LivraisonController();