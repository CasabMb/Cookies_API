const express = require ('express');
const ClientController = require ('../Controllers/ClientController');
const AuthenticateController = require('../Controllers/authenticateController');
const authenticateController = require('../Controllers/authenticateController');

const router = express.Router();
router.get ('/', authenticateController.authenticateToken,(request, result)=>{
    ClientController.getAllClients(request, result)});

router.get ('/:id', authenticateController.authenticateToken,(request, result)=>{
    ClientController.getClientById(request, result)});

    router.post('/', authenticateController.authenticateToken,(request, result)=>{
        ClientController.addClient(request, result)});
    
    router.patch('/:id', authenticateController.authenticateToken,(request, result)=>{
        ClientController.updateClient(request, result)});
    
    router.delete('/:id', authenticateController.authenticateToken,(request, result)=>{
        ClientController.deleteClient(request, result)});

    router.post('/login', (request, result)=>{
        AuthenticateController.login(request, result)});



module.exports = router;