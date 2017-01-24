const request = require('request');

function get(user, callback) {
  const options = {
    url: `https://api.github.com/users/${user}/`,
    headers: {
      'User-Agent': 'request'
    }
  }
  request(options, function (err, res, body) {
    if (!err && res.statusCode == 200) {
      // console.log(body);
      const data = JSON.parse(body);
      // console.log(data);
      callback(data);
    }
  })
}

module.exports = {
  get
}
