import vendedorController from "./vendedorController.js";

async function getAll(req, res){
    const {error, data} = await vendedorController.getAll();
    res.render("vendedor/list", {error,data});
};

async function getById(req, res){
    const id = req.params.id;   
    const {error, data} = await vendedorController.getById(id);
    res.render("vendedor/show", {error,data});
}

async function createForm(req, res){
    res.render("vendedor/new");
}

async function create(req, res){
    const {nombre_vendedor, origen_vendedor, categoria_vendedor} = req.query;
    const {error,data} = await vendedorController.create(nombre_vendedor, origen_vendedor, categoria_vendedor);
    res.redirect("/vendedor");
}

async function updateForm(req, res){
    const id = req.params.id;
    const {data:vendedor} = await vendedorController.getById(id); 
    res.render("vendedor/update", {vendedor});
}

async function update(req, res){
    const id = parseInt(req.params.id);
    const {nombre_vendedor, origen_vendedor, categoria_vendedor} = req.body;
    const categoria = categoria_vendedor === "on" ? 1 : 0;
    const {error,data} = await vendedorController.update(id, {nombre_vendedor, origen_vendedor, categoria_vendedor:categoria});
    res.redirect("/vendedor");
}

async function remove(req, res){
    const id = parseInt(req.params.id);
    const {error,data} = await vendedorController.remove(id, nombre_vendedor, origen_vendedor, categoria_vendedor);
    res.redirect("/vendedor");
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