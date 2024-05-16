import { Router } from "express";
import usuarioApiController from "../../controllers/usuario/usuarioApiController.js";

const router = Router();

router.get("/", usuarioApiController.getAll);
router.get("/create", usuarioApiController.createForm);
router.post("/create", usuarioApiController.create);
router.get("/:id", usuarioApiController.getById);
router.get("/:id/update", usuarioApiController.updateForm);
router.post("/:id/update", usuarioApiController.update);
router.get("/:id/remove", usuarioApiController.remove);

export default router;