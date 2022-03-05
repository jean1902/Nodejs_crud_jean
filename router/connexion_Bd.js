const express =require('express')
const router = express.Router();
let db =require('../bd/dabase')

db.connect(function (err) {
    if (err) {
      console.log(err);
      res.send('une erreur est survenue')
    } else {
      console.log("Connected!");
     }
    
  });

module.exports =router;