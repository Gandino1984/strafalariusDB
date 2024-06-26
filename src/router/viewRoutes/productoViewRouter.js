import { Router } from "express";

import productoViewController from "../../controllers/producto/productoViewController.js";

const router = Router();    

router.get("/", productoViewController.getAll);

router.get("/new" , productoViewController.createForm);

router.get("/create", productoViewController.create);

router.get("/:id", productoViewController.getById);

router.get("/:id/update", productoViewController.updateForm); 

router.get("/:id", productoViewController.update); 

router.get("/:id/remove", productoViewController.remove); 

export default router;