var fs = require('fs');
var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('index2.html', function(err, content) {
        response.write(content)
        response.end()
    })
}).listen(8080)

console.log('Listening on port 8080');