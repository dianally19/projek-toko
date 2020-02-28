const { db } = require('../database')

module.exports = {
    inputBarang: (req, res) => {
        var sql = `INSERT INTO barang SET ?`

        db.query(sql, req.body, (err, results) => {
            if(err) {
                return res.status(500).send(err)
            }
            res.status(200).send(results)
        })   
    },
    getDataBarang: (req, res) => {
        var sql = `SELECT * from barang`

        db.query(sql, req.body, (err, results) => {
            if(err) {
                return res.status(500).send(err)
            }
            res.status(200).send(results)
        })   
    },
    getDetailsBarang: (req, res) => {
        var sql = `SELECT * FROM barang WHERE id_barang = ${req.params.idBarang}`

        db.query(sql, req.body, (err, results) => {
            if(err) {
                return res.status(500).send(err)
            }
            res.status(200).send(results)
        })   
    },

    pembayaran: (req, res) => {
        var sql = `INSERT INTO pembayaran SET ?`

        db.query(sql, req.body, (err, results) => {
            if(err) {
                console.log(req.body)
                console.log(err)
                return res.status(500).send(err)
            }
            res.status(200).send(results)
        })   
    },
}