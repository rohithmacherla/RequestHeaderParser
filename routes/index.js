var express = require('express');
var router = express.Router();
var useragent = require("express-useragent");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/whoami', function(req, res) {
    var ip = req.ip;
    var lang = req.acceptsLanguages();
    var browser_info = req.useragent;
    res.json({ip: ip, language: lang[0], "browser": browser_info});
});

module.exports = router;
