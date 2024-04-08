const mysql = require("mysql2")
var mysqlConnection = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:null,
    database:"employeeDb"
})
var connection = mysqlConnection.connect((err)=>{
    if(err){
        console.log("Error in DB connection" + JSON.stringify(err, undefined,2))
    }else{
        console.log("DB connected successfully.")
    }
})

module.exports = connection;