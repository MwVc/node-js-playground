const { log } = require("console");
const http = require("http");

const server = http.createServer();
server.on("request", (req, res) => {
  res.end("I am serving you");
});

server.listen(9090, () => {
  console.log("You have been served");
});
