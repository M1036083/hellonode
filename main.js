// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Node Applicaion Testing Jan21");
});

// listen on localhost:8000
server.listen(9000);
console.log("Server listening at http://127.0.0.1:9000/");
