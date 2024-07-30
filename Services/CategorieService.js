const Categorie = require ('../Models/Categorie');

class CategorieService{
    async getAllCategories(){
        return await Categorie.findAll();
    }

    async getCategorieById(categorie_id){
        return await Categorie.findByPk(categorie_id);
    }

    async addCategorie(categorie){
        return await Categorie.create(categorie);
    }

    async updateCategorie(id, categorie){
        return await Categorie.update(categorie, {where: {categorie_id: id}});
    }

    async deleteCategorie(id){
        return await Categorie.destroy({where: {categorie_id: id}});
    }
}

module.exports = new CategorieService();