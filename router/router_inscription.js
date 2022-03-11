const express = require("express");
const router = express.Router();
let bodyParser = require("body-parser");
const database = require("../bd/dabase");
let jsonParser = bodyParser.json();
let urlencodedParser = bodyParser.urlencoded({ extended: false });
let control_inscription =require('../controllers/controllers_inscription');

//afficher la page d'inscription

router.get("/page_inscription", (req, res) => {
  res.render("../views/page_inscription");
});

// recuperer  les donnees du formulaire avec controlleur

router.post("/page_inscription", urlencodedParser,control_inscription.req_inscription );

// validation de formulaire

let { body, validationResult } = require("express-validator");
let { Request, Response } = require("express");

router.post(
  "/page_inscription",

  //Pour commencer, créons notre point de terminaison d'enregistrement d'utilisateur en ajoutant l'extrait de code suivant à notre

  
(req, res) => {
    // Validate incoming input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }


});

module.exports = router;
