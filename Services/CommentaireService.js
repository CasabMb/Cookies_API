const Commentaire = require('../Models/Commentaire');

class CommentaireService{
    async getAllCommentaire(){
        return await Commentaire.findAll({include: ['Commandes', 'Clients']})
    }

    async getPaiemntById(commentaire_id){
        return await Commentaire.findByPk(commentaire_id, {include: ['Commandes', 'Clients']})
    }

    async addCommentaire(commentaire){
        return await Commentaire.create(commentaire);
    }

    async updateCommentaire(id, commentaire){
        return await Commentaire.update(commentaire, {where: {commentaire_id: id}});
    }

    async deleteCommentaire(id){
        return await Commentaire.destroy({where: {commentaire_id: id}});
    }
}

module.exports = new CommentaireService();