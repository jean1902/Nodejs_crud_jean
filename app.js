const express = require("express");
const App = express();
const bodyParser =require('body-parser')
const Port = 9000;
const router = require("./router/routerIndex");
const router_contact = require("./router/router_contact");
const router_inscription = require("./router/router_inscription");
const router_connexion = require('./router/connexion_Bd');
const router_data =require('./router/router_data');
const router_form_edit =require('./router/router_form_edit')
const send_mail =require('./router/send_mail')

const mysql =require("mysql");

//--------------------//
//creer une session codegrepper

// npm i express-session	//On Hyper/CMD

// const session = require('express-session');	//To Acquire it

// app.use(session({ 		//Usuage
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true }
// }));

// app.use(express.session(
//   { secret: "secret", store: new MemoryStore(), expires: new Date(Date.now() + (30 * 86400 * 1000)) 
//   }));

//---------------------//

// To remove only one session
//sessionStorage.removeItem('itemName'); 
// To remove all sessions 
//sessionStorage.clear();  

const router_multer_ = require('multer')
const res = require("express/lib/response");


App.use("/", router);
App.use("/", router_contact);
App.use("/", router_inscription);
App.use("/", router_connexion);
App.use("/", router_data);
App.use("/",router_form_edit);
App.use(bodyParser.urlencoded({ extended: false })); 
App.use(bodyParser.json())
App.use("/", send_mail)




App.set("views", "./views");
App.set("view engine", "ejs");
App.use("/Public", express.static("public"));


App.listen(Port, () => {
  console.log(`listening on port ${Port}`);
});


//cle etrangere
// CREATE TABLE Detenir_comp (
//   id_detenir_comp int NOT NULL,
//   PRIMARY KEY (id_detenir_comp),
//   FOREIGN KEY (id_acteur) REFERENCES acteurs(id_acteur),
//    FOREIGN KEY (id_comp_acteur) REFERENCES acteurs(id_comp_acteur)
// );
