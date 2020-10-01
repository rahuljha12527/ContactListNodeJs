const express = require("express");
const path = require("path");
const port = 8000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

var contactList = [
  {
    name: "rahul jha",
    phone: "8750023232",
  },
  {
    name: "Tony stark",
    phone: "123464378",
  },
  {
    name: "Startup",
    phone: "877743743",
  },
];
app.get("/", function (req, res) {
  return res.render("home", {
    title: "Contacts List ",
    contact_list: contactList,
  });
});

app.get("/practice", function (req, res) {
  return res.render("practice", { title: "I am here to play" });
});
app.listen(port, function (err) {
  if (err) {
    console.log(`err in runnig the server ${err}`);
  }

  console.log(`Yup my Express  Server is running on Port:`, port);
});