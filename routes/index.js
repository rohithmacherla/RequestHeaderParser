var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/whoami', function(req, res) {
    res.json({hello: 5});
});

module.exports = router;
