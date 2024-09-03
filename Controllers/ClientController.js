const ClientService = require ('../Services/ClientService');

class ClientController{
    async getAllClients(request, result){
        try{
            const clients = await ClientService.getAllClients();
            result.json (clients);
        } catch (error) {
            console.log(error);
            result.status (500);
            result.json ({error: "Il y a eu un probleme lors de la recuperation des Clients"})
        }
    }

    async getClientById(request, result){
        try{
            const client = await ClientService.getClientById(request.params.id);
            result.json (client);
        } catch (error) {
            result.status (500);
            console.log(error);
            result.json ({error: "Il y a eu un probleme lors de la recuperation du client"})
        }
    }

    async addClient(request, result){
        try{
            const client = await ClientService.addClient(request.body);
            result.json(client);
        } catch (error){
            result.status(500);
            console.log(error);
            result.json({error : "Il y a eu un probleme lors de l'ajout de la client"})
        }
    }

    async updateClient(request, result){
        try{
            const client = await ClientService.updateClient(request.params.id, request.body);
            result.json(client);
        } catch (error){
            result.status(500);
            result.json({error : "Il y a eu un probleme lors de la mise a jour du client",details: error.message })
        }
    }

    async deleteClient(request, result){
        try{
            const client = await ClientService.deleteClient(request.params.id);
            result.json(client);
        } catch (error){
            result.status(500);
            result.json({error : "Il y a eu un probleme lors de la suppression du client"})
        }
    }
    
    async checkAdmin(request, result) {
        try {
            const clientId = request.params.id;
            const isAdmin = await ClientService.isAdmin(clientId);
            result.json({ isAdmin });
        } catch (error) {
            result.status(500);
            result.json({ error: "Erreur lors de la vérification du rôle d'administrateur" });
        }
    }
    
}

module.exports = new ClientController();