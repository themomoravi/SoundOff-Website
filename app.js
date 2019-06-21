// jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on port 3000");
});

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

var firstName = req.body.fName;

var lastName = req.body.lName;

var email = req.body.Email;

var data = {
  members: [
    {email_address: email,
    status: "subscribed",
    merge_fields: {
      FNAME: firstName,
      LNAME: lastName
    }
  }
  ]
};

var jsonData = JSON.stringify(data);

var options = {
  url: "https://us3.api.mailchimp.com/3.0/lists/e480aad3db",
  method: "POST",
  headers: {
"Authorization": "morrisravis 7c413ee8f25c742c9c869b0b5ae1bd50-us3"
},
body: jsonData
};

request(options, function(error, response, body){
if (error) {
  res.sendFile(__dirname + "/failure.html");
} else {
  if (res.statusCode === 200) {
    res.sendFile(__dirname + "/success.html");
  } else {
    res.sendFile(__dirname + "/failure.html");
  }
}
});


app.post("/failure", function(req, res) {
  res.redirect("/");
});

app.post("/success", function(req, res) {
  res.redirect("/");
});



console.log(firstName, lastName, email);

});























