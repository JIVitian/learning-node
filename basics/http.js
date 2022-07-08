// HTTP Module
const http = require("http");

// Create a server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // Send the HTTP header status 200 which means OK
    res.writeHead(200, { "Content-Type": "text/html" });
    // Send the response body as "Hello World"
    res.end("Hello World!");
  }

  // If the URL is /api/courses it will return the JSON data
  if(req.url === "/api/courses") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify([1, 2, 3]));
  }
});

// Listen on port 3000, IP defaults to
server.listen(3000);

console.log("Server is running...");
