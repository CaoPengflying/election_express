let mysql = require('mysql');

let pool = mysql.createPool({
/*  host:'192.168.51.106',
    port:'3306',
    user:'tugou',
    password:'tugou123',
    database:'tugou',*/
    host:'127.0.0.1',
  user:'root',
  password:'root',
  database:'count_votes',
});
 exports.Pool = pool;
/*
pool.getConnection(function(err,connection){
  if(err){
    console.log("连接失败");
  }else{
    console.log("连接成功");
  }


});
*/
