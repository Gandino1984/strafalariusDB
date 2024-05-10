import { Router } from "express";

import clienteViewController from "../../controllers/cliente/clienteViewController.js";

const router = Router();    

router.get("/", clienteViewController.getAll);
router.get("/create", clienteViewController.create);
router.get("/:id", clienteViewController.getById);
router.get("/:id/update", clienteViewController.update); 
router.get("/:id/remove", clienteViewController.remove); 


export default router;