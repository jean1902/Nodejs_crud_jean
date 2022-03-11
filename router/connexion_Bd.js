const express =require('express')
const router = express.Router();
let db =require('../bd/dabase')
let controller_Connex =require('../controllers/controller_conex_bd');


//verification de la connexion a a la base de donnee
db.connect( controller_Connex.requette_bd);


module.exports =router;
