const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    res.end("n");
  } else {
    res.end("This is the page that you are not looking for");
  }
});

server.listen(8080);
