let express = require('express');
let url = require('url');
let TogouServer = require('server/tugouServer.js');
let port = process.env.PROT||8080;
let app = express();

app.listen(port);

console.log("start server port"+ port);

app.get('/function',function(req,res){
  res.write("good morning");
  res.end();
});

app.get('/tugouServer',function(req,res){
    let tugouServer = new TogouServer();
    //let params = url.parse(req.url,true).query;
    tugouServer.select(req,res);
});