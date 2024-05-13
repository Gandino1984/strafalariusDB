import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";


const productoModel = sequelize.define("producto",
    {
        id_producto:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        nombre_producto: {
            type:DataTypes.STRING(45),
            allowNull:false
        },
        talla_producto:{
            type:DataTypes.STRING(5),
            allowNull:false
        },
        color_producto:{
            type:DataTypes.STRING(20),
            allowNull:false
        },
        estacion_producto:{
            type:DataTypes.STRING(45),
            allowNull:false
        },
        precio_producto:{
            type:DataTypes.FLOAT,
            allowNull:false
        },
        descuento_producto:{
            type:DataTypes.INTEGER,
            allowNull:true

        }
    }
)

export default productoModel;