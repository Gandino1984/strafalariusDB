import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/sequelize.js";

dotenv.config();

import router from "./router/router.js";

const app = express();

// app.use(express.static("public"));

//middleware definir carpetas de las vistas
app.set("views","./src/views");
app.set("view engine","pug");

//middleware
app.use(express.json()); // leer el body de llamadas POST y PUT tipo json (API)
app.use(express.urlencoded({extended:true})); //leer el body de llamadas POST y PUT tipo URL encoded (formularios)    


//creación de los middlewares. La peticiṕon llega a index.js y aquí se la enviamos al router
//el router decidirá a cuál de los "sub-routers" de tabla nos redirigirá según la ruta de la petición
app.use("/", router);
// res.json({error,data});

app.listen(3000, ()=>{
    console.log("El servidor de la app está en marcha en el puerto = " + process.env.APP_PORT);
    console.log("El servidor del backend está en marcha en el puerto = " + process.env.MYSQL_PORT);
})
