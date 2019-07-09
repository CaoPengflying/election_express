var url = require('url');

function HelloServer(){
    this.hello = function(req,res) {
        let result = "hello world";
        res.write(JSON.stringify(result));
        res.end();
    }
};
module.exports = HelloServer;
