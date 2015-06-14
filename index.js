'use strict';

var http = require('http');
var koa = require('koa');
var app = koa();

var server = http.createServer(app.callback());

server.listen(3000, function() {

    console.log('Surf-Query Started on:', 3000);

});