//MySQL database
const mysql = require('mysql2')
var fs = require('fs')

//read cfg file
var dbcfg = JSON.parse(fs.readFileSync('./cfg.json'))

console.log(dbcfg)

//connect MySQL database
const mysqlconnection = mysql.createConnection(dbcfg.database)

//check if connect success
mysqlconnection.connect((err)=>{
  if(err){
    console.error('dababase error '+ err.stack)
    return
  }
  console.log('database connect success!'+ mysqlconnection.threadId)
})


module.exports = mysqlconnection;