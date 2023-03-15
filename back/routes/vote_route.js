const express = require('express');
const vote_controler = require('../controlers/vote_controler');

const vote_route = express.Router();

vote_route.get('/:id',vote_controler.list_vote);   // liste les 
//vote_route.get('/:id',vote_controler.get_vote); // liste un vote
vote_route.put('/',vote_controler.add_vote);   // ajoute un vote
vote_route.delete('/:id',vote_controler.delete_vote); // supprime un vote

module.exports = vote_route;