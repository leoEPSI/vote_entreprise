const express = require('express');
const projet_controler = require('../controlers/projet_controler');

const projet_route = express.Router();

projet_route.get('/',projet_controler.list_projet);   // liste les 
projet_route.get('/:id',projet_controler.get_projet); // liste un projet
projet_route.put('/',projet_controler.add_projet);   // ajoute un projet
projet_route.delete('/:id',projet_controler.delete_projet); // supprime un projet

module.exports = projet_route;