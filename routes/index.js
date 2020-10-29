var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://jacob:jacob@cluster0.wchaf.mongodb.net/cats?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
  console.log("mongoose connected");
});

const Schema = mongoose.Schema;
const CatSchema = new Schema ({
  url: String,
  id: String,
  num_id: Number
});

const Cat = mongoose.model("Cat", CatSchema);

const cats = [
  {
    url: 'https://cdn2.thecatapi.com/images/e8t.jpg',
    id: 'e8t',
    num_id: 1
  },
  {
    url: 'https://cdn2.thecatapi.com/images/af8.jpg',
    id: 'af8',
    num_id: 2
  },
  {
    url: 'https://cdn2.thecatapi.com/images/oKIJfbCRy.jpg',
    id: 'oKIJfbCRy',
    num_id: 3
  },
  {
    url: 'https://cdn2.thecatapi.com/images/a5a.jpg',
    id: 'a5a',
    num_id: 4
  },
  {
    url: 'https://cdn2.thecatapi.com/images/44l.jpg',
    id: '44l',
    num_id: 5
  },
  {
    url: 'https://cdn2.thecatapi.com/images/cfg.jpg',
    id: 'cfg',
    num_id: 6
  },
  {
    url: 'https://cdn2.thecatapi.com/images/68s.jpg',
    id: '68s',
    num_id: 7
  }, 
  {
    url: 'https://cdn2.thecatapi.com/images/7gs.jpg',
    id: '7gs',
    num_id: 8
  }, 
  {
    url: 'https://cdn2.thecatapi.com/images/a6l.jpg',
    id: 'a61',
    num_id: 9
  }, 
  {
    url: 'https://cdn2.thecatapi.com/images/EzYYrmFp7.jpg',
    id: 'EzYYrmFp7',
    num_id: 10
  }
]

// cats.forEach(function(cat) {
//   const newCat = new Cat(cat);
//   newCat.save((error) => {
//     if (error) {
//       console.log('error');
//     } else {
//       console.log('data saved to db');
//     }
//   });
// });

/* GET home page. */
router.get('/', function(req, res) {
  randomNum = Math.floor(Math.random() * cats.length);
  Cat.findOne( {num_id: randomNum} )
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      console.log('error')
    })
});

module.exports = router;
