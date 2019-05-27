var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/aventyr", { useNewUrlParser: true });

module.exports.User = require("./user");
module.exports.Card = require("./card.js");
// module.exports.Rating = require("./rating.js");
module.exports.Destination = require("./destination.js");
