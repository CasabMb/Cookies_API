const Livraison = require('../Models/Livraison');

class LivraisonService{
    async getAllLivraison(){
        return await Livraison.findAll({include: 'Commandes'})
    }

    async getLivraisonById(livraison_id){
        return await Livraison.findByPk(livraison_id, {include: 'Commandes'})
    }

    async addLivraison(livraison){
        return await Livraison.create(livraison);
    }

    async updateLivraison(id, livraison){
        return await Livraison.update(livraison, {where: {livraison_id: id}});
    }

    async deleteLivraison(id){
        return await Livraison.destroy({where: {livraison_id: id}});
    }
}

module.exports = new LivraisonService();