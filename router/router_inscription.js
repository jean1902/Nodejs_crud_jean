const express = require("express");
const router = express.Router();
let bodyParser = require("body-parser");
const database = require("../bd/dabase");
let jsonParser = bodyParser.json();
let urlencodedParser = bodyParser.urlencoded({ extended: false });
let control_inscription =require('../controllers/controllers_inscription');

//afficher la page d'inscription

router.get("/page_inscription", (req, res) => {
  res.render("../views/page_inscription" , {alert:{}});
});

// recuperer  les donnees du formulaire avec controlleur

router.post("/page_inscription", urlencodedParser,control_inscription.req_inscription );

// validation de formulaire

let { body, validationResult } = require("express-validator");
let { Request, Response } = require("express");



router.post(
  "/page_inscription",

  //Pour commencer, créons notre point de terminaison d'enregistrement d'utilisateur en ajoutant l'extrait de code suivant à notre

(req, res,next) => {
    // Validate incoming input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
       const err = errors.mapped()
       console.log('voila',err ); 
       res.render('index',{alert:err})
    }
    
const schema =[
  body('Nom')
  .not()
  .isEmpty()
  .trim()
  .escape()
  .bail()
  .withMessage('Nom ne peut pas être vide')
  .isLength({min:5 , max:10})
  .withMessage('Minimun 5 caractères obligatoires'),
body('prenom')
  .not()
  .isEmpty()
  .trim()
  .escape()
  .bail()
  .withMessage('Prenom ne peut pas être vide')
  .isLength({min:5 , max:10})
  .withMessage('Minimun 5 prenom caractères obligatoires'),
body('email')
  .notEmpty()
  .withMessage('e-mail est requis'),
body('email')
  .isEmail()
  .withMessage('email non valide'),
body('code')
  .isLength({ min: 10 })
  .withMessage('Le numero de téléphone doit etre de 10 chiffres'),
body('code')
  .notEmpty()
  .withMessage('numero obligatoire'),
// body('numero')
//     .isMobilePhone('id-ID')
//     .withMessage('Numero non valide')

]
      
} );


// router.post('/page_inscription', (req,res)=>{
  

// console.log('hello')

//   var nodemailer = require('nodemailer');
  
//   var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'jeantiero41@gmail.com',
//       pass: 'jeanrodolphe2018'
//     }
//   });
  
//   var mailOptions = {
//     from: 'jeantiero41@gmail.com',
//     to: req.body.email,
//     subject: 'Sending Email using Node.js',
//     html: '<h1>That was easy!</h1>'
//   };
  
//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });
  
//   })

module.exports = router;
