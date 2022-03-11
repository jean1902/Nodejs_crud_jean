const express =require('express')
const router = express.Router();

let var_index= class Index_Accueil{
    static display_index =(req ,res)=>{
        res.render('../views/index')
    }
}
module.exports=var_index;