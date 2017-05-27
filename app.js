'use strict'
const express = require('express')
  , cors = require('cors')
  , bodyParser = require('body-parser')
  , app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const routes = require('./routes')

app.use('/', routes)

module.exports = app