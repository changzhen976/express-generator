var express = require('express');
var router = express.Router();

var mysqlconnection = require('../mysqlconnection');

/* GET home page. */
router.get('/', function(req, res, next) {

mysqlconnection.query('SELECT * from runoob_tbl', (err, rows, fields) => {
    console.log(rows)
    })

  res.render('dev', { title: 'dev page' });
});

module.exports = router;
