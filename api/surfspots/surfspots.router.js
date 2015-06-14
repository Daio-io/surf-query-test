'use strict';

var spotHandlers = require('./surfspots.handlers');
var router = require('koa-router')();

router.get('/spot', spotHandlers.getSurfSpot);

module.exports = router;