const express = require('express');
const utilisateur_controler = require('../controlers/utilisateur_controler');

const utilisateur_route = express.Router();

utilisateur_route.get('/',utilisateur_controler.list_utilisateur);   // liste les 
utilisateur_route.get('/:id',utilisateur_controler.get_utilisateur); // liste un utilisateur
utilisateur_route.put('/',utilisateur_controler.add_utilisateur);   // ajoute un utilisateur
utilisateur_route.delete('/:id',utilisateur_controler.delete_utilisateur); // supprime un utilisateur

module.exports = utilisateur_route;