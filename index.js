const express = require("express");
const path=require('path');
const port = 8000;

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.get("/", function (req, res) {
    console.log(__dirname);
  return res.render('home');
});

app.listen(port, function (err) {   
  if (err) {
    console.log(`err in runnig the server ${err}`);
  }

  console.log(`Yup my Express  Server is running on Port:`, port);
});
