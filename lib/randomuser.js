const request = require('request');
const url = 'https://randomuser.me/api/';

request(url, function (err, res, body) {
  if (!err && res.statusCode == 200) {
    console.log(body);
    const data = JSON.parse(body);
    console.log(data);
  }
})
