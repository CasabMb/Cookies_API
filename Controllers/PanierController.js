const PanierService = require('../Services/PanierService');

class PanierController {
    async addToPanier(req, res) {
        const { client_id, produit_id, quantite } = req.body;
        try {
            const panier = await PanierService.addToPanier({ client_id, produit_id, quantite });
            res.status(201).json(panier);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async removeFromPanier(req, res) {
        const { client_id, produit_id} = req.params;
        try {
            await PanierService.deleteFromPanier(client_id, produit_id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getPanier(req, res) {
        const { client_id } = req.params;
        try {
            const panier = await PanierService.getPanierByClientId(client_id);
            res.status(200).json(panier);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateQuantite(req, res) {
        const { client_id, produit_id } = req.params;
        const { quantite } = req.body;

        try {
            const updated = await PanierService.updateQuantite(client_id, produit_id, quantite);
            if (updated[0] === 1) {
                res.status(200).json({ message: 'Quantité mise à jour avec succès.' });
            } else {
                res.status(404).json({ message: 'Panier non trouvé.' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
module.exports = new PanierController();


