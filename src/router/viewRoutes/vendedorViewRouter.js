import { Router } from "express";

import vendedorViewController from "../../controllers/vendedor/vendedorViewController.js";

const router = Router();    

router.get("/", vendedorViewController.getAll);

router.get("/new", vendedorViewController.createForm);

router.get("/create", vendedorViewController.create);

router.get("/:id", vendedorViewController.getById);

router.get("/:id/update", vendedorViewController.updateForm); 

router.get("/:id", vendedorViewController.update); 

router.get("/:id/remove", vendedorViewController.remove); 

export default router;