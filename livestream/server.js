const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.send("Live Streaming Backend Running");
});

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('joinEvent', (eventId) => {
    socket.join(eventId);
    io.to(eventId).emit('userJoined', 'A new user has joined the event');
  });

  socket.on('sendMessage', ({ eventId, message }) => {
    const timestamp = new Date().toLocaleTimeString();
    io.to(eventId).emit('newMessage', { message, timestamp });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));