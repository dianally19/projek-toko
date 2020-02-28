const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 1999

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req,res) => {
    res.status(200).send('<h1>Welcome To our API diana</h1>')
})


const { customerRouter, barangRouter } = require('./router')

app.use('/customer', customerRouter)
app.use('/barang', barangRouter)


app.listen(port, () => console.log('API aktif di port ' + port))