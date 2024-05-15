import clienteModel from "../../models/clienteModel.js";

async function getAll(){
    try{
        const cliente = await clienteModel.findAll();
        return {data:cliente};
    }
    catch(error){
        console.error(error);
        return {error:error};
    }
}

async function getById(id){
    try{
        const cliente = await clienteModel.findByPk(id);
        if(!cliente){       
            return {error:"el cliente no existe!"};
        }
        return {data:cliente}
    }
    catch(error){
        console.error(error);
        return {error};
    }
}

async function create(clienteData){
    try{
        const newCliente = await clienteModel.create(clienteData);
        return {data:newCliente};
    }
    catch(error){
        console.error(error);
        return(error);
    }
}


//clienteData es un objeto que tiene el nombre, apellido, telefono, email, direccion y membresia del cliente
async function update(id, clienteData){
    try{
        const {nombre_cliente, apellido_cliente, telefono_cliente, email_cliente, direccion_cliente, membresia_cliente} = clienteData;
        
        const cliente = await clienteModel.findByPk(id);
        
        if(!cliente){
            return {error:"no se puede modificar un cliente inexistente!"};
        }
        if(nombre_cliente){
            cliente.nombre_cliente = nombre_cliente;
        }
        if(apellido_cliente){
            cliente.apellido_cliente = apellido_cliente;
        }
        if(telefono_cliente){
            cliente.telefono_cliente = telefono_cliente;
        }
        if(email_cliente){
            cliente.email_cliente = email_cliente;
        }
        if(direccion_cliente){
            cliente.direccion_cliente = direccion_cliente;
        }
        if(membresia_cliente){
            cliente.membresia_cliente = membresia_cliente;
        }   
    
        const newCliente = await clienteModel.update(id,cliente);
    
        return {data:newCliente};
    }
    catch(error){
        console.error(error);
        return error;
    }
}

async function remove(id){
    try{
        const result = await clienteModel.remove(id);
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