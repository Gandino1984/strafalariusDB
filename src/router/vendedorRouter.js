//importación nombrada solo del objeto Router de express
import { Router } from "express";

import { getAll, getById, create, update, remove} from "../controllers/vendedor/vendedorController.js";

import { getAll } from "../controllers/vendedor/vendedorViewController.js";

const router = Router();    

router.get("/", getAll);

export default router;