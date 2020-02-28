const express = require('express')
const { customerController } = require('../controller')

const router = express.Router()

router.get('/getTest', customerController.getData)
router.post('/customerRegister', customerController.customerRegister)
router.get('/getDataLogin/:email', customerController.getDataLogin)

module.exports = router