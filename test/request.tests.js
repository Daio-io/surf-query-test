'use strict';

var got = require('got');
var expect = require('chai').expect;
var BASE_URL = 'http://localhost:3000/';

describe('Making Requests', function() {

    it('should return all expected fields', function(done) {

        var location = 'Rest+Bay';
        got(BASE_URL + 'spot?q=' + location, function(err, data){

            for (var i = 0; i < data.length; i++){

                expect(data[i].location).to.exist;
                expect(data[i].spot_id).to.exist;
                expect(data[i].geo.latitude).to.exist;
                expect(data[i].geo.longitude).to.exist;
                expect(data[i].region).to.exist;

            }

            done();

        });

    });

});