const Client = require ('../Models/Client');
const bcrypt = require('bcrypt');

class ClientService{
    async getAllClients(){
        return await Client.findAll();
    }

    async getClientById(client_id){
        return await Client.findByPk(client_id);
    }

    async addClient(client){
        return await Client.create(client);
    }

    async updateClient(id, client){
        return await Client.update(client, {where: {client_id: id},
        individualHooks : true 
        });
    }

    async deleteClient(id){
        return await Client.destroy({where: {client_id: id}});
    }
    
    async login(email, password){
        const client = await Client.findOne({where : {email : email}});
        // si mon client n'existe pas ou si le mdp de correspond pas 
        console.log(await client.validatePassword(password));
        if (!client || !await client.validatePassword(password)){
            throw new Error("Email ou Password incorrect");
        }
        return client;
    }

    async register({ nom, prenom, email, password }) {
        try {
            
            // Create a new client
            const newClient = await Client.create({
                nom,
                prenom,
                email,
                password
            });
            return newClient;
        } catch (error) {
            throw new Error("Une erreur est survenue lors de l'inscription");
        }
    }

    async isAdmin(client_id) {
        const client = await Client.findByPk(client_id);
        return client && client.role === 'administrateur';
    }
    
}

module.exports = new ClientService();