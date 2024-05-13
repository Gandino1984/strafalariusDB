import {Sequelize} from "sequelize";
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