var http = require('http');

var server =new http.Server();

server.listen(1544,'127.0.0.1');

server.on('request',function(req,res){

var fs = require('fs');

if(req.url=="/Bropri.ico")
res.end(fs.readFileSync('Bropri.ico'));

if(req.url=="/Style.css")
res.end(fs.readFileSync('Data/Style.css', 'utf8'));

if(req.url=="/info")
var text = fs.readFileSync('ServInfo', 'utf8');

else
var text = fs.readFileSync('ServName', 'utf8');


res.end(text);	
});