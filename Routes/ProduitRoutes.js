const express = require('express');
const ProduitController = require('../Controllers/ProduitController')

const router = express.Router();
router.get ('/', (request, result)=>{
    ProduitController.getAllProduits(request, result)});

router.get ('/:id',(request, result)=>{
    ProduitController.getProduitById(request, result)});

router.post('/',(request, result)=>{
    ProduitController.addProduit(request, result)});

router.patch('/:id',(request, result)=>{
    ProduitController.updateProduit(request, result)});

router.delete('/:id',(request, result)=>{
    ProduitController.deleteProduit(request, result)});


module.exports = router;
