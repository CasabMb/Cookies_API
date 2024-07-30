const CommentaireService = require('../Services/CommentaireService');

class CommentaireController{
    async getAllCommentaire(resquest, result){
        try{
            const commentaires = await CommentaireService.getAllCommentaire();
            result.json(commentaires);
        } catch (error){
            result.status(500);
            console.log(error);
            result.json({error : "Il y a eu un probleme lors de la recuperation des commentaires"});
        }
    }

    async getCommentaireById(request, result){
        try{
            const commentaire = await CommentaireService.getPaiemntById(request.params.id);
            result.json(commentaire);
        } catch (error){
            result.status(500);
            result.json({error : "Il y a eu un probleme lors de la recuperation du commentaire"})
        }
    }

    async addCommentaire(request, result){
        try{
            const commentaire = await CommentaireService.addCommentaire(request.body);
            result.json(commentaire);
        } catch (error){
            result.status(500);
            console.log(error);
            result.json({error : "Il y a eu un probleme lors de l'ajout du commentaire"})
        }
    }

    async updateCommentaire(request, result){
        try{
            const commentaire = await CommentaireService.updateCommentaire(request.params.id, request.body);
            result.json(commentaire);
        } catch (error){
            result.status(500);
            result.json({error : "Il y a eu un probleme lors de la mise a jour du commentaire"})
        }
    }

    async deleteCommentaire(request, result){
        try{
            const commentaire = await CommentaireService.deleteCommentaire(request.params.id);
            result.json(commentaire);
        } catch (error){
            result.status(500);
            result.json({error : "Il y a eu un probleme lors de la suppression du commentaire"})
        }
    }
}

module.exports = new CommentaireController();