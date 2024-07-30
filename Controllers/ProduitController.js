const ProduitService = require('../Services/ProduitService');

class ProduitController{
    async getAllProduits(request, result){
        try{
            const produits = await ProduitService.getAllProduits();
            result.json(produits);
        }catch(error){
            result.status(500);
            result.json({error: "Il y a eu un probleme lors de la recuperation des produits"})
        }
    }

    async getProduitById(request, result){
        try{
            const produit = await ProduitService.getProduitById(request.params.id);
            result.json(produit);
        }catch(error){
            result.status(500);
            console.log(error);
            result.json({error: "Il y a eu un probleme lors de la recuperation du produit"})
        }
    }

    async addProduit(request, result){
        try{
            const produit = await ProduitService.addProduit(request.body);
            result.json(produit);
        } catch (error){
            result.status(500);
            console.log(error);
            result.json({error : "Il y a eu un probleme lors de l'ajout du produit"})
        }
    }

    async updateProduit(request, result){
        try{
            const produit = await ProduitService.updateProduit(request.params.id, request.body);
            result.json(produit);
        } catch (error){
            result.status(500);
            result.json({error : "Il y a eu un probleme lors de la mise a jour du produit"})
        }
    }

    async deleteProduit(request, result){
        try{
            const produit = await ProduitService.deleteProduit(request.params.id);
            result.json(produit);
        } catch (error){
            result.status(500);
            result.json({error : "Il y a eu un probleme lors de la suppression du produit"})
        }
    }

}

module.exports = new ProduitController();