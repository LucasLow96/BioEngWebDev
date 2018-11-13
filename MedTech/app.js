const express = require("express"), // const over var so e.g. bugs can't change the code but gives an error
      path = require("path"); // For adding .css files

const app = express();

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public"))) // Tell app.js to use files form public folder

app.get("/", function(req, res){ // request and response
  console.log("Dogs is best");
  //res.send("Hello World");
  res.render("landing.ejs");
})

app.get("/register", function(req, res){ // request and response
  res.render("register.ejs");
})

app.get("/login", function(req, res){ // request and response
  res.render("login.ejs");
})

app.get("/patients", function(req, res){ // request and response
  res.render("index.ejs");
})

app.get("*", function(req, res){ // For unexpected requests
  res.redirect("/"); // Go to homepage
})

app.listen(3000, process.env.IP, function(){
  console.log("Server has started");
});
