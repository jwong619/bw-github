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
  var topContributors = [];
  console.log(' ... going to API now');
  rp({
    url: `https://api.github.com/repositories`,
    headers: {'User-Agent': req.headers[`user-agent`]}
  })
  .then((result) => {
    var data = JSON.parse(result);

    data.forEach( (repo) => {
      topHundredRepos.push(repo);

      rp({
        url: `https://api.github.com/repos/:${repo.owner}/:${repo.name}/contributors`,
        headers: {'User-Agent': req.headers[`user-agent`]}
      })
      .then((result) => {
        var contributor = JSON.parse(result);
        topContributors.push(contributor);
        res.send(topHundredRepos);

        // constributors - save too
        // have to pass back obj {topHundredRepos topContributors}
        // then dispatch both later to update

        // ABLE TO SAVE RIGHT NOW BUT GET CORRECT DATA !!!

        // db.query(`INSERT INTO repos (rank) VALUES (${repo.id})`)
      // .then(() => {
      //   res.send(topHundredRepos);
      // })

      })
    })

    // res.send(topHundredRepos);

  })


});

// module.exports = app;