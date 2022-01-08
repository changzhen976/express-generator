var express = require('express');
const { json } = require('express/lib/response');
var bodyParser = require('body-parser')
var moment = require('moment')


const ok_flag = {"status": "ok"}

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

  mysqlconnection.query('INSERT INTO device_test (deviceid, temprature, humidity, date, time) VALUES (?, ?, ?, ?, ?)',
                          [result.deviceid, result.temprature, result.humidity, moment().format('YYYY-MM-DD'), moment().format('HH:mm:ss')],function(err, result){
                            if(err) {
                              console.log(err)
                            }
                            console.log(result)
                          })
                          
  res.send(ok_flag)
  //res.render('dev',{ title: 'dev page' })

})

module.exports = router;
