// introduire express

const express =require('express')
const router = express.Router()

// routes
//recuperer les infos modifier dans le crud et les envoyer dans la base de donneees

router.get('/form_edit' ,(req ,res,next)=>{
    res.render('../views/form_edit', {data: {} })
})


module.exports =router;