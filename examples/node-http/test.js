require('./node-http');

var Browser = require('zombie'),
    visitLinks = require('../testlib/visitLinks'),
    DE = new Browser({
      headers: {
        'accept-language': 'de'
      }
    }),
    EN = new Browser(
      {
      headers: {
        'accept-language': 'en'
      }
    });

describe('res.__() is able to handle concurrent request correctly', function(){
    describe('serial requests', function () {
      visitLinks('series', 'test', EN, 'Hello', DE, 'Hallo');
    });

    describe('parallel requests', function () {
      visitLinks('parallel', 'test', EN, 'Hello', DE, 'Hallo');
    });
});