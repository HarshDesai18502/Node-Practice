const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'Test',
    password:'Simform@123'
});

module.exports = pool.promise();