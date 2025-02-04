const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a delay to reproduce the error
  setTimeout(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, world!');
  }, 5000);
});

server.on('error', (err) => {
  console.error('Server error:', err);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});