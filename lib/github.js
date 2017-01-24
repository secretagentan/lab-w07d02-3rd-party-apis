const request = require('request');
const url = 'https://api.github.com/users/secretagentan/';

request(url, function (err, res, body) {
  if (!err && res.statusCode == 200) {
    // console.log(body);
    const data = JSON.parse(body);
    console.log(data);
  }
})
