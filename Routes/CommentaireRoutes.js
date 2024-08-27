const express = require ('express');
const CommentaireController = require('../Controllers/CommentaireController');
const authenticateController = require('../Controllers/authenticateController');

const router = express.Router();

router.get('/',(request, result)=>{
    CommentaireController.getAllCommentaire(request, result)});

router.get('/:id',(request, result)=>{
    CommentaireController.getCommentaireById(request, result)});

router.post('/',authenticateController.authenticateToken,(request, result)=>{
    CommentaireController.addCommentaire(request, result)});

router.patch('/:id',authenticateController.authenticateToken,(request, result)=>{
    CommentaireController.updateCommentaire(request, result)});

router.delete('/:id',authenticateController.authenticateToken,(request, result)=>{
    CommentaireController.deleteCommentaire(request, result)});

module.exports = router;