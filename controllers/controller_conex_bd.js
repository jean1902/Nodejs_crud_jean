
const express =require('express')
const router = express.Router();


let var_connex =class connexion{

    static  requette_bd = function (err) {
        if (err) {
          console.log(err);
          res.render('une erreur est survenue');
        } else {
          console.log("Connected!");
         }
        }    

}
module.export =  var_connex;