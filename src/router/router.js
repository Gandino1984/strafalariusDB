//importación nombrada solo del objeto Router de express
import { Router } from "express";


import routerApi from "./apiRoutes/routerApi.js";
// import clienteRouter from "./apiRoutes/clienteApiRouter.js"

import dotenv from "dotenv";

const router = Router();

dotenv.config();    

router.use("/api", routerApi);

// router.get("/", (req, res)=>{ 
//     res.send("Hola " + process.env.APP_USERNAME + " El servidor de strafalariusDB está en marcha en el puerto = " + process.env.APP_PORT);
// });

export default router;  