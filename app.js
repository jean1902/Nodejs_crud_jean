const express = require('express')
const App = express();
const Port = 9000;



App.set('views','./views')
App.set('view engine','ejs')
App.use('/Public', express.static('public'))

App.get('/' ,function(req ,res){
    // res.send('index jouqeyvfbnn')
    res.render('index')
})
App.get('/page_contact' ,function(req ,res){
    // res.send('index jouqeyvfbnn')
    res.render('page_contact')
})
App.get('/page_inscription' ,function(req ,res){
    // res.send('index jouqeyvfbnn')
    res.render('page_inscription')
})

App.listen( Port , ()=>{
    console.log(`listening on port ${Port}`)
})
