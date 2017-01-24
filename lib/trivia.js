const request = require('request');

function getAll(callback) {
  const url = 'https://www.opentdb.com/api.php?amount=10';
  request(url, function (err, res, body) {
    if (!err && res.statusCode == 200) {
      // console.log(body);
      const data = JSON.parse(body);
      // console.log(data);
      callback(data);
    }
  })
}

function getOne(num, callback) {
  const url = `https://www.opentdb.com/api.php?amount=${num}`;
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
  getAll,
  getOne
}
