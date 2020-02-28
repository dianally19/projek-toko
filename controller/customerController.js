const { db } = require('../database')

module.exports = {
    getData: (req, res) => {
        var sql = `SELECT * FROM customer`

        db.query(sql, (err, results) => {
            if(err) {
                return res.status(500).send(err)
            }
            res.status(200).send(results)
        })   
    },
    customerRegister: (req, res) => {
        var sql = `INSERT INTO customer SET ?`

        db.query(sql, req.body, (err, results) => {
            if(err) {
                // console.log(err)
                // console.log(req.body)
                return res.status(500).send(err)
            }
            res.status(200).send(results)
        })   
    },
    getDataLogin: (req, res) => {
        var sql = `SELECT * FROM customer WHERE email = '${req.params.email}' or nama= '${req.params.email}' `
        
        db.query(sql, (err, results) => {
            console.log(req.params.email)
            if(err) {
                console.log(err)
                return res.status(500).send(err)
            }
            res.status(200).send(results)
        })   
    }
}