const http = require('http');
const PORT = 3000
const server = http.createServer((req, res) => {
  res.end('<h1>Hello Node!!!!</h1>\n');
});

server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});