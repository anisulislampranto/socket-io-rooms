const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
require('dotenv').config();

const port = process.env.PORT || 4040

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.join('kitchen-room');
  io.sockets.in('kitchen-room').emit('cooking', 'vaat daal hochche');
  io.sockets.in('kitchen-room').emit('cleaning', 'thala bashon dhoya hochcche');



  socket.join('bed-room');
  io.sockets.in('bed-room').emit('sleeping', 'ghumai shobai chupchap');
  io.sockets.in('bed-room').emit('meeting', 'bed room meeting er jayga na');





});

server.listen(port, () => {
  console.log(`listening on ${port}`);
});