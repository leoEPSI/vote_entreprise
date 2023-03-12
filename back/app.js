const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const utilisateur_route = require('./routes/utilisateur_route');
const vote_route = require('./routes/vote_route');
const projet_route = require('./routes/projet_route');

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/vote', vote_route);
app.use('/user', utilisateur_route);
app.use('/projet', projet_route);

app.listen(port, ()=>{
    console.log("appli run on port http//localhost:"+port);
});