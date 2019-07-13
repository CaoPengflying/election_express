let url = require('url');
let TugouDao = require('../DAO/tugouDao');
let getNewArr = require('../util/getNewArr');
let tugouDao = new TugouDao();
function TugouServer(){
   this.select = function(req,res){

     let params = url.parse(req.url,true).query;
     let rank = params.rank;
     let result = {};
     tugouDao.select(rank,headSelect);

     function headSelect(err,rows){
         if(err){
           result = {
             'code':-1,
             'msg':"查询失败"
           }
         }else {
            result = {
                'code':0,
                'msg':"查询成功",
                'body':getNewArr(rows)
            }
         }
         res.write(JSON.stringify(result));
         res.end();
     }
  }


}
module.exports = TugouServer;

