import { Router } from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/postController.js";
const routes = Router();

//geting the query string
routes.get("/", getPosts);

//getting the user with id
routes.get("/:id", getPost);

//creating a new post
routes.post("/", createPost);

//updating a post
routes.put("/:id", updatePost);

//deleting a post

routes.delete("/:id", deletePost);

export default routes;
