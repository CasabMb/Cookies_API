const DetailsCommande = require ('../Models/DetailsCommande');

class DetailsCommandeService{
    async getAllDetailsCommandes(){
        return await DetailsCommande.findAll({include : ['Produits', 'Commandes']});
    }

    async getDetailsCommandeById(details_commande_id){
        return await DetailsCommande.findByPk(details_commande_id, {include : ['Produits', 'Commandes']});
    }

    async addDetaislCommande(detailesCommande){
        return await DetailsCommande.create(detailesCommande);
    }

    async addDetailsCommande(detailsCommande){
        return await DetailsCommande.create(detailsCommande);
    }

    async updateDetailsCommande(id, detailsCommande){
        return await DetailsCommande.update(detailsCommande, {where: {details_commande_id: id}});
    }

    async deleteDetailsCommande(id){
        return await DetailsCommande.destroy({where: {details_commande_id: id}});
    }
}
module.exports = new DetailsCommandeService();