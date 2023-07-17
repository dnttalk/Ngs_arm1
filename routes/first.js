const express = require('express');
const router = express.Router();

router.get('/first', (req, res) => {
    res.render('tp53');
});

router.get('/first', (req, res) => {
    res.render('mpn');
});

router.get('/first', (req, res) => {
    res.render('first');
});

module.exports = router;