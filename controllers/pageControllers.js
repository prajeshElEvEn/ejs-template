const asyncHandler = require('express-async-handler')

const indexController = asyncHandler(async (req, res) => {
    const text = {
        text: "Wassup"
    }
    res.render('index', text)
})

const helpController = asyncHandler(async (req, res) => {
    res.render('help')
})

module.exports = {
    indexController,
    helpController
}
