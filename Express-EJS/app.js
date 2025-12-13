import express from "express";
const PORT = process.env.PORT;
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
  res.render("index", {
    message: "Hello Brother",
    time: new Date(),
    peoples: ["John", "Kamran", "Sabbir"],
  });
});

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
