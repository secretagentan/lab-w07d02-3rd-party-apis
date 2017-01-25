const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const app = express();

const randomUser = require('./randomuser.js');
const recipes = require('./recipes.js');
const randomWord = require('./randomword.js');
const trivia = require('./trivia.js');
// const exchange = require('./exchange.js');
const github = require('./github.js');

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'main', layoutsDir: './views/layouts'}));
app.set('view engine', 'hbs');
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index', {title: 'hello from index.hbs'})
})

app.get('/random', (req, res) => {
  res.render('random', {title: 'hello from random.hbs'})
})

app.get('/randomword', (req, res) => {
  randomWord.get( (data) => {
    // console.log(data);
    res.json(data);
  })
})

app.get('/randomuser', (req, res) => {
  randomUser.get( (data) => {
    console.log(data);
    console.log(data.results[0]);
    res.json(data.results[0]);
  })
})

app.get('/game', (req, res) => {
  res.render('trivia', {title: 'let\'s play a game'});
})

trivia.getOne(1, (data) => {
  // console.log(data);
  // console.log(data.results[0].question);
})

// // trivia.getAll( (data) => {
// //   console.log(data);
// // })

// recipes.search('soup', (data) => {
//   console.log(data);
// })



// github.get('secretagentan', (data) => {
//   console.log(data);
// })

const port = 3000;
app.listen(port, () => {
  console.log('Listening on port ' + port);
})
