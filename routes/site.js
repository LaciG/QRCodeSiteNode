let express = require('express');
let router = express.Router();
require('dotenv').config();

let siteController = require('../controllers/siteController');

router.get('/', siteController.index);
router.get('/home', siteController.home);
router.get('/event/id', siteController.getEventApplicants);
router.get('/event/all', siteController.getAllEvent);

module.exports = router;