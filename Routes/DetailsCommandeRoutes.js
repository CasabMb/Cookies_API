const express = require ('express');
const DetailsCommandeController = require('../Controllers/DetailsCommandeController');

const router = express.Router();

router.get('/',(request, result)=>{
    DetailsCommandeController.getAllDetailsCommandes(request, result)});

router.get('/:id',(request, result)=>{
    DetailsCommandeController.getDetailsCommandeById(request, result)});

router.post('/',(request, result)=>{
    DetailsCommandeController.addDetailsCommande(request, result)});

router.patch('/:id',(request, result)=>{
    DetailsCommandeController.updateDetailsCommande(request, result)});

router.delete('/:id',(request, result)=>{
    DetailsCommandeController.deleteDetailsCommande(request, result)});
module.exports = router;