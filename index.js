var opengraph = require('opengraph-io')({appId: process.env.key});

var express = require('express');
var app = express();
 
app.get('/pull/', function (req, res) {
  var siteUrl = req.query['url'];
 
  opengraph.getSiteInfo(siteUrl, function(err, siteInfo){
    if (err) res.json(err) 
    else res.json(siteInfo.hybridGraph);
  });
 
});
 
app.listen(3000)
console.log('Example app listening on port 3000!');

