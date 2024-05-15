//importación nombrada solo del objeto Router de express
import { Router } from "express";

import dotenv from "dotenv";
dotenv.config();    

const router = Router();

import clienteViewRouter from "./clienteViewRouter.js"
import productoViewRouter from "./productoViewRouter.js"
import vendedorViewRouter from "./vendedorViewRouter.js"


router.use("/cliente", clienteViewRouter);
router.use("/producto", productoViewRouter);
router.use("/vendedor", vendedorViewRouter);

router.get("/", (req, res)=>{ 
    res.send("La " + process.env.APP_HOST  + " está en marcha en el puerto " + process.env.APP_PORT + "<br><br>INFORMACIÓN GENERAL:<br>Tu usuario es: " + process.env.APP_USERNAME + "<br>BD: Mysql - " + process.env.MYSQL_DATABASE + " en el puerto: " + process.env.MYSQL_PORT);
    // res.send( + " el puerto de conexión es el " + process.env.APP_PORT);
});

export default router;  