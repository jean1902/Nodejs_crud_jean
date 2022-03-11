
const express =require('express')
const router = express.Router();
let db_controller =require('../bd/dabase')
let var_inscription =class inscription_page{
    static req_inscription =(req, res) => {
        let { Nom, prenom, email, sexe, ville, code } = req.body;
        console.log("donnee_du formulaire", req.body);
      
        let sql =
          "INSERT INTO `user` (`Nom`, `prenom`, `email`, `sexe`,`ville`,`code`) VALUES (?,?,?,?,?,?)";
      
          db_controller.query(
          sql,
          [Nom, prenom, email, sexe, ville, code],
          (err, result) => {
            console.log("bonjour ");
            if (err) {
              console.log("ERREUR", err);
              // res.send('bonjour')
            } else {
              console.log("success", result);
              res.redirect("data");
            }
          }
        );
      }
}
module.exports=var_inscription;