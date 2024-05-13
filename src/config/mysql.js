import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

async function createConnection(){
    const connection = await mysql.createConnection(
        {
            host: process.env.MYSQL_HOST,
            port: 3306,
            user: process.env.MYSQL_USER,
            password: process.env.MTSQL_PASSWORD,
            database: process.env.MTSQL_DATABASE
        }
    )
    console.log("conexión exitosa a la base de datos!");
    return connection;
}

const connection = await createConnection();

export default connection;