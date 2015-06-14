'use strict';

var got = require('got');
var expect = require('chai').expect;
var BASE_URL = 'http://localhost:3000/';

describe('Making Requests', function() {

    it('should return all expected fields', function(done) {

        var location = 'Rest+Bay';
        got(BASE_URL + 'spot?q=' + location, function(err, data){

            for (var i = 0; i < data.length; i++){

                // Spot
                expect(data[i].spot_id).to.exist;
                expect(data[i].spot_name).to.exist;

                // Location
                expect(data[i].location.country).to.exist;
                expect(data[i].location.region).to.exist;

                // Geo
                expect(data[i].geo.latitude).to.exist;
                expect(data[i].geo.longitude).to.exist;

            }

            done();

        });

    });

});