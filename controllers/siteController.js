let express = require('express');
let router = express.Router();
require('dotenv').config();

exports.index = (req, res) => {
    res.render('index', {layout: 'layout.hbs', title: 'MCC QRCode Site'})
}
