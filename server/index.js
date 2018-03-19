var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var rp = require('request-promise');
var db = require('../db');


var app = express();
app.use(express.static(__dirname + '/../client/dist'));

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

// https://api.github.com/repositories?since=364
// token
app.get('/topHundredRepos/import/save', (req, res) => {
  var num = 364;
  console.log(' ... going to API now');
  request({
    url: `https://api.github.com/repositories`,
    headers: {'User-Agent': req.headers[`user-agent`]}
  },
  (error, response, body) => {
    var data = JSON.parse(body);
    // data.forEach( (repo) => {
    //   console.log(repo.id + ' ' + repo.name);
    // })
    console.log(data[0]);

  })

  res.send('hereeeee they are');

});

// module.exports = app;