const path = require("path");

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "pug");
app.set("views", "views");

const projects = [
  {
    id: "0",
    title: "Fetch API Lab",
    image:
      "https://github.com/leandrofahur/nodejs-express-portfolio/tree/main/public/images/dog.jpeg",
    description: "Fetch a dog",
    technologies: ["Javascript"],
    link: "https://github.com/leandrofahur/fetch-api-lab",
  },
];

// render the main page:
app.get("/", (req, res) => {
  res.render("index");
});

// serve about page:
app.get("/about", (req, res) => {
  res.render("about");
});

// serve product page:
app.get("/project", (req, res) => {
  res.render("project");
});

app.listen(3000, () => {
  console.log("🚀 Server up and running on port 3000");
});
