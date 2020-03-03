const mysql = require('mysql')

const myDatabase = mysql.createConnection({
    host: 'https://remotemysql.com/phpmyadmin/db_structure.php?server=1&db=nwblGy50kW',
    user: 'nwblGy50kW', 
    password: 'nlyqUg4Sfk',
    database: 'nwblGy50kW'
})

module.exports = {
    db: myDatabase
}
