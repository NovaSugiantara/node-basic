const express = require('express')
const app = express()
const port = 3000

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.get('/', (req, res) => {
    const pendidikan = [{
            instansi: 'SD N 6 Batubulan'
        },
        {
            instansi: 'SMP N 2 Sukawati'
        },
        {
            instansi: 'SMK TI BALI GLOBAL DENPASAR'
        }
    ]
    res.render('index', {
        name: 'Nova Sugiantara',
        umur: 19,
        pendidikan: pendidikan
    })
})
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})