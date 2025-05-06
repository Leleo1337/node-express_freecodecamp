const http = require("http");

const server = http.createServer((req, res) => {
   if (req.url === "/") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1> Home page </h1>");
      res.end();
   } else if (req.url === "/contact") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1> Contact page </h1>");
      res.end();
   } else {
      res.writeHead(404, { "content-type": "text/html" });
      res.end('<h1> something went wrong! go back to <a href="/">Home</a></h1>');
   }
});

server.listen(5000, () => console.log("server running on port: 5000"));