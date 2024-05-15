const productos = [

    {
        "id_producto":1,
        "nombre_producto": "camiseta", 
        "talla_producto": "M",
        "color_producto": "negro",
        "estacion_producto": "primavera",
        "precio_producto": "25",
        "descuento_producto": null,
    },
    {
        "id_producto":2,
        "nombre_producto": "falda", 
        "talla_producto": "S",
        "color_producto": "Rojo",
        "estacion_producto": "verano",
        "precio_producto": "40",
        "descuento_producto": "10",
    },
    {
        "id_producto":3,
        "nombre_producto": "Zapatos", 
        "talla_producto": "42",
        "color_producto": "Blanco",
        "estacion_producto": null,
        "precio_producto": "75",
        "descuento_producto": "20",
    },


];

async function getAll(){    

    return {data:productos};

}

async function getById(id){

    const producto = productos.find(producto => producto.id_producto == id);
    if(!producto){
        return {error:"el producto no existe!"};
    }
    return {data:producto}

}


async function create(productoData){
    const {nombre_producto, talla_producto, color_producto, estacion_producto, precio_producto, descuento_producto} = productoData;
    if(!nombre_producto){
        return{error:"los productos deben tener nombre"};
    }
    const maxID = Math.max(...productos.map(producto => producto.id_producto));
    const newID = maxID + 1;
    const newProducto = {id_producto:newID, nombre_producto, talla_producto, color_producto, estacion_producto, precio_producto, descuento_producto};
    productos.push(newProducto);
    return {data:newProducto};
}

async function update(id, productoData){

    const {nombre_producto, talla_producto, color_producto, estacion_producto, precio_producto, descuento_producto} = productoData;
    
    const producto = productos.find(producto=>producto.id_producto === id);
    
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
    return {data:producto};
}

async function remove(id){
    const productoIndex = productos.findIndex(producto=>producto.id_producto == id);
    if(productoIndex == -1){
        return {error:"no se puede borrar producto inexistente!"};
    }
    const deletedProducto = productos.splice(productoIndex,1);
    return {data:deletedProducto};
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