//importación nombrada solo del objeto Router de express
import { Router } from "express";

const router = Router();

import clienteViewRouter from "./clienteViewRouter.js"
import productoViewRouter from "./productoViewRouter.js"
import vendedorViewRouter from "./vendedorViewRouter.js"

import dotenv from "dotenv";

dotenv.config();    

router.use("/cliente", clienteViewRouter);
router.use("/producto", productoViewRouter)
router.use("/vendedor", vendedorViewRouter)

router.get("/", (req, res)=>{ 
    res.send("Hola " + process.env.APP_USERNAME + " El servidor de strafalariusDB está en marcha en el puerto = " + process.env.APP_PORT);
});

export default router;  