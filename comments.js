// Create web server
// Use express to create web server
const express = require('express');
// Create web server
const app = express();
// Create server
const server = require('http').createServer(app);
// Use socket.io to listen for server
const io = require('socket.io')(server);
// Create comments array
const comments = [];
// Create connection
io.on('connection', (socket) => {
  // Send comments to client
  socket.emit('comments', comments);
  // Add comment to comments array
  socket.on('addComment', (comment) => {
    comments.push(comment);
    // Send comments to client
    io.emit('comments', comments);
  });
});
// Use port 3000
server.listen(3000);