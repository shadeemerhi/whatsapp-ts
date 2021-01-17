const express = require('express');
const app = express();
// const cors = require('cors');
const http = require('http');
const socketio = require('socket.io');

const server = http.createServer(app);
const io = socketio(server, { wsEngine: 'ws' })

const PORT = 5000;
// app.use(cors({ origin: true, credentials: true }));

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
})

server.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}`);
})