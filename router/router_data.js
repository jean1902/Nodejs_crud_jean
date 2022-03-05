
const express =require('express')
const router = express.Router()
let bodyParser = require('body-parser');
let jsonParser= bodyParser.json()
let urlencodedParser = bodyParser.urlencoded({extended:false});

// routes

router.get('/data' ,(req,rows,fields)=>{
    res.render('../views/data',{data:rows})
})
router.post('/data',  urlencodedParser,(req,res) =>{

    let {Nom,prenom,email,sexe,ville,code } =req.body
    console.log("donnee_du formulaire",req.body)
  
    let sql= "SELECT * FROM `user` (`Nom`, `prenom`, `email`, `sexe`,`ville`,`code`) "; 
    
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