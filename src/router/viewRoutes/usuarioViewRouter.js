import { Router } from "express";
import usuarioViewController from "../../controllers/usuario/usuarioViewController.js";

const router = Router();

router.get("/", usuarioViewController.getAll);

router.get("/new", usuarioViewController.createForm);

router.post("/", usuarioViewController.create);

router.get("/:id", usuarioViewController.getById);

router.get("/:id/update", usuarioViewController.updateForm);

router.post("/:id/update", usuarioViewController.update);

router.get("/:id/remove", usuarioViewController.remove);

export default router;