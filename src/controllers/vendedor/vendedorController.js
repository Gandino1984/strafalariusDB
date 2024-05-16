import vendedorModel from "../../models/vendedorModel.js";

async function getAll(){
    try{
        const vendedor = await vendedorModel.findAll();
        return {data:vendedor};
    }
    catch(error){
        console.error(error);
        return {error:error}
    }
}

async function getById(id){
    try{
    const vendedor = await vendedorModel.findByPk(id)
    if(!vendedor){
        return {error:"el vendedor no existe"};
    }
    return {data:vendedor}
    }
    catch(error){
        console.error(error);
        return{error};
    }
}

async function create(vendedorData){
    try{
        const newVendedor = await vendedorModel.create(vendedorData);
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
        const vendedor = await vendedorModel.findByPk(id);
    
        if(!vendedor){
            return {error:"no se puede modificar un vendedor inexistente!"};
        }
        const newVendedor = await vendedorModel.update(vendedorData, {where:{id_vendedor:id}});
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