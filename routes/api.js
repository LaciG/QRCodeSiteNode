let express = require('express');
let router = express.Router();
require('dotenv').config();


let apiController = require('../controllers/apiController');

router.get('/init', apiController.initSite);

module.exports = router;