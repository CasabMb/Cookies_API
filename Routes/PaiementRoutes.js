const express = require ('express');
const PaiementController = require('../Controllers/PaiementController');

const router = express.Router();

router.get('/',(request, result)=>{
    PaiementController.getAllPaiement(request, result)});

router.get('/:id',(request, result)=>{
    PaiementController.getPaiementById(request, result)});

router.post('/',(request, result)=>{
    PaiementController.addPaiement(request, result)});

router.patch('/:id',(request, result)=>{
    PaiementController.updatePaiement(request, result)});

router.delete('/:id',(request, result)=>{
    PaiementController.deletePaiement(request, result)});


module.exports = router;