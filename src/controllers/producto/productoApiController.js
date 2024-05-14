import clienteController from "./productoController.js";

async function getAll(req, res){
    const {error, data} = await productoController.getAll();
    res.json({error,data});
};

async function getById(req, res){
    const id = req.params.id;   
    const {error, data} = await productoController.getById(id);
    res.json({error,data});
}


async function create(req, res){
    const  {nombre_producto, talla_producto, color_producto, estacion_producto, precio_producto, descuento_producto} = req.query;
    const {error,data} = await productoController.create(nombre_producto, talla_producto, color_producto, estacion_producto, precio_producto, descuento_producto);
    res.json({error,data});
}


async function update(req, res){
    const id = req.params.id;
    const  {nombre_producto, talla_producto, color_producto, estacion_producto, precio_producto, descuento_producto} = req.query;
    const {error,data} = await productoController.update(id, nombre_producto, talla_producto, color_producto, estacion_producto, precio_producto, descuento_producto);
    res.json({error,data});
}

async function remove(req, res){
    const id = req.params.id;
    const {error,data} = await productoController.remove(id, nombre_producto, talla_producto, color_producto, estacion_producto, precio_producto, descuento_producto);
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