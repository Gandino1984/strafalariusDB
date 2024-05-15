//importación nombrada solo del objeto Router de express
import { Router } from "express";

import { getAll, getById, create, update, remove} from "../controllers/cliente/clienteController.js";

import { getAll } from "../controllers/cliente/clienteViewController.js";

const router = Router();    

router.get("/", getAll);

export default router;