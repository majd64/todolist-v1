const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');

app.get("/", function(req, res){

  var date = new Date();
  var today = date.getDay();

  if (today === 6 || today === 0){
    res.sendFile(__dirname + "/index.html");
  }else{
    res.send("<h1>Ohhhhhh shit</h1>");
  }

});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
