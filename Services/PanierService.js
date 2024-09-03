// Services/FavorisService.js
const Panier = require('../Models/Panier');
const Client = require('../Models/Client'); 
const Produit = require('../Models/Produit'); 


class PanierService {
    async addToPanier({ client_id, produit_id, quantite }) {
        return await Panier.create({ client_id, produit_id, quantite });
    }

    async deleteFromPanier(client_id, produit_id, quantite) {
        return await Panier.destroy({
            where: {
                client_id,
                produit_id
            }
        });
    }

    async getPanierByClientId(client_id) {
        return await Panier.findAll({
            where: { client_id },
            include: [
                { model: Produit, as:'Produits' }
            ]
        });
    }

    async updateQuantite(client_id, produit_id, quantite) {
        return await Panier.update(
            { quantite },
            {
                where: {
                    client_id,
                    produit_id
                }
            }
        );
    }
}

module.exports = new PanierService();
