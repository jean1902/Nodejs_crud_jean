const express =require('express')
const router = express.Router();
let db_controllers_router = require('../bd/dabase')

let var_router_data = class data_router{

    static req_data_router=(req,res)=>{

    
        console.log("donnee_de la bd")
      
        let sql= "SELECT * FROM `user`"; 
        
        db_controllers_router.query(sql,[],(err,result)=>{
           console.log('bonjour ');
            if (err) { 
                console.log("ERREUR",err);   
                // res.send('bonjour') 
                
            } else {
                console.log("success",result);
                res.render('../views/data',{data:result})
            }
       })
       
    }
}
module.exports= var_router_data;