const express = require('express');
const dotenv = require('dotenv').config()
const logger = require('node-color-log')

const app = express()
const port = process.env.PORT || 8000

app.use(express.static('public'))
app.use('/styles', express.static(__dirname + 'public/styles'))
app.use('/src', express.static(__dirname + 'public/src'))
app.use('/images', express.static(__dirname + 'public/assets/images'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.use('/', require('./routes/pageRoutes'))

app.listen(port, () => {
    logger.success(`Server running on ${port}`)
})
