import clienteController from "./clienteController.js";

async function getAll(req, res){
    const {error, data} = await clienteController.getAll();
    res.json({error,data});
};

async function getById(req, res){
    const id = req.params.id;   
    const {error, data} = await clienteController.getById(id);
    res.json({error,data});
}


async function create(req, res){
    const  {nombre_cliente, apellido_cliente, telefono_cliente, email_cliente, direccion_cliente, membresia_cliente} = req.query;
    const {error,data} = await clienteController.create(nombre_cliente, apellido_cliente, telefono_cliente, email_cliente, direccion_cliente, membresia_cliente);
    res.json({error,data});
}


async function update(req, res){
    const id = req.params.id;
    const  {nombre_cliente, apellido_cliente, telefono_cliente, email_cliente, direccion_cliente, membresia_cliente} = req.query;
    const {error,data} = await clienteController.update(id, nombre_cliente, apellido_cliente, telefono_cliente, email_cliente, direccion_cliente, membresia_cliente);
    res.json({error,data});
}

async function remove(req, res){
    const id = req.params.id;
    const {error,data} = await clienteController.remove(id, nombre_cliente, apellido_cliente, telefono_cliente, email_cliente, direccion_cliente, membresia_cliente);
    res.json({error,data});
}
    

export {
    getAll,
    getById,
    create,
    update,
    remove
}

export default{
    getAll,
    getById,
    create,
    update,
    remove
}