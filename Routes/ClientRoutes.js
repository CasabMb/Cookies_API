const express = require ('express');
const ClientController = require ('../Controllers/ClientController');
const authenticateController = require('../Controllers/authenticateController');

const router = express.Router();
router.get ('/', authenticateController.authenticateToken, authenticateController.adminMiddleware,(request, result)=>{
    ClientController.getAllClients(request, result)});

router.get ('/:id', authenticateController.authenticateToken,(request, result)=>{
    ClientController.getClientById(request, result)});

    router.post('/',(request, result)=>{
        ClientController.addClient(request, result)});
    
    router.patch('/:id', authenticateController.authenticateToken,(request, result)=>{
        ClientController.updateClient(request, result)});
    
    router.delete('/:id', authenticateController.authenticateToken,(request, result)=>{
        ClientController.deleteClient(request, result)});

    router.post('/login', (request, result)=>{
        authenticateController.login(request, result)});
    
    router.post('/register', (request, result)=>{
        authenticateController.register(request, result)});

module.exports = router;