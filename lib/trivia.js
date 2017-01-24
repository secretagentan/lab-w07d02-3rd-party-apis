const request = require('request');
const url = 'https://www.opentdb.com/api.php?amount=10';

function get(callback) {
  request(url, function (err, res, body) {
    if (!err && res.statusCode == 200) {
      // console.log(body);
      const data = JSON.parse(body);
      console.log(data);
      callback(data);
    }
  })
}

module.exports = {
  get
}
