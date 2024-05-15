import { Router } from "express";

//import { getAll, getById, create, update, remove} from "../controllers/producto/productoViewController.js";

import { getAll } from "../controllers/producto/productoViewController.js";

const router = Router();    

router.get("/", getAll);

export default router;