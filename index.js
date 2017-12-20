const appInsights = require("applicationinsights");
appInsights.setup("9ab64f21-30ae-4213-8b4b-bf61539dbe7e");
appInsights.start();

var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});

var port = 9009;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
