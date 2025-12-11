import { Router } from "express";

const routes = Router();

let posts = [
  { id: 1, title: "post one" },
  { id: 2, title: "post two" },
  { id: 3, title: "post three" },
];

//geting the query string
routes.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
});

//getting the user with id
routes.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res.status(404).json({ msg: `User with id: ${id} not found❗` });
  }
  res.status(200).json(post);
});

//creating a new post
routes.post("/", (req, res) => {
  const title = req.body.title;
  const post = {
    id: posts.length + 1,
    title: title,
  };
  if (!title) {
    return res.status(400).json({ msg: "You must have to put title" });
  }
  posts.push(post);
  res.status(201).json(posts);
});

//updating a post
routes.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  const title = req.body.title;
  if (!post) {
    return res.status(404).json({ msg: `The user with id: ${id} not found` });
  }
  if (!title) {
    return res.status(400).json({ msg: "You must have to put title" });
  }
  post.title = title;
  res.status(200).json(posts);
});

//deleting a post

routes.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res.status(404).json({ msg: "user not found" });
  }
  let updatedPosts = posts.filter((post) => post.id !== id);
  posts = updatedPosts;
  res.status(200).json(posts);
});

export default routes;
