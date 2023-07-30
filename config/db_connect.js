const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: '',
    database: 'ecommerce'
})

connection.connect(async (error) => {
    if (error) {
        console.error('Error connecting to database:', error);
    } else {
        console.log('Connected to database');
    }
});

module.exports = connection;