const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const PORT = process.env.PORT || 5000;
const router = require('./routes/index');
const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection',(socket) => {
  console.log('User Connection !!!');
  socket.on('join',({name, room}) => {

  })
  socket.on('disconnect', () => {
    console.log('User Disconnect !!!')
  });
});

app.use(router);
server.listen(PORT,() => console.log(`🚀 Server ready at ${PORT}`) )