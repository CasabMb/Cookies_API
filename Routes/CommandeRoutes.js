const express = require ('express');
const CommandeController = require ('../Controllers/CommandeController');

const router = express.Router();
router.get ('/', (request, result)=>{
    CommandeController.getAllCommandes(request, result)});

router.get ('/:id', (request, result)=>{
    CommandeController.getCommandeById(request, result)});

router.post('/',(request, result)=>{
    CommandeController.addCommande(request, result)});

router.patch('/:id',(request, result)=>{
    CommandeController.updateCommande(request, result)});

router.delete('/:id',(request, result)=>{
    CommandeController.deleteCommande(request, result)});



module.exports = router;