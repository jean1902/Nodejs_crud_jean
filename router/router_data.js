
const express =require('express')
const router = express.Router()
let bodyParser = require('body-parser');
let jsonParser= bodyParser.json()
let urlencodedParser = bodyParser.urlencoded({extended:false});
let control_data_router =require('../controllers/controllers_routerData')
let db = require('../bd/dabase')

// routes

router.get('/data' , control_data_router.req_data_router)


/// supprimer les donnes du crud
router.get('/delete',(req,res)=>{
    db.query(`DELETE  FROM user WHERE id = ?`, [req.query.id],(error,result)=>{
        if (error) {
            console.log('eeeeeee',error);
        } else {
            console.log('eeeeerrrrrr',result);
            res.redirect('/data')
        }
    })
})

//faire afficher les donne su

router.get('/edit',(req,res)=>{
    db.query(`SELECT * FROM user WHERE id = ?`,[req.query.id],(error,result)=>{
        if (error) {
            console.log('eeeeeee',error);
        } else {
            res.render('../views/form_edit',{data:result[0]});
            console.log("eeerfftt",result[0]);
        }
    })
})

// router.post('/form_edit', function(req,res,next){
//     db.query(`UPDATE user SET ? WHERE id =${id}`, req.body ,function(error,result){
//         res.send('insertion avec succes')
//     })
// })

router.post('/form_edit', function(req,res,next){

let {Nom,prenom,email,sexe,ville,code} = req.body
let sql ='UPDATE user SET Nom=?,prenom=?,email=?,sexe=?,ville=?,code=? WHERE id =?'
    db.query(sql,[Nom ,prenom,email,sexe,ville,code,req.params.id] ,function(error,result){
      if(error){
        console.log
      } else{
        res.redirect('/data');
        //aller a la page de selection
      }
      
    })
})


module.exports =router;