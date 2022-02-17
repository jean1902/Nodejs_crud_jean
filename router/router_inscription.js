
const express =require('express')
const router = express.Router();
// let jsonParser = bodyParser.json()
// let bodyParser= require('body-parser');
const db = require('../bd/dabase');
// let urlencodedParser = bodyParser.urlencoded({ extended: false })


// router.post('/',urlencodedParser,(req ,res)=>{
//     console.log(req.body)
//     let name =req.body.name;
//     let mail =req.body.mail;
//     let postal_code =req.body.postal_code;
//     let sexe =req.body.sexe;
//     let ville =req.body.ville;
//     let prenom =req.body.prenom;

//     console.log(req.body)

//     let sql = "INSERT INTO `user`(`id`, `Email`, `Sexe`, `Nom`, `Prenom`, `Jour`, `Annee`, `Mois`) VALUES ('[value-1]','jean@gmail.com','yve','bile',jojo','lundi','2022','fvrier')";
//     db.query( sql ,[email,Nom,Prenom,jour,Mois,id,Sexe,Annee],(err,result)=>{
//         console.log('bonjour');
//         if(!err){
//             res.redirect('/')
//         }else{
//             console.log('error 404' + result)
//             res.send('bonjour')
//         }
//     })


// })




router.get('/page_inscription' ,(req ,res)=>{
    res.render('../views/page_inscription')
})


module.exports =router;