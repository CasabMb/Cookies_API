const express = require('express');
const router = express.Router();
const FavorisController = require('../Controllers/FavorisController');

// Récupérer tous les favoris d'un client
router.get('/:client_id', FavorisController.getFavoris);

// Ajouter un produit aux favoris
router.post('/', FavorisController.addToFavori);

// Supprimer un produit des favoris
router.delete('/:client_id/:produit_id', FavorisController.removeFromFavori);


module.exports = router;
