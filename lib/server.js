const express = require('express');
const randomUser = require('./randomuser.js');
const recipes = require('./recipes.js');
const randomWord = require('./randomword.js');
const trivia = require('./trivia.js');
// const exchange = require('./exchange.js');
const github = require('./github.js');

randomUser.get( (data) => {
  console.log(data);
})

recipes.search('soup', (data) => {
  console.log(data);
})

randomWord.get( (data) => {
  console.log(data);
})

// trivia.getAll( (data) => {
//   console.log(data);
// })

trivia.getOne(1, (data) => {
  console.log(data);
})

github.get('secretagentan', (data) => {
  console.log(data);
})
