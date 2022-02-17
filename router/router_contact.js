// introduire express

const express =require('express')
const router = express.Router()

// routes

router.get('/page_contact' ,(req ,res)=>{
    res.render('../views/page_contact')
})

module.exports =router;