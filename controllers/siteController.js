let express = require('express');
let router = express.Router();
require('dotenv').config();

exports.index = (req, res) => {
    res.render('index', {layout: 'indexLayout.hbs', title: 'MCC QRCode Site'})
}

exports.home = (req, res) => { //Ide már a belogolt user kell, megírni majd a login processt, most csak visual miatt simán rendereli
    res.render('home', {layout: 'layout.hbs', title: 'Dashboard'})
}

exports.getEventApplicants = (req, res) => {
    res.render('eventApplicants', {layout: 'layout.hbs', title: 'Résztvevők'}) // Title legyen esemény neve + Dátum az Excel report miatt
}
