import mysql from 'mysql';


const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Mysql@2024",
    database: "attendance_pbl" // Specify the database name here
});

con.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

export default con;


