import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/sequelize.js";

dotenv.config();

import router from "./router/router.js";

const app = express();

app.use(express.static("public"));

//middleware definir carpetas de las vistas
app.set("views","./src/views");
app.set("view engine","pug");

app.use(express.json()); // leer el body de llamadas POST y PUT tipo json (API)
app.use(express.urlencoded({extended:true})); //leer el body de llamadas POST y PUT tipo URL encoded (formularios)    

app.use("/", router);

app.listen(3000, ()=>{
    console.log("El servidor de la app está en marcha en el puerto = " + process.env.APP_PORT);
    console.log("El servidor del backend está en marcha en el puerto = " + process.env.MYSQL_PORT);
})
