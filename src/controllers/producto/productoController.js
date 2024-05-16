import productoModel from "../../models/productoModel.js";

async function getAll(){
    try{
        const producto = await productoModel.findAll();
        console.log("productos",producto);
        return {data:producto};
    }
    catch{
        console.error(error);
        return {error:error};
    }
}

async function getById(id){
    try{
        const producto = await productoModel.findByPk(id);
        if(!producto){
            return {error:"el producto no existe!"};
        }
        return {data:producto}
    }
    catch(error){
        console.error(error);
        return {error};
    }
}

async function create(productoData){
    try{
        const newProducto = await productoModel.create(productoData);
        console.log("new producto", newProducto);
        return {data:newProducto};
    }
    catch(error){
        console.error(error);
        return(error);
    }
}

async function update(id, productoData){
    try{

    const {nombre_producto, talla_producto, color_producto, estacion_producto, precio_producto, descuento_producto} = productoData;
    
    const producto = await productoModel.findByPk (id);
    
    if(!producto){
        return {error:"no se puede modificar un producto inexistente!"};
    }
    if(nombre_producto){
        producto.nombre_producto = nombre_producto;
    }
    if(talla_producto){
        producto.talla_producto = talla_producto;
    }
    if(color_producto){
        producto.color_producto = color_producto;
    }
    if(estacion_producto){
        producto.estacion_producto = estacion_producto;
    }
    if(precio_producto){
        producto.precio_producto = precio_producto;
    }
    if(descuento_producto){
        producto.descuento_producto = descuento_producto;
    }

    const newProducto= await productoModel.update(id,producto);

    return {data:newProducto};
}
catch(error){
    console.error(error);
    return error;
}
}

async function remove(id){
    try{
        const result = await productoModel.remove(id);
        return {data:result};
    }
    catch(error){
        console.error(error);
    }
}

export{
    getAll,
    getById,
    create,
    update,
    remove
};

export default{ 
    getAll,
    getById,
    create,
    update,
    remove
};