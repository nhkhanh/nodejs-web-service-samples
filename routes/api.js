var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/cost', function(req, res, next) {
    var distance = parseFloat(req.query.distance);
    var surge = 1.2;
    res.json({"cost":distance*15000*surge,"surge":surge});
});

module.exports = router;
