const CategorieService = require ('../Services/CategorieService');

class CategorieController{
    async getAllCategories(request, result){
        try{
            const categories = await CategorieService.getAllCategories();
            result.json(categories);
        }catch(error){
            result.status(500);
            result.json({error : "Il y a eu un probleme lors de la recuperation des categories"})
        }
    }

    async getCategorieById(request, result){
        try{
            const categorie = await CategorieService.getCategorieById(request.params.id);
            result.json(categorie);
        } catch (error){
            result.status(500);
            result.json({error : "Il y a eu un probleme lors de la recuperation de la categorie"})
        }
    }

    async addCategorie(request, result){
        try{
            const categorie = await CategorieService.addCategorie(request.body);
            result.json(categorie);
        } catch (error){
            result.status(500);
            console.log(error);
            result.json({error : "Il y a eu un probleme lors de l'ajout de la categorie"})
        }
    }

    async updateCategorie(request, result){
        try{
            const categorie = await CategorieService.updateCategorie(request.params.id, request.body);
            result.json(categorie);
        } catch (error){
            result.status(500);
            result.json({error : "Il y a eu un probleme lors de la mise a jour de la categorie"})
        }
    }

    async deleteCategorie(request, result){
        try{
            const categorie = await CategorieService.deleteCategorie(request.params.id);
            result.json(categorie);
        } catch (error){
            result.status(500);
            result.json({error : "Il y a eu un probleme lors de la suppression de la categorie"})
        }
    }
}
module.exports = new CategorieController();