import { createServer } from "http";

const PORT = process.env.PORT;
const users = [
  { id: 1, username: "Kamran Khan" },
  { id: 2, username: "Shahjada Khan" },
  { id: 3, username: "Beral" },
];

// logger middleware
const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

// Users handler
const userHandler = (req, res) => {
  res.writeHead(200, { "content-type": "application/json" });
  res.write(JSON.stringify(users));
  res.end();
};
// Users handler by ID
const usersHandlerByID = (req, res) => {
  const id = req.url.split("/")[3];
  const user = users.find((user) => user.id === parseInt(id));
  res.writeHead(200, { "content-type": "application/json" });
  if (user) {
    res.write(JSON.stringify(user));
  } else {
    res.write(JSON.stringify({ message: "User not found" }));
  }
  res.end();
};

//creating a new user

const createUserHandler = (req, res) => {
  let body = "";
  //listening for data
  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    const newUser = JSON.parse(body); // we are converting string to JS object
    users.push(newUser);
    res.write(JSON.stringify(newUser)); // we are converting JS object to JSON
    res.statusCode = 201;
    res.end();
  });
};

const server = createServer((req, res) => {
  logger(req, res, () => {
    if (req.url === "/api/users" && req.method === "GET") {
      userHandler(req, res);
    } else if (
      req.url.match(/\/api\/users\/([0-9])+/) &&
      req.method === "GET"
    ) {
      usersHandlerByID(req, res);
    } else if (req.url === "/api/users" && req.method === "POST") {
      createUserHandler(req, res);
    } else {
      res.writeHead(500, { "content-type": "application/json" });
      res.end(JSON.stringify({ message: "Server error" }));
    }
  });
});

server.listen(PORT, () => {
  console.log(`Port is running at ${PORT}`);
});
