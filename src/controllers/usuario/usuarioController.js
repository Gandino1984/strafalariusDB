const usuarios = [
    {
        "id_usuario": 1,
        "nombre_usuario": "usuario1",
        "contraseña": "password1"
    },
    {
        "id_usuario": 2,
        "nombre_usuario": "usuario2",
        "contraseña": "password2"
    },
    {
        "id_usuario": 3,
        "nombre_usuario": "usuario3",
        "contraseña": "password3"
    }
];

import usuarioModel from "../../models/usuarioModel.js";

async function getAll(){
    try{
        const usuario = await usuarioModel.findAll();
        return {data:usuario};
    }
    catch(error){
        console.error(error);
        return {error:error};
    }
}

async function getById(id){
    try{
        const usuario = await usuarioModel.findByPk(id);
        if(!producto){
            return {error:"el usuario no existe!"};
        }
        return {data:usuario}
    }
    catch(error){
        console.error(error);
        return {error};
    }
}

async function create(usuarioData){
    try{
        const newUsuario = await usuarioModel.create(usuarioData);
        return {data:newUsuario};
    }
    catch(error){
        console.error(error);
        return(error);
    }
}

async function update(id, usuarioData){
    try{

    const {nombre_usuario, password_usuario} = usuarioData;
    
    const usuario = await usuarioModel.findByPk (id);
    
    if(!usuario){
        return {error:"no se puede modificar un usuario inexistente!"};
    }
    if(nombre_usuario){
        usuario.nombre_usuario = nombre_usuario;
    }
    if(password_usuario){
        usuario.password_usuario = password_usuario;
    }

    const newUsuario= await usuarioModel.update(id,usuario);

    return {data:newUsuario};
}
catch(error){
    console.error(error);
    return error;
}
}

async function remove(id){
    try{
        const result = await Model.remove(id);
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