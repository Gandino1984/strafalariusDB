import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const clienteModel = sequelize.define("cliente",

    {    
        id_cliente:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        nombre_cliente:{
            //varchar(50), not null
            type: DataTypes.STRING(50),
            allowNull:false
        },
        apellido_cliente:{
            //varchar(50), not null
            type: DataTypes.STRING(50),
            allowNull:false
        },
        telefono_cliente:{
        //varchar(20), not null
            type: DataTypes.STRING(20),
            allowNull:false
        },
        email_cliente:{
        //varchar(100), not null
            type: DataTypes.STRING(100),
            allowNull:false
        },
        direccion_cliente:{
        //varchar(100)
            type: DataTypes.STRING(100),
            allowNull:true
        },
        membresia_cliente:{
        //varchar(45)
            type: DataTypes.STRING(45),
            allowNull:true
        }
    }
)

export default clienteModel;