import pkg from "pg";
import dotenv from 'dotenv'

const {Pool} = pkg;

dotenv.config()

const connection = new Pool({
    host: "localhost",
    port: 5432,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: "desafio_sql_b672418d",
})

export default connection