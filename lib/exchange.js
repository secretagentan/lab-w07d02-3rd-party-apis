const request = require('request');
const url = 'http://api.fixer.io/latest?base=USD';

function get(callback) {
request(url, function (err, res, body) {
  if (!err && res.statusCode == 200) {
    // console.log(body);
    const data = JSON.parse(body);
    // console.log(data);
    callback(data);
  }
})

module.exports = {
  get
}
