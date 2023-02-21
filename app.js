//include express from node_modules
const express = require("express");
const app = express();

//define server related variables
const port = 3000;

//require express-handlebars
const exphbs = require("express-handlebars");

//setting template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//setting static files
app.use(express.static("public"));

//request & response
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/portfolio", (req, res) => {
  res.render("portfolio");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});
//start and listen to the server
app.listen(port, () => {
  console.log(`Express is running on http://localhost${port}`);
});
