const express = require('express');
const router = express.Router();
const PanierController = require('../Controllers/PanierController');

router.get('/:client_id', PanierController.getPanier);

router.post('/', PanierController.addToPanier);

router.delete('/:client_id/:produit_id', PanierController.removeFromPanier);

router.put('/:client_id/:produit_id', PanierController.updateQuantite);

router.delete('/:client_id', PanierController.clearPanier);

module.exports = router;



