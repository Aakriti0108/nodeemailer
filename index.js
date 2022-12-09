var express = require('express')
var socket = require('socket.io')

var app = express();


var server = app.listen(8000,function(){
    console.log("server is listening ")
})

app.use(express.static('public'))

var io = socket(server);

io.on('connection',function(socket){
    // console.log(socket.id);
    socket.on("chat",function(data){
        io.sockets.emit("chat",data);
        console.log(data)
    })

})

// const express = require('express');
// const app = express();
// const http = require('http');
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', (socket) => {
//   console.log('a user connected');
// });

// server.listen(8000, () => {
//   console.log('listening on *:3000');
// });


