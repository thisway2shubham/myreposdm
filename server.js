const http=require('http');

http.createServer( function(req, res){
    res.write("hello guyzz");
    res.end();
}).listen(3000)
console.log('server running on port 3000')