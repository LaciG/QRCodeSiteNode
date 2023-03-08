let express = require('express');
let router = express.Router();
require('dotenv').config();

exports.initSite = (req, res) => {
    res.status(200).json(
        {
            "message": "EZAZZZ",   
        }
    );
}
