const express = require('express');
const dotenv = require('dotenv').config()
const logger = require('node-color-log')
const http = require('http');
const reload = require('reload');

const app = express()
const port = process.env.PORT || 8000

app.use(express.static('public'))
app.use('/styles', express.static(__dirname + 'public/styles'))
app.use('/src', express.static(__dirname + 'public/src'))
app.use('/assets', express.static(__dirname + 'public/assets'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.use('/', require('./routes/pageRoutes'))

const server = http.createServer(app)

server.listen(port, () => {
    logger.success(`Server running on ${port}`)
})
reload(app)
