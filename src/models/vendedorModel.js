import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const vendedorModel = sequelize.define("vendedor",

    {
        id_vendedor:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        nombre_vendedor: {
            type:DataTypes.STRING(100),
            allowNull:false
        },
        origen_vendedor:{
            type:DataTypes.STRING(100),
            allowNull:true
        },
        categoria_vendedor:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
    }
)

export default vendedorModel;