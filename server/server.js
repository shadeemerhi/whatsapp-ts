const express = require('express');
const app = express();
const http = require('http');
const socketio = require('socket.io');

const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    // origin: true, 
    // methods: ['GET', 'POST']
  }
})

const PORT = 5000;
io.on('connection', socket => {

  console.log('new connection')

  // the socket has a new ID with every connection, so we want to create static one
  const id = socket.handshake.query.id;
  socket.join(id);

  socket.on('sendMessage', ({ recipients, text }) => {
    recipients.forEach(recipient => {
      const newRecipients = recipients.filter(r => r !== recipient);
      newRecipients.push(id);
      socket.broadcast.to(recipient).emit('receiveMessage', {
        recipients: newRecipients, sender: id, text
      })
    })
  })

  socket.on("disconnect", () => {
    console.log("Disconnected");
  });
})

server.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}`);
})