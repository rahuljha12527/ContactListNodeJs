const express = require("express");
const path = require("path");
const port = 8000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());

//middleware1
app.use(function(req,res,next){
  req.myName="Rahul"
   //console.log("middleware 1 called");
   next();
});

//middleware2
app.use(function(req,res,next){
  console.log('My Name from Mw2',req.myName);
  console.log("middleware 2 called");
  next();
});







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
  console.log(" from /",req.myName);
  return res.render("home", {
    title: "Contacts List ",
    contact_list: contactList,
  });
});

app.get("/practice", function (req, res) {
  return res.render("practice", { title: "I am here to play" });
});

app.post('/create-contact',function(req,res){
    //  contactList.push({
    //    name:req.body.name,
    //    phone:req.body.phone
    //  });
    contactList.push(req.body);
    

     return res.redirect('back');
})

app.listen(port, function (err) {
  if (err) {
    console.log(`err in runnig the server ${err}`);
  }

  console.log(`Yup my Express  Server is running on Port:`, port);
});
