// introduire express

const express =require('express')
const router = express.Router()
const database =require('../bd/dabase')


router.get('/' ,(req ,res)=>{
    res.render('../views/index')
})

// database.connect(function(error,result){
//     if(error) throw error;
//     console.log(result)
//     database.query("slect * from student" ,function(error,result){
//         if(error) throw error ;
//         console.log(result)
//     })
// })


module.exports =router;