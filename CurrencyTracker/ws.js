var express = require('express');
var app = express();  

app.use(express.static('./public'));

app.use('/graph', function (req, res) {
    res.render('pages/examine');
});

var server = require('websocket').server, http = require('http');

var socket = new server({
    httpServer: http.createServer().listen(1337)
});

socket.on('request', function (request) {
    var connection = request.accept(null, request.origin);

    connection.on('message', function (message) {
        console.log(message.utf8Data);
        connection.sendUTF('hello');
        setInterval(function () {
            connection.sendUTF('this is a websocket example');
        }, 500);
    });

    connection.on('close', function (connection) {
        console.log('connection closed');
    });
}); 

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

