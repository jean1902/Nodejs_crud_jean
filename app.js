const express = require("express");
const App = express();
const Port = 9000;
const router = require("./router/routerIndex");
const router_contact = require("./router/router_contact");
const router_inscription = require("./router/router_inscription");
const router_connexion = require('./router/connexion_Bd');
const router_data =require('./router/router_data');
const router_form_edit =require('./router/router_form_edit')

const router_multer_ = require('multer')
const res = require("express/lib/response");


App.use("/", router);
App.use("/", router_contact);
App.use("/", router_inscription);
App.use("/", router_connexion);
App.use("/", router_data);
App.use("/",router_form_edit)



App.set("views", "./views");
App.set("view engine", "ejs");
App.use("/Public", express.static("public"));


App.listen(Port, () => {
  console.log(`listening on port ${Port}`);
});

