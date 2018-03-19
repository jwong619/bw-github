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
// come back to this to properly grab topp 100 starred repos
// not just 100 repos
app.get('/topHundredRepos/import/save', (req, res) => {
  var topHundredRepos = [];
  console.log(' ... going to API now');
  rp({
    url: `https://api.github.com/repositories`,
    headers: {'User-Agent': req.headers[`user-agent`]}
  })
  .then((result) => {
    var data = JSON.parse(result);
    data.forEach( (repo) => {
      topHundredRepos.push(repo);
    //console.log('repooooosssssss', JSON.parse(result));

      db.query(`INSERT INTO repos (rank) VALUES (${repo.id})`)
      .then(() => {
        res.send(topHundredRepos);
      })



    })

    // res.send(topHundredRepos);

  })
  // (error, response, body) => {
  //   var data = JSON.parse(body);
  //   data.forEach( (repo) => {
  //     topHundredRepos.push(repo);
      // lets save top repos in db
      // need to get contributors

      // db.query(`INSERT INTO repos (rank, name, ownerName) VALUES (${repo.id}, ${repo.name}, ${repo.owner.login})`)
      // .then(() => {
      //   res.send(topHundredRepos);
      // })

    // res.send(topHundredRepos);
  // })

});

// module.exports = app;