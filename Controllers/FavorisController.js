const FavorisService = require('../Services/FavorisService');

class FavorisController {

    async addToFavori(req, res) {
        const { client_id, produit_id } = req.body;
        console.log(req.body); 
        try {
            const favoris = await FavorisService.addToFavori({ client_id, produit_id });
            res.status(201).json(favoris);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async removeFromFavori(req, res) {
        const { client_id, produit_id } = req.params;
        try {
            await FavorisService.deleteFromFavori(client_id, produit_id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getFavoris(req, res) {
        const { client_id } = req.params;
        try {
            const favoris = await FavorisService.getFavorisByClientId(client_id);
            res.status(200).json(favoris);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new FavorisController();

