var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
 
var app = express();
app.use(express.static(path.join(__dirname,"/html")));

app.use(bodyParser.json());

app.post('/signin', function (req, res) {
    var user_name=req.body.name;
    var password=req.body.password;
    if(user_name=='admin' && password=='admin'){
        res.send('Success');
    }
    else{
      res.send('Failure');
    }
  })

app.listen(8000, function(){
    console.log("start listening on port", 8000);
})