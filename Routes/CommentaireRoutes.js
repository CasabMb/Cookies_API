const express = require ('express');
const CommentaireController = require('../Controllers/CommentaireController');

const router = express.Router();

router.get('/',(request, result)=>{
    CommentaireController.getAllCommentaire(request, result)});

router.get('/:id',(request, result)=>{
    CommentaireController.getCommentaireById(request, result)});

router.post('/',(request, result)=>{
    CommentaireController.addCommentaire(request, result)});

router.patch('/:id',(request, result)=>{
    CommentaireController.updateCommentaire(request, result)});

router.delete('/:id',(request, result)=>{
    CommentaireController.deleteCommentaire(request, result)});

module.exports = router;