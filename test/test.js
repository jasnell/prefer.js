'use strict';

const assert = require('assert');
const request = require('request');
const app = require('express')();
const prefer = require('../prefer');
app.use(prefer);
const port = 8888;
describe('It works', function() {
  before(function() {
    app.get('/', function(req,res) {
      assert(req.prefer);
      assert.equal(req.prefer.handling,prefer.LENIENT);
      assert(req.prefer.respondAsync);
      assert.equal(req.prefer['ham sandwich'], undefined);
      assert.equal(req.prefer.return,prefer.MINIMAL);
      assert.equal(req.prefer.foo, 'bar,baz');
      assert.equal(req.prefer.wait, 10);
      res.preferenceApplied(prefer.HANDLING);
      res.status(204).end();
    });
    app.listen(port);
  });
  it('It works', function(done) {
    request.get({
      url: 'http://localhost:' + port,
      headers: {
        'Prefer':
          'handling=lenient, ham sandwich, respond-async, return=minimal, foo="bar,baz", wait=10'
      }
    },function(err,resp,body) {
      assert.equal(resp.headers['preference-applied'], prefer.HANDLING);
      done();
    });
  });
});
