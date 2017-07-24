'use strict'

const express = require('express')

// Constants
const PORT = 8080

// App
const app = express()

app.use(express.static(__dirname + '/dist'))

app.listen(PORT)
console.log(`Running on ${PORT}`)
