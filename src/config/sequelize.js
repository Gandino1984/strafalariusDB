import {Sequelize} from "sequelize";
import dotenv from "dotenv"

dotenv.config();

//crear conexión
const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD,
    {
        host: process.env.MYSQL_HOST,
        port:3306,
        dialect: "mysql",
        define:{
            timestamps: false,
            freezeTableName: true,
        }
    }
);

async function authenticate(){
    try{
        await sequelize.authenticate();
        console.log("Conexión exitosa a StrafalariusDB!");
    } catch(error){
        console.error("Conexión fallida a la base de datos:", error)
    }
}

authenticate();

export default sequelize;