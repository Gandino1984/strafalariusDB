import { Router } from "express";
import usuarioViewController from "../../controllers/usuario/usuarioViewController.js";
import usuarioController from "../../controllers/usuario/usuarioController.js";

const router = Router();

router.get("/", usuarioViewController.getAll);

router.get("/new", usuarioViewController.createForm);

router.post("/create", usuarioViewController.create);

router.get("/:id", usuarioViewController.getById);

router.get("/:id/update", usuarioViewController.updateForm);

router.post("/:id", usuarioViewController.update);

router.get("/:id/remove", usuarioViewController.remove);

export default router;