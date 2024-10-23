import http from "http";
const PORT = process.env.PORT;
import fs from "fs/promises";
import path from "path";
import url from "url";

// Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
  try {
    //  Check if GET request
    if (req.method === "GET") {
      let filePath;

      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
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
