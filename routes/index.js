var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var distance = req.query.distance;
  res.render('index', { title: 'My Taxi', cost: parseFloat(distance)*150000 });
});

module.exports = router;
