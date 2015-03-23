#!/usr/bin/env node
'use strict';

var request = require('request'),
    cors = require('cors'),
    express = require('express'),
    urlResolve = require('url').resolve;


var app = express();

app.get('/:module', cors(), function (req, res){
  var url = urlResolve('http://registry.npmjs.org/', req.params.module);
  request.get({ url: url, json: true }, function (err, resp, body) {
    if (err) {
      res.status(500).end('Internal server error');
    }
    else {
      res.status(resp.statusCode).jsonp(body);
    }
  });
});

(function start(port) {
  app.listen(port);
  console.log('Listening on ' + port);
}(process.env.PORT || 5000));
