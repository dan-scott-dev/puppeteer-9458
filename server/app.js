const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.status(204).send('hello')
})

app.listen(3001)