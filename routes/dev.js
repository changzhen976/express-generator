var express = require('express');
const { json } = require('express/lib/response');
var bodyParser = require('body-parser')


var router = express.Router();

var mysqlconnection = require('../mysqlconnection');

/* GET home page. */
router.get('/', function(req, res, next) {

  mysqlconnection.query('SELECT * from runoob_tbl', (err, rows, fields) => {
    console.log(rows)
    })

  res.render('dev', { title: 'dev page' });
});


router.post('/', bodyParser.json(),function(req,res){

  var result = req.body

  console.log(result)

  res.render('dev',{ title: 'dev page' })

})

module.exports = router;
