import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";
const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename);
console.log(__dirname);
const server = http.createServer(async (req, res) => {
  //Creating a router
  try {
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "home.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        throw new Error("Not found");
      }
      let data = await fs.readFile(filePath);
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      res.end();
    }
  } catch (e) {
    res.writeHead(500, { "contect-type": "text/plain" });
    res.end("Server error");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
