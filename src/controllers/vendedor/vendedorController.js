//esto es para falsear la base de datos hasta que la conectemos a la app
const vendedores = [

    {
        "id_vendedor":1,
        "nombre_vendedor": "Sara", 
        "origen_vendedor": " ",
        "categoria_vendedor": null
    },
    {
        "id_vendedor":2,
        "nombre_vendedor": "Raquel", 
        "origen_vendedor": " ",
        "categoria_vendedor": null
    },    
    {
        "id_vendedor":3,
        "nombre_vendedor": "Venancio", 
        "origen_vendedor": " ",
        "categoria_vendedor": null
    },    
    {
        "id_vendedor":4,
        "nombre_vendedor": "Rafa", 
        "origen_vendedor": " ",
        "categoria_vendedor": null
    },
];

async function getAll(){

    return {data:vendedores};

}

async function getById(id){

    const vendedor = vendedores.find(vendedor => vendedor.id_vendedor == id);
    if(!vendedor){
        return {error:"el vendedor no existe!"};
    }
    return {data:vendedor}

}

//vendedorData es un objeto que tiene el nombre, origen y categoria del vendedor
async function create(vendedorData){
    const {nombre_vendedor, origen_vendedor, categoria_vendedor,} = vendedorData;
    //get max id del arreglo que falsea la base datos. Esto cambiará cuando conectemos la DB
    if(!nombre_vendedor){
        return{error:"los vendedores deben tener nombre"};
    }
    const maxID = Math.max(...vendedores.map(vendedor => vendedor.id_vendedor));
    const newID = maxID + 1;
    const newVendedor = {id_vendedor:newID, nombre_vendedor, origen_vendedor, categoria_vendedor};
    vendedores.push(newVendedor);
    return {data:newVendedor};
}

//vendedorData es un objeto que tiene el nombre, origen y categoria del vendedor
async function update(id, vendedorData){

    const {nombre_vendedor, origen_vendedor, categoria_vendedor} = vendedorData;
    
    const vendedor = vendedores.find(vendedor=>vendedor.id_vendedor === id);
    
    if(!vendedor){
        return {error:"no se puede modificar un vendedor inexistente!"};
    }
    if(nombre_vendedor){
        vendedor.nombre_vendedor = nombre_vendedor;
    }
    if(origen_vendedor){
        vendedor.origen_vendedor = origen_vendedor;
    }
    if(categoria_vendedor){
        vendedor.categoria_vendedor = categoria_vendedor;
    }
    return {data:vendedor};
}

async function remove(id){
    const vendedorIndex = vendedores.findIndex(vendedor=>vendedor.id_vendedor == id);
    if(vendedorIndex == -1){
        return {error:"no se puede borrar vendedor inexistente!"};
    }
    const deletedVendedor = vendedores.splice(vendedorIndex,1);
    return {data:deletedVendedor};
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