const express = require ('express');
const CommandeController = require ('../Controllers/CommandeController');
const authenticateController = require('../Controllers/authenticateController');

const router = express.Router();
router.get ('/', (request, result)=>{
    CommandeController.getAllCommandes(request, result)});

router.get ('/:id', (request, result)=>{
    CommandeController.getCommandeById(request, result)});

router.post('/',(request, result)=>{
    CommandeController.addCommande(request, result)});

router.patch('/:id', authenticateController.adminMiddleware,(request, result)=>{
    CommandeController.updateCommande(request, result)});

router.delete('/:id', authenticateController.adminMiddleware,(request, result)=>{
    CommandeController.deleteCommande(request, result)});


router.get('/client/:id', (request, result) => {
    CommandeController.getCommandesByClientId(request, result)});

module.exports = router;