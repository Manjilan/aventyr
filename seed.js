var db = require('./models');
var faker = require('faker');

var userList = [];
// var ratingList =[
//   {rating: 1},
//   {rating: 2},
//   {rating: 4},
//   {rating: 5}
// ];

var destinationsList = [
  {
    name: "San Francisco",
    image: "https://image.flaticon.com/icons/png/512/774/774181.png",
  },
  {
    name: "Egypt",
    image: "https://image.flaticon.com/icons/svg/185/185359.svg"
  },
  {
    name: "Paris",
    image: "https://image.flaticon.com/icons/svg/169/169342.svg"
  },
  {
    name: "Agra",
    image: "https://image.flaticon.com/icons/svg/305/305967.svg"
  },
  {
    name: "Sydney",
    image: "https://image.flaticon.com/icons/svg/774/774195.svg"
  },
  {
    name: "Other Locations",
    image: "https://image.flaticon.com/icons/svg/174/174249.svg"
  }
];

var cardList = [
  {
    title: "Golden Gate",
    description: "The Golden Gate Bridge is an iconic structure connecting the city of San Francisco to Marin County, California. It spans almost two miles across the Golden Gate, the narrow strait where San Francisco Bay opens to meet the Pacific Ocean. The dream of connecting San Francisco to its northern neighbors became a reality when construction commenced in 1933. Given the chance for steady employment amid the Great Depression, construction crews braved treacherous conditions as the roadway and towers took shape over open water. The Golden Gate Bridge, opened to the public in 1937, has endured as a picture-perfect landmark and an engineering marvel.",
    image: "https://images.unsplash.com/photo-1416184008836-5486f3e2cf58?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=96758e63046414a225db70c7d2b1cc59&auto=format&fit=crop&w=666&q=80"
  },
  {
    title: "Eiffel Tower",
    description: "When Gustave Eiffel’s company built Paris’ most recognizable monument for the 1889 World’s Fair, many regarded the massive iron structure with skepticism. Today, the Eiffel Tower, which continues to serve an important role in television and radio broadcasts, is considered an architectural wonder and attracts more visitors than any other paid tourist attraction in the world.",
    image: "https://images.unsplash.com/photo-1503302130949-aa7c93f0bcb1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=caf3cfce3a085a07704de5172054c385&auto=format&fit=crop&w=1668&q=80"
  },
  {
    title: "Taj Mahal",
    description: "Commissioned in 1632 by the Mughal emperor Shah Jahan to house the remains of his cherished wife, the Taj Mahal stands on the southern bank of the Yamuna River in Agra, India. The famed mausoleum complex, built over more than 20 years, is one of the most outstanding examples of Mughal architecture, which combined Indian, Persian and Islamic influences. At its center is the Taj Mahal itself, built of shimmering white marble that seems to change color depending on the sunlight or moonlight hitting its surface. Designated a UNESCO World Heritage site in 1983, it remains one of the world’s most celebrated structures and a stunning symbol of India’s rich history.",
    image: "https://images.unsplash.com/photo-1515004207928-a22c7f92c249?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=97bb8ba4c9b823dc214d1fcebb2e0909&auto=format&fit=crop&w=818&q=80"
  },
  {
    title: "Sydney Opera House",
    description:"The Sydney Opera House in Sydney, New South Wales, Australia is one of the most distinctive and famous 20th-century buildings, and one of the most famous performing arts venues in the world. Situated on Bennelong Point in Sydney Harbour, with parkland to its south and close to the enormous Sydney Harbour Bridge, the building and its surroundings form an iconic Australian image. To some the spherical-sectioned shells remind them of the flotilla of sailboats commonly cruising there. Tourists - mostly with little or no interest in opera - throng to the building in their thousands every week purely to see it. As well as many touring theatre, ballet, and musical productions the Opera House is the home of Opera Australia, the Sydney Theatre Company and the Sydney Symphony Orchestra. It is administered by the Opera House Trust, under the New South Wales (NSW) Ministry of the Arts.",
    image: "https://images.unsplash.com/photo-1501159606039-efa80afc41f8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb192619f8d1140c887edc0fd7c98ba&auto=format&fit=crop&w=1502&q=80"
  },
  {
    title: "Sphinx",
    description: "The Great Sphinx of Giza is a giant 4,500-year-old limestone statue situated near the Great Pyramid in Giza, Egypt. Measuring 240 feet (73 meters) long and 66 feet (20 meters) high, the Great Sphinx is one of the world’s largest monuments. It is also one of the most recognizable relics of the ancient Egyptians, though the origins and history of the colossal structure are still debated.",
    image: "https://images.unsplash.com/photo-1486150702851-498e985c2efc?ixlib=rb-0.3.5&s=d5fc45f7b145ab8d3bfd1b44772d0eb5&auto=format&fit=crop&w=1502&q=80"
  }
];

db.Card.deleteMany({}, function(err, cards) {
  console.log('removed all cards');
  db.Card.create(cardList, function(err, cards){
    if (err) {
      console.log(err);
      return;
    }
    console.log('recreated all cards');
    console.log("created", cards.length, "cards");
  })
});

// db.Rating.remove({}, function(err, ratings) {
//   console.log('removed all ratings');
//   db.Rating.create(ratingList, function(err, ratings){
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log('recreated all ratings');
//     console.log("created", ratings.length, "ratings");
//   })
// });

// remove all records that match {} -- which means remove ALL records
db.Destination.deleteMany({}, function(err, destinations) {
  console.log('removed all destinations');
  db.Destination.create(destinationsList, function(err, destinations){
     if (err) {
      console.log(err);
      return;
    }
  console.log('recreated all destinations');
    console.log("created", destinations.length, "destinations");
  })
});


// db.User.remove({}, function(err, users){
//     console.log('removed all users');
//     for (var i=0; i < 5; i++) {
//     userList.push(db.User.create({
//     name: faker.name.firstName(),
//     email: faker.internet.email(),
//     password: "password"
//   }, function(err, users){
//     if(err){
//       return console.log(err);
//     }
//     console.log("recreated all users");
//   }));
// }

// });
