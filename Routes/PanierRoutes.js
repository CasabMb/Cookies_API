// Routes/PanierRoutes.js
const express = require('express');
const router = express.Router();
const PanierController = require('../Controllers/PanierController');

// Récupérer tous les Panier d'un client
router.get('/:client_id', PanierController.getPanier);

// Ajouter un produit aux Panier
router.post('/', PanierController.addToPanier);

// Supprimer un produit des Panier
router.delete('/:client_id/:produit_id', PanierController.removeFromPanier);

// Mettre à jour la quantité d'un produit dans le panier
router.put('/:client_id/:produit_id', PanierController.updateQuantite);


module.exports = router;
