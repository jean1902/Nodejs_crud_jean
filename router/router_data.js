
const express =require('express')
const router = express.Router()
let bodyParser = require('body-parser');
let jsonParser= bodyParser.json()
let urlencodedParser = bodyParser.urlencoded({extended:false});
let db = require('../bd/dabase')

// routes

router.get('/data' ,(req,res)=>{

    
    console.log("donnee_de la bd")
  
    let sql= "SELECT * FROM `user`"; 
    
    db.query(sql,[],(err,result)=>{
       console.log('bonjour ');
        if (err) { 
            console.log("ERREUR",err);   
            // res.send('bonjour') 
            
        } else {
            console.log("success",result);
            res.render('../views/data',{data:result})
        }
   })
   
})



router.get('/delete',(req,res)=>{
    db.query(`DELETE  FROM user WHERE id = ?`, [req.query.id],(error,resl)=>{
        if (error) {
            console.log('eeeeeee',error);
        } else {
            console.log('eeeeerrrrrr',resl);
            res.redirect('/data')
        }
    })
})

router.get('/edit',(req,res)=>{
    db.query(`SELECT * FROM user WHERE id = ?`,[req.query.id],(error,result)=>{
        if (error) {
            console.log('eeeeeee',error);
        } else {
            res.render('../views/index',{data:result[0]});
            console.log("eeerfftt",result[0]);
        }
    })
})
module.exports =router;