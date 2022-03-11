// introduire express

const express =require('express')
const router = express.Router()
const database =require('../bd/dabase');
let control_index_accueil =require('../controllers/controllers_index')


router.get('/',control_index_accueil.display_index)

// database.connect(function(error,result){
//     if(error) throw error;
//     console.log(result)
//     database.query("slect * from student" ,function(error,result){
//         if(error) throw error ;
//         console.log(result)
//     })
// })


module.exports =router;