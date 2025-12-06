import http from "http";
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  //   res.write("Hello World!");
  //----------------------- we can also send status codes---------------
  //   res.statusCode = 404; // 404- not found
  //   res.setHeader("content-type", "text/plain");
  res.writeHead(200, { "content-type": "text/html" });
  console.log(req.url); //- in which terminal we hit a request
  console.log(req.method); //- what type of request it is?

  res.end("<h1>Hello World!</h1>");
});

server.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
