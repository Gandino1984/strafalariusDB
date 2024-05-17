import usuarioController from "./usuarioController.js";

async function getAll(req, res){
    const {error, data} = await usuarioController.getAll();
    res.render("usuario/list", {error, data});
}

async function getById(req, res){
    const id = req.params.id;   
    const {error, data} = await usuarioController.getById(id);
    res.render("usuario/show", {error, usuario: data});
}

async function createForm(req, res){
    res.render("usuario/new");
}

async function create(req, res){
    const  {nombre_usuario, password_usuario} = req.query;
    const {error, data} = await usuarioController.create(nombre_usuario, password_usuario);
    res.redirect("/usuario");
}   

async function updateForm(req, res){
    const id = req.params.id;
    const usuario = await usuarioController.getById(id); 
    res.render("usuario/update", {usuario});
}

async function update(req, res){
    const id = parseInt(req.params.id);
    const  {nombre_usuario, password_usuario} = req.body;
    const {error, data} = await usuarioController.update(id, nombre_usuario, password_usuario);
    res.redirect("/usuario");
}

async function remove(req, res){
    const id = parseInt(req.params.id);
    const {error, data} = await usuarioController.remove(id, nombre_usuario, password_usuario);
    res.redirect("/usuario");
}

export {
    getAll,
    getById,
    create,
    createForm,
    update,
    updateForm,
    remove    
}

export default {
    getAll,
    getById,
    create,
    createForm,
    update,
    updateForm,
    remove    
}