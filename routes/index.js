var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { 
        title: 'AWS Server details' 
    });
});

var baseURL = "http://169.254.169.254/latest/meta-data";

// ami-id
// ami-launch-index
// ami-manifest-path
// block-device-mapping/
// hostname
// instance-action
// instance-id
// instance-type
// local-hostname
// local-ipv4
// mac
// metrics/
// network/
// placement/
// profile
// public-hostname
// public-ipv4
// public-keys/
// reservation-id
// security-groups
// services/

request(baseURL + '/public-ipv4', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    public_ipv4 = body;
  }
});

request(baseURL + '/public-hostname', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    public_hostname = body;
  }
});

// http.get(options, function(res) {
//     statusCode = res.statusCode;
//     res.on("data", function(chunk) {
//         ip = chunk;
//     });
// }).on('error', function(e) {
//     message = e.message;
//   console.log("Got error: " + e.message);
// });

module.exports = router;
