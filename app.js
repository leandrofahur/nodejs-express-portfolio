const path = require("path");

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "pug");
app.set("views", "views");

// render the main page:
app.get("/", (req, res) => {
  res.render("index");
});

// serve about page:
app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(3000, () => {
  console.log("🚀 Server up and running on port 3000");
});
