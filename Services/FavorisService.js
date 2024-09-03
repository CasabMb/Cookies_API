// Services/FavorisService.js
const Favoris = require('../Models/Favoris');
const Client = require('../Models/Client'); 
const Produit = require('../Models/Produit'); 


class FavorisService {
    async addToFavori({ client_id, produit_id }) {
        return await Favoris.create({ client_id, produit_id });
    }

    async deleteFromFavori(client_id, produit_id) {
        return await Favoris.destroy({
            where: {
                client_id,
                produit_id
            }
        });
    }

    async getFavorisByClientId(client_id) {
        return await Favoris.findAll({
            where: { client_id },
            include: [
                { model: Produit, as:'Produits' }
            ]
        });
    }
    
}

module.exports = new FavorisService();
