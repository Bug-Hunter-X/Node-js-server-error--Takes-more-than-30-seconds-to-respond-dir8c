const http = require('http');

const server = http.createServer((req, res) => {
  // Set a timeout for the request
  const timeoutId = setTimeout(() => {
    res.writeHead(504, { 'Content-Type': 'text/plain' });
    res.end('Request timed out');
  }, 3000);

  // Simulate a delay
  setTimeout(() => {
    clearTimeout(timeoutId); // Clear the timeout if the request completes successfully
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