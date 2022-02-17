
let mysql = require('mysql');
let db =mysql.createConnection({
    host:'localhost' ,
    user :'root',
    password:'',
    database:"bd_user",
    debug:false
})

module.exports =db;
