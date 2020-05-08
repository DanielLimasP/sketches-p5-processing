var express = require('express');
var app = express(); // Express Mumbo Jumbo para crear el server
var server = app.listen(3000); // Creación de un servidor local en el puerto 3000
app.use(express.static('public')); //Uso de los recursos en la carpeta public

console.log("Socket server running"); //Simple console.log

var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
  console.log('new connection: ' + socket.id);
  //console.log(socket);
  socket.on('mouse', mouseMsg);

  function mouseMsg(data){
    socket.broadcast.emit('mouse', data);
    console.log(data);
  }
}
