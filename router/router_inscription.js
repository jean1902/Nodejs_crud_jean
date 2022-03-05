
const express =require('express')
const router = express.Router();
let bodyParser = require('body-parser');
const database = require('../bd/dabase');
let jsonParser= bodyParser.json()
let urlencodedParser = bodyParser.urlencoded({extended:false});

//afficher la page d'inscription

router.get('/page_inscription' ,(req ,res)=>{
    res.render('../views/page_inscription')
})

// recuperer 
router.post('/page_inscription',  urlencodedParser,(req,res) =>{

    let {Nom,prenom,email,sexe,ville,code } =req.body
    console.log("donnee_du formulaire",req.body)
  
    let sql= "INSERT INTO `user` (`Nom`, `prenom`, `email`, `sexe`,`ville`,`code`) VALUES (?,?,?,?,?,?)"; 
    
    database.query(sql,[Nom,prenom,email,sexe,ville,code],(err,result)=>{
       console.log('bonjour ');
        if (err) { 
            console.log("ERREUR",err);   
            // res.send('bonjour') 
            
        } else {
            console.log("success",result);
         res.redirect('data')
        }
   })
  });
  
  



module.exports =router;