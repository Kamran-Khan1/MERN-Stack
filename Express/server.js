import express from "express";
import url from "url";
import path from "path";
import posts from "./routes/posts.js";
import logger from "./middlewares/logger.js";
import errorHandler from "./middlewares/error.js";
import notFoundHandler from "./middlewares/notFound.js";
const PORT = process.env.PORT;
const app = express();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(logger);

//create a static folder-> this is a middleware
// app.use(express.static(path.join(__dirname, "public")));
app.use("/api/posts", posts);
//error handling
app.use(notFoundHandler); //The order of middleware matters
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
