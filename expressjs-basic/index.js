const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Express js with nodemon')
})
app.get('/:produk', (req, res) => res.send(`ini adalah halaman : ${req.params.produk}`))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})