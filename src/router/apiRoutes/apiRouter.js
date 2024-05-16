//importación nombrada solo del objeto Router de express
import dotenv from "dotenv";

import { Router } from "express";

const router = Router();

import clienteApiRouter from "./clienteApiRouter.js";
import productoApiRouter from "./productoApiRouter.js";
import vendedorApiRouter from "./vendedorApiRouter.js";


dotenv.config();    

router.use("/cliente", clienteApiRouter);

router.use("/producto", productoApiRouter);

router.use("/vendedor", vendedorApiRouter );


//esto maneja la ruta root de la app 
router.get("/", (req, res)=>{ 
    res.send("Hola " + process.env.APP_USERNAME + " El servidor de strafalariusDB está en marcha en el puerto = " + process.env.APP_PORT);
});


export default router;  