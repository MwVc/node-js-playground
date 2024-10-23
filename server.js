import http from "http";
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  try {
    //  Check if GET request
    if (req.method === "GET") {
      if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>This is my personal homepage</h1>");
      } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>This is my personal homepage</h1>");
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(`<h1>Page Not Found!!</h1>
          <a href="/">Go Back Home</a>
          `);
      }
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Server Error");
  }
});

server.listen(PORT, () => {
  console.log("Server has been started on port:" + PORT);
});
