//importación nombrada solo del objeto Router de express
import { Router } from "express";

<<<<<<< HEAD
import { getAll, getById, create, update, remove} from "../controllers/cliente/clienteController.js";
=======
// import { getAll, getById, create, update, remove} from "../controllers/cliente/clienteController.js";
>>>>>>> f816ae54b87da2b2bfb9702a9f45d750f7db779c

import { getAll } from "../controllers/cliente/clienteViewController.js";

// import dotenv from "dotenv";

const router = Router();    

router.get("/", getAll);

// router.get("/:id", async (req,res)=>{
//     const id = req.params.id;
//     const result = await getById(id);
//     res.send(result);
// });

export default router;