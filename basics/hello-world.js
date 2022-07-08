// To run this program type: node hello-world.js
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("Hello World!");
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});