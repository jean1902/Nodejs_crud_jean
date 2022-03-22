
const express =require('express')
const router = express.Router();
const mysql = require('mysql');
const session =require('express-session')
//const mysql_store =require("express-mysql-session")(session)

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
// session nodejs
//
//var SessionConnexion =mysql.createConnection(var_connex);
//var sessionStore = new mysql_store; 



module.export =  var_connex;