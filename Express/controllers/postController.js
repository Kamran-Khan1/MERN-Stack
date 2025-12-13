let posts = [
  { id: 1, title: "post one" },
  { id: 2, title: "post two" },
  { id: 3, title: "post three" },
];

//CONTROLLERS
//@ GET all posts /api/posts
export const getPosts = (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
};
//@ GET single post /api/posts/:id
export const getPost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    const error = new Error(`User with id: ${id} not found`);
    error.status = 404;
    next(error);
  }
  res.status(200).json(post);
};
//POST a new post /api/posts
export const createPost = (req, res) => {
  const title = req.body.title;
  const post = {
    id: posts.length + 1,
    title: title,
  };
  if (!title) {
    const error = new Error(`You must have to put title`);
    error.status = 400;
    next(error);
  }
  posts.push(post);
  res.status(201).json(posts);
};
//@update an existing post /api/posts/:id
export const updatePost = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  const title = req.body.title;
  if (!post) {
    const error = new Error(`User with id: ${id} not found`);
    error.status = 404;
    next(error);
  }
  if (!title) {
    const error = new Error(`You must have to put title`);
    error.status = 400;
    next(error);
  }
  post.title = title;
  res.status(200).json(posts);
};
//@ DELETE a post /api/posts/:id
export const deletePost = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    const error = new Error(`User with id: ${id} not found`);
    error.status = 404;
    next(error);
  }
  let updatedPosts = posts.filter((post) => post.id !== id);
  posts = updatedPosts;
  res.status(200).json(posts);
};
