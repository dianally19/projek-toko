const mysql = require('mysql')

const myDatabase = mysql.createConnection({
    host: 'remotemysql.com',
    user: 'nwblGy50kW', 
    password: 'nlyqUg4Sfk',
    database: 'nwblGy50kW'
})

module.exports = {
    db: myDatabase
}
