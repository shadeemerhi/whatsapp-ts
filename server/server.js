const io = require('socket.io')(5000);

io.on('connection', socket => {

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