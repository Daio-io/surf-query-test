'use strict';

var mongoose = require('mongoose');

var SurfSpotSchema = mongoose.Schema({

    spot_name: String,
    spot_id: Number,
    location: {
        country: String,
        region: String
    },
    geo: {
        latitude: Number,
        longitude: Number
    }

});

var SurfSpotModel = mongoose.model('SurfSpot', SurfSpotSchema);

module.exports = SurfSpotModel;