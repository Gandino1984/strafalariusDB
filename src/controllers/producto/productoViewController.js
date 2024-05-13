import productoController from "./productoController.js";

async function getAll(req, res){
    const {error, data} = await productoController.getAll();
    res.render("producto/list", {error,data});
};

async function getById(req, res){
    const id = req.params.id;   
    const {error, data} = await productoController.getById(id);
    res.render("producto/show", {error,data});
}

async function createForm(req, res){
    res.render("producto/new");
}

async function create(req, res){
    const  {nombre_producto, talla_producto, color_producto, estacion_producto, precio_producto, descuento_producto} = req.query;
    const {error,data} = await productoController.create(nombre_producto, talla_producto, color_producto, estacion_producto, precio_producto, descuento_producto);
    res.redirect("/producto");
}

async function updateForm(req, res){
    const id = req.params.id;
    const producto = await productoController.getById(id); 
    res.render("producto/update", {producto});
}

async function update(req, res){
    const id = parseInt(req.params.id);
    const  {nombre_producto, talla_producto, color_producto, estacion_producto, precio_producto, descuento_producto} = req.query;
    const {error,data} = await productoController.update(id, nombre_producto, talla_producto, color_producto, estacion_producto, precio_producto, descuento_producto);
    res.redirect("/producto");
}

async function remove(req, res){
    const id = parseInt(req.params.id);
    const {error,data} = await productoController.remove(id, nombre_producto, talla_producto, color_producto, estacion_producto, precio_producto, descuento_producto);
    res.redirect("/producto");
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