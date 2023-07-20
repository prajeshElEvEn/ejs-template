const express = require('express');
const { indexController, helpController } = require('../controllers/pageControllers');
const router = express.Router()

router.route('/').get(indexController)
router.route('/help').get(helpController)

module.exports = router
