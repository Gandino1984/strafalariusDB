//importación nombrada solo del objeto Router de express
import dotenv from "dotenv";

dotenv.config();    

import { Router } from "express";

import apiRouter from "./apiRoutes/apiRouter.js";

import viewRouter from "./viewRoutes/viewRouter.js";

const router = Router();

router.use("/api", apiRouter);
router.use("/", viewRouter);

export default router;  

