import { Router } from "express";

import clienteApiController from "../../controllers/cliente/clienteApiController.js";

const router = Router();    

router.get("/", clienteApiController.getAll);
router.get("/create", clienteApiController.create);
router.get("/:id", clienteApiController.getById);
router.get("/:id/update", clienteApiController.update); 
router.get("/:id/remove", clienteApiController.remove); 

export default router;