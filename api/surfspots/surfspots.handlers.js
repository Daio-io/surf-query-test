'use strict';

var SurfSpotModel = require('./surfspots.model');

exports.getSurfSpot = function *() {

    let search = new RegExp(this.query.q, 'i');
    let query = SurfSpotModel.find({location: search});

    this.body = yield query.exec();

};