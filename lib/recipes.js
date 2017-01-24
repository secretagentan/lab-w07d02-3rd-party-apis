const request = require('request');

function search(query, callback) {
  const url = `http://www.recipepuppy.com/api/?q=${query}&p=3`;
  request(url, function (err, res, body) {
    if (!err && res.statusCode == 200) {
      // console.log(body);
      const data = JSON.parse(body);
      // console.log(data);
      callback(data);
    }
  })
}

module.exports = {
  search
}
