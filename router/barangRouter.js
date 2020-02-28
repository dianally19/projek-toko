const express = require('express')
const { barangController } = require('../controller')

const router = express.Router()

router.post('/inputbarang', barangController.inputBarang)
router.get('/getdatabarang', barangController.getDataBarang)
router.get('/getdetailsbarang/:idBarang', barangController.getDetailsBarang)
router.post('/pembayaran', barangController.pembayaran)

module.exports = router