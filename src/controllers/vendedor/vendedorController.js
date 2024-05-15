//esto es para falsear la base de datos hasta que la conectemos a la app
/*
const vendedores = [

    {
        "id_vendedor":1,
        "nombre_vendedor": "Sara", 
        "origen_vendedor": "Barcelona",
        "categoria_vendedor": null
    },
    {
        "id_vendedor":2,
        "nombre_vendedor": "Raquel", 
        "origen_vendedor": "Bilbao",
        "categoria_vendedor": null
    },    
    {
        "id_vendedor":3,
        "nombre_vendedor": "Venancio", 
        "origen_vendedor": "Valencia",
        "categoria_vendedor": null
    },    
    {
        "id_vendedor":4,
        "nombre_vendedor": "Rafa", 
        "origen_vendedor": "Tegucigalpa",
        "categoria_vendedor": null
    },
];
*/
import vendedorModel from "../models/vendedorModel.js";

async function getAll(){
    try{
        const vendedor = await vendedorModel.findAll();
        console.log("vendedores",vendedor);
        return {data:vendedor};
    }
    catch{
        console.error(error);
        return {error:error}
    }

}

async function getById(id){
    try{
    const vendedor = await vendedorModel.findByPk(id)
    if(!cliente){
        return {error:"el vendedor no existe"};
    }
    }
    catch(error){
        console.errorr(error);
        return{error};
    }
}

async function create(vendedorData){
    try{
        const newVendedor = await vendedorModel.create(vendedorData);
        console.log("new vendedor", newVendedor);
        return {data:newVendedor};
    }
    catch(error){
        console.error(error);
        return(error);
    }
}

//vendedorData es un objeto que tiene el nombre, origen y categoria del vendedor
async function update(id, vendedorData){
    try{
        const {nombre_vendedor, origen_vendedor, categoria_vendedor} = vendedorData;
    
        const vendedor = await vendedorModel.findByPk (id);
    
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

        const newVendedor = await vendedorModel.update(id,vendedor);

        return {data:newVendedor};

    }
    catch(error){
        console.error(error);
        return error;
    }
}

async function remove(id){
    try{
        const result = await vendedorModel.remove(id);
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