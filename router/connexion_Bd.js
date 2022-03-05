const express =require('express')
const router = express.Router();
let db =require('../bd/dabase')


//verification de la connexion a a la base de donnee
db.connect(function (err) {
    if (err) {
      console.log(err);
      res.render('une erreur est survenue')
    } else {
      console.log("Connected!");
     }
    
  });

module.exports =router;