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
  res.sendFile('index');
});

//----------------Routes------------->
//View of all cards
app.get("/api/cards", function(req, res){
  Card.find({}, function(err, allCards){
    if (err){
      console.log(err);
    } else {
      res.render("cards", {cards: allCards, error: null});
    }
});
});

//Showpage for individual cards
app.get("/api/cards/:id", function(req, res){
  Card.findOne({_id: CardId}, function(err, foundCard){
    console.log(foundCard);
    if (err){
      console.log(err);
    } else{
      foundCard.title = req.body.title || foundCard.title;
      foundCard.description = req.body.description || foundCard.description;
      foundCard.image = req.body.title || foundCard.image;
    }
  })
});



//-------------Server------------->
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
