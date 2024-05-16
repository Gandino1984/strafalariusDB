import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";


const bandModel = sequelize.define("band",
    {
        id_usuario:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        user_usuario: {
            //varchar(50), not null
            type:DataTypes.STRING(50),
            allowNull:false
        },
        password_usuario:{
            //varchar(100), not null
            type:DataTypes.STRING(100),
            allowNull:false
        },
        rol_usuario:{
            //varchar(50), not null
            type: DataTypes.STRING(50),
            allowNull:false
        }
    }
)

export default usuarioModel;