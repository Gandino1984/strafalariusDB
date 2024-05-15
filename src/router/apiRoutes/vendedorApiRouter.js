import { Router } from "express";

import vendedorApiController from "../../controllers/vendedor/vendedorApiController.js";

const router = Router();    

router.get("/", vendedorApiController.getAll);
router.get("/create", vendedorApiController.create);
router.get("/:id", vendedorApiController.getById);
router.get("/:id/update", vendedorApiController.update); 
router.get("/:id/remove", vendedorApiController.remove); 

export default router;