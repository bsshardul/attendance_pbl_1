import mysql from 'mysql'
const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"faculty"
})
con.connect(function(err){
    if(err){
        console.log("Connection error")

    }else{
        console.log("Connection successful")
    }
})

export default con;