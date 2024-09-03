const express = require ('express');
const DetailsCommandeController = require('../Controllers/DetailsCommandeController');
const authenticateController = require('../Controllers/authenticateController');

const router = express.Router();

router.get('/',authenticateController.adminMiddleware,(request, result)=>{
    DetailsCommandeController.getAllDetailsCommandes(request, result)});

router.get('/:id', authenticateController.adminMiddleware,(request, result)=>{
    DetailsCommandeController.getDetailsCommandeById(request, result)});

router.post('/',(request, result)=>{
    DetailsCommandeController.addDetailsCommande(request, result)});

router.patch('/:id', authenticateController.adminMiddleware,(request, result)=>{
    DetailsCommandeController.updateDetailsCommande(request, result)});

router.delete('/:id', authenticateController.adminMiddleware,(request, result)=>{
    DetailsCommandeController.deleteDetailsCommande(request, result)});

router.get('/commande/:id', (request, result) => {
    DetailsCommandeController.getDetailsCommandeByCommandeId(request, result)});

module.exports = router;