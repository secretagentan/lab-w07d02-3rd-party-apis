const request = require('request');
const url = 'http://www.setgetgo.com/randomword/get.php';

// request('http://www.google.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body); // Show the HTML for the Google homepage.
//   }
// })

function get(whenever) {
  request(url, function (err, res, body) {
    if (!err && res.statusCode == 200) {
      // const data = JSON.parse(body);
      // console.log(body);
      whenever(body);
    }
  })
}

module.exports = {
  get
}
