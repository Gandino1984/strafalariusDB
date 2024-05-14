import {Sequelize} from "sequelize";
<<<<<<< HEAD
import dotenv from "dotenv"

dotenv.config();

const sequelize = new Sequielize(
    process.env.MTSQL_DATABASE,
    process.env.MYSQL_USER,
    procces.env.MYSQL_PASSWORD,
    {
        host: process.env.MYSQL_HOST,
        port: 3306
    }
)
=======
import dotenv from "dotenv";

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
>>>>>>> dev
