// server.js
// SERVER-SIDE JAVASCRIPT


/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

var express = require('express');
var app = express();


var bodyParser = require('body-parser');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

var db = require('./models'),
  Card = db.Card,
  Destination = db.Destination,
  User = db.User;

app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

////////////////////
//  ROUTES
///////////////////

// set view engine to ejs
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.sendFile('index.ejs');
});


app.listen(process.env.PORT || 3000, function(){

  console.log("listening..");
});

//*** Users Routes ***//
app.get('/user',function(req, res){
  if (err){
    res.status(500).json( {error : err.message, });
  else{
    res.json(User);
    }
  }
});

app.get('/signup', function(req, res){
  res.redirect('/');
    }
  };
});
