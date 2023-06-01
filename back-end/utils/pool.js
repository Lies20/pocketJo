import mysql from "mysql2";


export const pool = mysql 
.createPool({
    host: "localhost",
	database: "dataJO",
    password: "",
    user:"root"
})
.promise();