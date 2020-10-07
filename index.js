const express = require("express");
const path = require("path");
const port = 8000;

const db = require("./config/mongoose");
const Contact = require("./models/contact");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());
app.use(express.static("assets"));

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
  
  Contact.find({name:"gargi"},function(err,contacts){
    if(err){
      console.log('Error in fetching contacts from db');
      return;
    }
    return res.render("home", {
      title: "Contacts List ",
      contact_list:contacts ,
    });
  })

});

app.get("/practice", function (req, res) {
  return res.render("practice", { title: "I am here to play" });
});

app.post("/create-contact", function (req, res) {
  //  contactList.push({
  //    name:req.body.name,
  //    phone:req.body.phone
  //  });
  //contactList.push(req.body);
  Contact.create(
    {
      name: req.body.name,
      phone: req.body.phone,
    },
    function (err, newContact) {
      if (err) {
        console.log("err in creating a contact");
        return;
      }
      console.log("***********************",newContact);
      return res.redirect('back');
    }
  );


});

//for deleting a contact
app.get("/delete-contact", function (req, res) {
  console.log(req.query);
  // get the query from the url
  let phone = req.query.phone;

  let contactIndex = contactList.findIndex((contact) => contact.phone == phone);
  if (contactIndex != -1) {
    contactList.splice(contactIndex, 1);
  }

  return res.redirect("back");
});

app.listen(port, function (err) {
  if (err) {
    console.log(`err in runnig the server ${err}`);
  }

  console.log(`Yup my Express  Server is running on Port:`, port);
});
