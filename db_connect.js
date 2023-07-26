const mysql = require('mysql')

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: 'authentication'
})

connection.connect(async (error) => {
    if (error) {
        console.error('Error connecting to database:', error);
    } else {
        console.log('Connected to database');
    }
});

module.exports = connection