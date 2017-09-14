const net = require('net');

const server = net.createServer();

server.on('connection', (socket) => {
  console.log('connection');
  socket.on('data', (data) => {
    console.log('data');
    console.log(data.toString());
  });
});

server.on('listening', () => {
  console.log('listening');
});

server.listen(1234);
