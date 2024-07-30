const express = require ("express");

const clientRoutes = require('./Routes/ClientRoutes');
const categorieRoutes = require('./Routes/CategorieRoutes');
const commandeRoutes = require('./Routes/CommandeRoutes');
const produitRoutes = require('./Routes/ProduitRoutes');
const detailscommandesRoutes = require('./Routes/DetailsCommandeRoutes');
const paiementRoutes = require('./Routes/PaiementRoutes');
const livraisonRoutes = require('./Routes/LivraisonRoutes');
const commentaireRoutes = require('./Routes/CommentaireRoutes');



const app = express();

const port = 3001;

app.use(express.json()); // precise que notre API fonctionne avce du JSON


const cors = require('cors');
const authenticateController = require("./Controllers/authenticateController");
app.use(cors());   // const cors permet l'acces au ficher de l'exterieur (pour react)


// route pour la page d'accueil
app.get('/',(request, result) =>{
    result.send('hello world !!');
})

// routes pour afficher les tables
app.use('/clients', clientRoutes);
app.use('/categories', authenticateController.authenticateToken, categorieRoutes);
app.use('/commandes',authenticateController.authenticateToken, commandeRoutes);
app.use('/produits',authenticateController.authenticateToken, produitRoutes);
app.use('/detailscommandes',authenticateController.authenticateToken, detailscommandesRoutes);
app.use('/paiements',authenticateController.authenticateToken, paiementRoutes);
app.use('/livraisons', authenticateController.authenticateToken,livraisonRoutes);
app.use('/commentaires',authenticateController.authenticateToken, commentaireRoutes);




app.listen (port, () => {
    console.log(`Server is running on http://127.0.0.1:${port}`);
})