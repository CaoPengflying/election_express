let express = require('express');
let url = require('url');
let TogouServer = require('./server/TugouServer');
let port = process.env.PROT||8080;
let app = express();

app.listen(port);
app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header('Content-Type', 'text/plain; charset=utf-8');
    if (req.method == 'OPTIONS') {
        res.send(200); /让options请求快速返回/
    }
    else {
        next();
    }
});
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

app.get('/helloServer',function(req,res){
    let helloServer = new HelloServer();
    helloServer.hello(req,res);
})
