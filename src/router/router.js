//importación nombrada solo del objeto Router de express
import { Router } from "express";


import routerApi from "./apiRoutes/apiRouter.js";

import dotenv from "dotenv";

const router = Router();

dotenv.config();    

router.use("/api", routerApi);

export default router;  
