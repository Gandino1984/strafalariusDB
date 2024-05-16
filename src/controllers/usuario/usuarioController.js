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

async function getAll() {
    return { data: usuarios };
}

async function getById(id) {
    const usuario = usuarios.find(usuario => usuario.id_usuario == id);
    if (!usuario) {
        return { error: "El usuario no existe." };
    }
    return { data: usuario };
}

async function create(usuarioData) {
    const { nombre_usuario, contraseña } = usuarioData;
    if (!nombre_usuario || !contraseña) {
        return { error: "El nombre de usuario y la contraseña son obligatorios." };
    }
    const maxID = Math.max(...usuarios.map(usuario => usuario.id_usuario));
    const newID = maxID + 1;
    const newUsuario = { id_usuario: newID, nombre_usuario, contraseña };
    usuarios.push(newUsuario);
    return { data: newUsuario };
}

async function update(id, usuarioData) {
    const { nombre_usuario, contraseña } = usuarioData;
    const usuario = usuarios.find(usuario => usuario.id_usuario === id);
    if (!usuario) {
        return { error: "El usuario no existe." };
    }
    if (nombre_usuario) {
        usuario.nombre_usuario = nombre_usuario;
    }
    if (contraseña) {
        usuario.contraseña = contraseña;
    }
    return { data: usuario };
}

async function remove(id) {
    const usuarioIndex = usuarios.findIndex(usuario => usuario.id_usuario == id);
    if (usuarioIndex === -1) {
        return { error: "El usuario no existe." };
    }
    const deletedUsuario = usuarios.splice(usuarioIndex, 1);
    return { data: deletedUsuario };
}

export {
    getAll,
    getById,
    create,
    update,
    remove
};

export default {
    getAll,
    getById,
    create,
    update,
    remove
};