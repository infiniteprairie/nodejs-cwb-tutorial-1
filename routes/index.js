var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET helloworld page, via another route. */
router.get('/helloworld', function(req, res, next) {
  res.render('helloworld', { title: 'Hola!' });
});

/* GET userlist page */
router.get('/userlist', function(req, res, next) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({}, {}, function(e, docs) {
        res.render('userlist', {
            "userlist": docs
        });
    });
});


module.exports = router;
