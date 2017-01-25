# 👨‍👩‍👧 3rd Party APIs 

Just as the browser can act as a client and make requests to the server,
our server can act as a client and make requests.

We explored using a MongoDB client to talk to a MongoDB server. Now we
can explore using the Node Request module to make requests to other web servers.

# Setup

```
$ npm init -f
$ npm install --save request
```

Work in the node console to make requests to 3rd party APIs using the Request module.
For each task create a new file inside `lib`. 
Read each link to find how to construct a URL to make an API request.

## Random Words

- Create a file called `randomword.js` 
- http://www.setgetgo.com/randomword/
- console.log a random word.

## Random Users

- Create a file called `randomuser.js`
- https://randomuser.me/
- Use the request module to console.log a random user.

## Trivia

- Create a file called `trivia.js`
- https://opentdb.com/
- Use the request module to console.log 10 random trivia questions.

## Money Exchange

- Create a file called `exchange.js`
- http://fixer.io/
- Use the request module to console.log the exchange rate against the US dollar.

## Recipes

- Create a file called `recipes.js`
- http://www.recipepuppy.com/about/api/
- Use the request module to console.log recipe search results

## Github

- Great a file called `github.js`
- https://api.github.com/users/yourusername
- Use the request module to console.log your user info

# ✨ Next Steps

## Requests in Express

Create an Express application that respond to the following requests.
Turn the above code into modules and require them in Express routes to handle 
the following requests.

```
- [x] GET '/randomword'          => send back JSON with a random word from `randomword.js`
- [x] GET '/randomuser'          => send back JSON with a random user's data from `randomuser.js`
- [x] GET '/trivia'              => send back JSON with all the trivia questions from 'trivia.js'
- [x] GET '/trivia?n=1'          => send back JSON a single trivia question from 'trivia.js'
- [ ] GET '/exchange?amount=50'  => send back JSON of that amount in different currencies from 'exchange.js'
- [x] GET '/recipes/search'      => send back JSON search results from 'recipes.js'
- [ ] GET '/github/:profileName' => send back JSON of that github profile
```

## AJAX and Express

When a user visits '/random' they should see buttons for "word" and "user"
- [x] When a user clicks on "word", use AJAX to get and render a random word from '/randomword'
- [x] When a user clicks on "user", use AJAX to get and render a random word from '/randomuser'

When a user visits '/game' they should see a button "Start"
- [ ] When a user clicks "start", use AJAX to get and render the trivia questions from '/trivia'

When a user visits '/money', they should see an input field and a button "Rate"
- [ ] When a user enters a number and clicks "Rate", use AJAX to get and render the exchange rates for that amount from '/exchange'

When a user visits '/hungry', they should see an input field and a button "Find recipes"
- [ ] When a user enters a list of ingredients into the input field, use AJAX to get and render a list of recipes from '/recipes/search'

When a user visits '/dev', they should see an input field and a button "Find"
- [ ] When a user enters a github profile name, use AJAX to get and render their information from '/github/:profileName'
