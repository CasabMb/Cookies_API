const ClientService = require ('../Services/ClientService');
const jwt = require ('jsonwebtoken');
const config = require('../config/config.json')


class AuthenticateController{

    async login(request, result){
        try{
            // destructuration on recupere ce qui nous interesse
            const {email, password} = request.body;
            const client = await ClientService.login(email, password);
            result.json({token: this.generateToken(client)});
        } catch (error) {
            result.status(500);
            console.log(error);
            result.json({error: "Une erreur est survenue lors de la connexion"})
        }
    }


    generateToken(client){
        const payload = {
            id: client.client_id,
            email: client.email,
            // client: client.nom + " " + client.prenom
        }
        return jwt.sign(payload, config.secret,{expiresIn: '2h'})
    }


    authenticateToken(request, result, next){
        const autHeader = request.headers['authorization'];
        const token = autHeader && autHeader.split(' ')[1];
        if (!token) {
            result.status(401)
            return result.json({error: "Vous n'etes pas autorisé a acceder a cette route"})
        }
    jwt.verify(token, config.secret,(error, client)=>{
        if (error){
            result.status(401);
            return result.json({error : "Votre token n'est pas valide"})
        }
        request.client = client;
        next();
        })
    }

}

module.exports = new AuthenticateController();
