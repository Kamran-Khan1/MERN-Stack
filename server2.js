import { createServer } from "http";

const PORT = process.env.PORT;
const users = [
  { id: 1, username: "Kamran Khan" },
  { id: 2, username: "Shahjada Khan" },
  { id: 3, username: "Beral" },
];

const server = createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/api/users") {
      res.writeHead(200, { "content-type": "application/json" });
      res.write(JSON.stringify(users));
      res.end();
    } else if (req.url.match(/\/api\/users\/([0-9])+/)) {
      const id = req.url.split("/")[3];
      console.log(id);
      const user = users.find((user) => user.id === parseInt(id));
      res.writeHead(200, { "content-type": "application/json" });
      if (user) {
        res.write(JSON.stringify(user));
      } else {
        res.write(JSON.stringify({ message: "User not found" }));
      }
      res.end();
    }
  } else {
    res.writeHead(500, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "Server error" }));
  }
});

server.listen(PORT, () => {
  console.log(`Port is running at ${PORT}`);
});
