
const ClientService = require('../Services/ClientService');
const jwt = require('jsonwebtoken');
const config = require('../config/config.json');
const Client = require('../Models/Client');
// const bcrypt = require('bcrypt');

class AuthenticateController {
    async login(request, result) {
        try {
            const { email, password } = request.body;
            if (!email || !password) {
                return result.status(400).json({ error: "Email et mot de passe requis" });
            }
            const client = await ClientService.login(email, password);
            if (!client) {
                return result.status(401).json({ error: "Identifiants incorrects" });
            }
            // result.json({token : this.generateToken(client)});

            const token = this.generateToken(client);
            return result.json({ token });
        } catch (error) {
            console.error('Error in login method:', error);
            return result.status(500).json({ error: "Une erreur est survenue lors de la connexion" });
        }
    }

    async register(request, result) {
        try {
            const { nom, prenom, email, password, date_inscription  } = request.body;

            if (!nom || !prenom || !email || !password) {
                return result.status(400).json({ error: "Tous les champs sont requis" });
            }

            const existingClient = await Client.findOne({ where: { email } });
            if (existingClient) {
                return result.status(400).json({ error: 'Cet email est déjà utilisé.' });
            }

            const newClient = await Client.create({
                nom,
                prenom,
                email,
                password,
                date_inscription
            });

            return result.status(201).json(newClient);
        } catch (error) {
            console.log(error);
            return result.status(500).json({ error: "Une erreur est survenue lors de l'inscription" });
        }
    }

    generateToken(client) {
        const payload = {
            id: client.client_id,
            email: client.email,
            role: client.role
        };
        return jwt.sign(payload, config.secret, { expiresIn: '2h' });
    }

    authenticateToken(request, result, next) {
        const authHeader = request.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            return result.status(401).json({ error: "Vous n'êtes pas autorisé à accéder à cette route."  });
        }

        jwt.verify(token, config.secret, (error, client) => {
            if (error) {
                return result.status(401).json({ error: "Votre token n'est pas valide" });
            }
            request.client = client;
            next();
        });
    }
    
    adminMiddleware = (request, result, next) => {
        if (request.client.role !== 'administrateur') {
            return result.status(403).json({ error: "Accès interdit" });
        }
        next();
    }
    
}

module.exports = new AuthenticateController();
