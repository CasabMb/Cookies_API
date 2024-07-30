const Commande = require ('../Models/Commande');

class CommandeService{
    async getAllCommandes(){
        return await Commande.findAll({include : 'Clients'});
    }

    async getCommandeById(commande_id){
        return await Commande.findByPk(commande_id, {include : ['Clients']});
    }

    async addCommande(commande){
        return await Commande.create(commande);
    }

    async updateCommande(id, commande){
        return await Commande.update(commande, {where: {commande_id: id}});
    }

    async deleteCommande(id){
        return await Commande.destroy({where: {commande_id: id}});
    }

}


module.exports = new CommandeService();
