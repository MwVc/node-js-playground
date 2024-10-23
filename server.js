import http from "http";
const PORT = 5000;

const server = http.createServer((req, res) => {
  //   res.setHeader("Content-type", "text/html");
  //   res.statusCode = 404;

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Basic information site</h1>");
});

server.listen(PORT, () => {
  console.log("Server has been started on port:" + PORT);
});
