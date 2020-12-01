const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
const port = 9000;
const items = ["Buy food", "Cook food", "Eat food"];
const workItems = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  const day = date.getDay();

  res.render("list", { kindOfDay: day, newListItems: items });
});

app.post("/", function (req, res) {
  const item = req.body.newItem;

  if (req.body.list === "work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
  console.log("item introdus in item " + items);
  console.log("item introdus in work " + workItems);
});

app.get("/work", function (req, res) {
  res.render("list", { kindOfDay: "work list", newListItems: workItems });
});

app.post("/work", function (req, res) {
  // const item = req.body.newItem;
  // workItems.push(item);
  // res.redirect("/work")
});

app.listen(port, function () {
  console.log("Server start on port " + port);
});
