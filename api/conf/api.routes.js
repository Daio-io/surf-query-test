'use strict';

var spotRoutes = require('../surfspots/surfspots.router');

module.exports = function (app) {

    app.use(spotRoutes.routes());

};

