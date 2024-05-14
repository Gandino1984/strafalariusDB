import vendedorController from "./vendedorController.js";

async function getAll(req, res){
    const {error, data} = await vendedorController.getAll();
    res.json({error,data});
};

async function getById(req, res){
    const id = req.params.id;   
    const {error, data} = await vendedorController.getById(id);
    res.json({error,data});
}


async function create(req, res){
    const  {nombre_vendedor, origen_vendedor, categoria_vendedor} = req.query;
    const {error,data} = await vendedorController.create(nombre_vendedor, origen_vendedor, categoria_vendedor);
    res.json({error,data});
}


async function update(req, res){
    const id = req.params.id;
    const  {nombre_vendedor, origen_vendedor, categoria_vendedor} = req.query;
    const {error,data} = await vendedorController.update(id, nombre_vendedor, origen_vendedor, categoria_vendedor);
    res.json({error,data});
}

async function remove(req, res){
    const id = req.params.id;
    const {error,data} = await vendedorController.remove(id, nombre_vendedor, origen_vendedor, categoria_vendedor);
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