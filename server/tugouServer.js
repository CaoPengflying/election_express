let url = require('url');
let TugouDao = require('DAO/tugouDao.js');
let tugouDao = new TugouDao();

function tugouServer(){
   this.select = function(req,res){
     let params = url.parse(req.url,true).query;
     let rank = params.rank;
     let result = {};
     tugouDao.select(rank,headSelect);

     function headSelect(rows){
         result.body = {
           'code':0,
           'msg':"查询成功"
         };
         if(err){
           result.body = {
             'code':-1,
             'msg':"查询失败"
           }
         }
         res.write(JSON.stringify(result));
         res.end();

     }
  }


}
module.exports = tugouServer;

