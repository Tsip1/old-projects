var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/contact', { title: 'Express', UserType: 'customer' });
});

module.exports = router;
