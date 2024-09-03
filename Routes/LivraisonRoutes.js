const express = require ('express');
const LivraisonController = require('../Controllers/LivraisonController');
const authenticateController = require('../Controllers/authenticateController');

const router = express.Router();

router.get('/', authenticateController.adminMiddleware,(request, result)=>{
    LivraisonController.getAllLivraison(request, result)});

router.get('/:id',(request, result)=>{
    LivraisonController.getLivraisonById(request, result)});
    
router.post('/',(request, result)=>{
    LivraisonController.addLivraison(request, result)});

router.patch('/:id',(request, result)=>{
    LivraisonController.updateLivraison(request, result)});

router.delete('/:id', authenticateController.adminMiddleware,(request, result)=>{
    LivraisonController.deleteLivraison(request, result)});

module.exports = router;