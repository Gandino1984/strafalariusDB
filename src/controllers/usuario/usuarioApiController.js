import usuarioController from "./usuarioController.js";

async function getAll(req, res){
    const {error, data} = await usuarioController.getAll();
    res.json({error,data});
};

async function getById(req, res){
    const id = req.params.id;   
    const {error, data} = await usuarioController.getById(id);
    res.json({error,data});
}

async function create(req, res){
    const  {nombre_usuario, contraseña} = req.query;
    const {error,data} = await usuarioController.create(nombre_usuario, contraseña);
    res.json({error,data});
}

async function update(req, res){
    const id = req.params.id;
    const  {nombre_usuario, contraseña} = req.query;
    const {error,data} = await usuarioController.update(id, nombre_usuario, contraseña);
    res.json({error,data});
}

async function remove(req, res){
    const id = req.params.id;
    const {error,data} = await usuarioController.remove(id);
    res.json({error,data});
}

export {
    getAll,
    getById,
    create,
    update,
    remove
}

export default {
    getAll,
    getById,
    create,
    update,
    remove
}