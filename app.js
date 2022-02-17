const express = require("express");
const App = express();
const Port = 9000;
const router = require("./router/routerIndex");
const router_contact = require("./router/router_contact");
const router_inscription = require("./router/router_inscription");
let database = require("./bd/dabase");
const res = require("express/lib/response");

database.connect(function (err) {
  if (err) {
    console.log(err);
    res.send('une erreur est survenue')
  } else {
    console.log("Connected!");
    App.use("/", router);
    App.use("/", router_contact);
    App.use("/", router_inscription);
  }
  database.query("SHOW DATABASES");
});

//   database.query('SHOW DATABASES', (error) => {
//     database.connect(function(error) {
//          if(error){
//             console.log('une erreur est survenue')
//          } else{
//              console.log('connexion Bd etablie')
//          }
//           });

//   })

App.set("views", "./views");
App.set("view engine", "ejs");
App.use("/Public", express.static("public"));
// App.use("/", router);
// App.use("/", router_contact);
// App.use("/", router_inscription);

// let bodyParser= require('body-parser');
// App.use(bodyParser.json())
// App.use(bodyParser.urlencoded({extended:true}));

// App.get('/router/router.inscription', function(req,res){
//     res.sendFile(__dirname+'../router/router_inscription')
// })
// App.post('/router/router_inscription' ,function(req ,res){
//     console.log(req.body)
//     let name =req.body.name;
//     let mail =req.body.mail;
//     let postal_code =req.body.postal_code;
//     let sexe =req.body.sexe;
//     let ville =req.body.ville;
//     let prenom =req.body.prenom;

// })

App.listen(Port, () => {
  console.log(`listening on port ${Port}`);
});
