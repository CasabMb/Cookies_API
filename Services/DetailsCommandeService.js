// Services/DetailsCommandeService.js
const DetailsCommande = require ('../Models/DetailsCommande');
const Produit = require('../Models/Produit'); 
const Commande = require('../Models/Commande');

class DetailsCommandeService{
    async getAllDetailsCommandes(){
        return await DetailsCommande.findAll({include : ['Produits', 'Commandes']});
    }

    async getDetailsCommandeById(details_commande_id){
        return await DetailsCommande.findByPk(details_commande_id, {include : ['Produits', 'Commandes']});
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

    async getDetailsCommandeByCommandeId(commande_id) {
        return await DetailsCommande.findAll({
            where: { commande_id: commande_id }, // Filtre sur la commande spécifique
            include: [
                {
                    model: Produit,
                    as: 'Produits' // Inclure les détails des produits associés
                },
                {
                    model: Commande,
                    as: 'Commandes' // Inclure les détails de la commande
                }
            ]
        });

    }
}
module.exports = new DetailsCommandeService();
