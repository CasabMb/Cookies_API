const Client = require ('../Models/Client');

class ClientService{
    async getAllClients(){
        return await Client.findAll();
    }

    async getClientById(user_id){
        return await Client.findByPk(user_id);
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
        if (!client || !await client.validatePassword(password)){
            throw new Error("Email ou Password incorrect");
        }
        return client;
    }
}

module.exports = new ClientService();