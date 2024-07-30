const Produit = require('../Models/Produit');

class ProduitService{
    async getAllProduits(){
        return await Produit.findAll({include : 'Categories'});
    }
    async getProduitById(produit_id){
        return await Produit.findByPk(produit_id, {include : ['Categories']});
    }

    async addProduit(produit){
        return await Produit.create(produit);
    }

    async updateProduit(id, produit){
        return await Produit.update(produit, {where: {produit_id: id}});
    }

    async deleteProduit(id){
        return await Produit.destroy({where: {produit_id: id}});
    }
}

module.exports = new ProduitService();