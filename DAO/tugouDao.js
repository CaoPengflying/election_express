let Pool = require('../util/MysqlUtil.js');
let pool = Pool.Pool;

function tugouDao() {
  this.select = function(rank,callback){
     let sql = 'select * from tb_student limit '+rank;
    pool.getConnection(function(err,connection){
        if(err){
          console.log("连接失败");
          return;
        }else{
          console.log("连接成功");
          connection.query(sql,function(err,rows,fields){
                if(err){console.log("查询失败");
                  return;
                }
                callback(err,rows);

          })
        }
    })

  }

}
module.exports = tugouDao;