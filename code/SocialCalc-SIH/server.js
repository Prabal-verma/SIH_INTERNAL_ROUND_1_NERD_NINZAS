const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const httpServer = http.createServer(server);
  const io = socketIo(httpServer);

  io.on('connection', (socket) => {
    console.log('A user connected');

    // Broadcast cell updates to all clients
    socket.on('cellUpdate', (data) => {
      socket.broadcast.emit('cellUpdate', data);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
