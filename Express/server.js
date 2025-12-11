import express from "express";
import url from "url";
import path from "path";
import posts from "./routes/posts.js";
const PORT = 8000;
const app = express();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//create a static folder-> this is a middleware
// app.use(express.static(path.join(__dirname, "public")));
app.use("/api/posts", posts);

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
