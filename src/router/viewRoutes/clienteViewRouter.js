import { Router } from "express";

import clienteViewController from "../../controllers/cliente/clienteViewController.js";

const router = Router();    

router.get("/", clienteViewController.getAll);

router.get("/new", clienteViewController.createForm);

router.post("/", clienteViewController.create);

router.get("/:id", clienteViewController.getById);

router.get("/:id/update", clienteViewController.updateForm); 

router.post("/:id", clienteViewController.update);

router.get("/:id/remove", clienteViewController.remove); 

export default router;