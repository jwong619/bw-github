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

app.post('/topHundredRepos/import/save', (req, res) => {
  console.log(' ... going to API now');
  var topHundredRepos = [];

  rp({
    url: `https://api.github.com/search/repositories?q=user&sort=stars&order=desc?access_token={window.token}`,
    headers: {'User-Agent': req.headers[`user-agent`]}
  })
  .then((result) => {
    var data = JSON.parse(result);

    data.items.forEach( (repo, index) => {
      console.log(repo.stargazers_count + ' ' + repo.name);
      rp({
        url: `https://api.github.com/repos/${repo.owner.login}/${repo.name}/contributors?access_token=d499c2a1141f10e4f2401db7661bd8968f9bcbcc`,
        headers: {'User-Agent': req.headers[`user-agent`]}
      })
      .then((result) => {
        var data = JSON.parse(result);
        repo['topContributor'] = data[0];
        topHundredRepos.push(repo);

        topHundredRepos = topHundredRepos.sort((a, b) => {
          return b.stargazers_count - a.stargazers_count;
        });

        if (topHundredRepos.length === 30) {
          res.send(topHundredRepos);
        }

        db.query(`INSERT INTO repos (stars, name, ownerName, topContributor, topContributorAvatar) VALUES (${repo.stargazers_count}, '${repo.name}', '${repo.owner.login}', '${repo.topContributor.login}', '${repo.topContributor.avatar_url}')`)
      })
      .catch((error) => {
        console.log('error when in api ---', error);
      })
    });

  })
});





// app.post('/repos/search/username', (req,res) => {
//   var searchedRepos = [];
//   console.log('searching through API ...');
//   rp({
//     url: `https://api.github.com/users/${req.body.username}/repos?clint_id=3ea1584b528f6b48a19f&client_secret=3e951c8e70fda3c9a77e72a6ac59d4bebf4b63dc`,
//     headers: {'User-Agent': req.headers[`user-agent`]}
//   })
//   .then((result) => {
//     var data = JSON.parse(result);
//     res.send(data);
//   })
//   .catch((error) => {
//     console.log('something went wrong in api call')
//   })
// })




// module.exports = app;