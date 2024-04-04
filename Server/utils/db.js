const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "attendance"
});

con.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

module.exports = con;
