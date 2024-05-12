import clienteController from "./clienteController.js";

async function getAll(req, res){
    const {error, data} = await clienteController.getAll();
    res.render("cliente/list", {error,data});
};

async function getById(req, res){
    const id = req.params.id;   
    const {error, data} = await clienteController.getById(id);
    res.render("cliente/show", {error,cliente:data});
}

async function createForm(req, res){
    res.render("cliente/new");
}

async function create(req, res){
    const  {nombre_cliente, apellido_cliente, telefono_cliente, email_cliente, direccion_cliente, membresia_cliente} = req.body;
    const {error,data} = await clienteController.create(nombre_cliente, apellido_cliente, telefono_cliente, email_cliente, direccion_cliente, membresia_cliente);
    res.json({error,data});
    // res.redirect("/cliente");
}   

async function updateForm(req, res){
    const id = req.params.id;
    const cliente = await clienteController.getById(id); 
    res.render("cliente/update", {cliente});
}

async function update(req, res){
    const id = parseInt(req.params.id);
    const  {nombre_cliente, apellido_cliente, telefono_cliente, email_cliente, direccion_cliente, membresia_cliente} = req.body;
    const {error,data} = await clienteController.update(id, nombre_cliente, apellido_cliente, telefono_cliente, email_cliente, direccion_cliente, membresia_cliente);
    res.redirect("/cliente");
}

async function remove(req, res){
    const id = parseInt(req.params.id);
    const {error,data} = await clienteController.remove(id, nombre_cliente, apellido_cliente, telefono_cliente, email_cliente, direccion_cliente, membresia_cliente);
    res.redirect("/cliente");
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

export default{
    getAll,
    getById,
    create,
    createForm,
    update,
    updateForm,
    remove    
}