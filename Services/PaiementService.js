const Paiement = require('../Models/Paiement');

class PaiementService{
    async getAllPaiement(){
        return await Paiement.findAll({include: 'Commandes'})
    }

    async getPaiemntById(paiement_id){
        return await Paiement.findByPk(paiement_id, {include: 'Commandes'})
    }

    async addPaiement(paiement){
        return await Paiement.create(paiement);
    }

    async updatePaiement(id, paiement){
        return await Paiement.update(paiement, {where: {paiement_id: id}});
    }

    async deletePaiement(id){
        return await Paiement.destroy({where: {paiement_id: id}});
    }
}

module.exports = new PaiementService();