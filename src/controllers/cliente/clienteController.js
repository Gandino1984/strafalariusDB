<<<<<<< HEAD
async function getAll(){
    return "mostramos todos los clientes";
}

async function getById(id){
    return `mostramos al cliente con id =  ${id}`;
=======
//esto es para falsear la base de datos hasta que la conectemos a la app
const clientes = [

    {
        "id_cliente":1,
        "nombre_cliente": "german", 
        "apellido_cliente": "andino",
        "telefono_cliente": null,
        "email_cliente": null,
        "direccion_cliente": "ciudad jardín",
        "membresia_cliente": "plata",
    },
    {
        "id_cliente":2,
        "nombre_cliente": "lander", 
        "apellido_cliente": "apellido",
        "telefono_cliente": "123456789",
        "email_cliente": null,
        "direccion_cliente": "Barakaldo",
        "membresia_cliente": "oro",
    },
    {
        "id_cliente":3,
        "nombre_cliente": "Ani", 
        "apellido_cliente": "apellido",
        "telefono_cliente": null,
        "email_cliente": "email@ani.com",
        "direccion_cliente": "Indautxu",
        "membresia_cliente": "bronce",
    },
    {
        "id_cliente":4,
        "nombre_cliente": "Jhon", 
        "apellido_cliente": "apellido",
        "telefono_cliente": null,
        "email_cliente": "email@jhon.com",
        "direccion_cliente": "Santutxu",
        "membresia_cliente": "plata",
    }

];

async function getAll(){

    return {data:clientes};

}

async function getById(id){

    const cliente = clientes.find(cliente => cliente.id_cliente == id);
    if(!cliente){
        return {error:"el cliente no existe!"};
    }
    return {data:cliente}

}


//clienteData es un objeto que tiene el nombre, apellido, telefono, email, direccion y membresia del cliente
async function create(clienteData){
<<<<<<< HEAD
    const {nombre_cliente, apellido_cliente, telefono_cliente, email_cliente, direccion_cliente, membresia_cliente} = clienteData;
    return `Los datos de cliente son: nombre: ${nombre_cliente} apellido: ${apellido_cliente} teléfono ${telefono_cliente} email: ${email_cliente} dirección: ${direccion_cliente} membresía: ${membresia_cliente}`;    
=======

    const {nombre_cliente, apellido_cliente, telefono_cliente, email_cliente, direccion_cliente, membresia_cliente} = clienteData;
    //get max id del arreglo que falsea la base datos. Esto cambiará cuando conectemos la DB
    if(!nombre_cliente){
        return{error:"los clientes deben tener nombre"};
    }
    const maxID = Math.max(...clientes.map(cliente => cliente.id_cliente));
    const newID = maxID + 1;
    const newCliente = {id_cliente:newID, nombre_cliente, apellido_cliente, telefono_cliente, email_cliente, direccion_cliente, membresia_cliente};
    clientes.push(newCliente);
    return {data:newCliente};
>>>>>>> f816ae54b87da2b2bfb9702a9f45d750f7db779c
}

//clienteData es un objeto que tiene el nombre, apellido, telefono, email, direccion y membresia del cliente
async function update(id, clienteData){
<<<<<<< HEAD
    const {nombre_cliente, apellido_cliente, telefono_cliente, email_cliente, direccion_cliente, membresia_cliente} = clienteData;
    return `Los nuevos datos de cliente: nombre: ${nombre_cliente} apellido: ${apellido_cliente} teléfono ${telefono_cliente} email: ${email_cliente} dirección: ${direccion_cliente} membresía: ${membresia_cliente}`;    
}

async function remove(id){
    return `Borramos artista con id ${id}`;
}

export{
=======

    const {nombre_cliente, apellido_cliente, telefono_cliente, email_cliente, direccion_cliente, membresia_cliente} = clienteData;
    
    const cliente = clientes.find(cliente=>cliente.id_cliente === id);
    
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
    return {data:cliente};
}

async function remove(id){
    const clienteIndex = clientes.findIndex(cliente=>cliente.id_cliente == id);
    if(clienteIndex == -1){
        return {error:"no se puede borrar cliente inexistente!"};
    }
    const deletedCliente = clientes.splice(clienteIndex,1);
    return {data:deletedCliente};
}

export{

>>>>>>> f816ae54b87da2b2bfb9702a9f45d750f7db779c
    getAll,
    getById,
    create,
    update,
    remove
<<<<<<< HEAD
};

export default{
=======

};

export default{ 

>>>>>>> f816ae54b87da2b2bfb9702a9f45d750f7db779c
    getAll,
    getById,
    create,
    update,
    remove
<<<<<<< HEAD
=======

>>>>>>> f816ae54b87da2b2bfb9702a9f45d750f7db779c
};