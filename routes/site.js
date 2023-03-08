let express = require('express');
let router = express.Router();
require('dotenv').config();

let siteController = require('../controllers/siteController');

router.get('/', siteController.index);

module.exports = router;