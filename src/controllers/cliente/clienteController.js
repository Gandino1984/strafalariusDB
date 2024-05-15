import clienteModel from "../../models/clienteModel.js";

// //esto es para falsear la base de datos hasta que la conectemos a la app
// const clientes = [

//     {
//         "id_cliente":1,
//         "nombre_cliente": "german", 
//         "apellido_cliente": "andino",
//         "telefono_cliente": null,
//         "email_cliente": null,
//         "direccion_cliente": "ciudad jardín",
//         "membresia_cliente": "plata",
//     },
//     {
//         "id_cliente":2,
//         "nombre_cliente": "lander", 
//         "apellido_cliente": "apellido",
//         "telefono_cliente": "123456789", 
//         "email_cliente": null,
//         "direccion_cliente": "Barakaldo",
//         "membresia_cliente": "oro",
//     },
//     {
//         "id_cliente":3,
//         "nombre_cliente": "Ani", 
//         "apellido_cliente": "apellido",
//         "telefono_cliente": null,
//         "email_cliente": "email@ani.com",
//         "direccion_cliente": "Indautxu",
//         "membresia_cliente": "bronce",
//     },
//     {
//         "id_cliente":4,
//         "nombre_cliente": "Jhon", 
//         "apellido_cliente": "apellido",
//         "telefono_cliente": null,
//         "email_cliente": "email@jhon.com",
//         "direccion_cliente": "Santutxu",
//         "membresia_cliente": "plata",
//     }

// ];

async function getAll(){
    try{
        const cliente = await clienteModel.findAll();
        console.log("clientes",cliente);
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
        console.log("new cliente", newCliente);
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
        
        const cliente = await clienteModel.findByPk (id);
        
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