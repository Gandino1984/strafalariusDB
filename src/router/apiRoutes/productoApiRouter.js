import { Router } from "express";

import productoApiController from "../../controllers/producto/productoApiController.js";

const router = Router();    

router.get("/", productoApiController.getAll);
router.get("/create", productoApiController.create);
router.get("/:id", productoApiController.getById);
router.get("/:id/update", productoApiController.update); 
router.get("/:id/remove", productoApiController.remove); 

export default router;