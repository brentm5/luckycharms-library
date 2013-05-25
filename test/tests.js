var should = require('should'),
    nock = require('nock');

var llib = require('../lib/luckycharms-library.js');

var tOptions = {
  url: 'http://luckycharms.dev/',
  api_key: 'apikey'
}

var Library = llib(tOptions);


describe('luckycharms-library', function(){
  it('can be created', function(){
    should.exist(llib());
  })

  it('has a version number', function() {
    var lib = llib();
    should.exist(lib.version);
    lib.version.should.match(/^\d+\.\d+\.\d+$/);
  })

  describe('#ListUnits', function() {
    nock('http://luckycharms.dev')
    .get('/admin/units.json?api_key=apikey')
    .reply(200, [{id: 2}, {id: 1}]);

    it('returns a list of units', function(done){
      Library.ListUnits(function(data) {
        data.should.includeEql({id: 2});
        data.should.includeEql({id: 1});
        done();
      });
    })
  })

  describe('#CreateBookmark', function() {
    nock('http://luckycharms.dev')
    .post('/admin/bookmarks.json?api_key=apikey', 'name=bookmark-1&url=http%3A%2F%2Fwww.google.com%2F')
    .reply(200, {name: "bookmark-1", url: "http://www.google.com/"});

    it('returns the created bookmark', function(done){
      Library.CreateBookmark('bookmark-1', 'http://www.google.com/', function(data, errors) {
        data.should.include({name: 'bookmark-1', url: 'http://www.google.com/'});
        done();
      });
    })

    nock('http://luckycharms.dev')
    .post('/admin/bookmarks.json?api_key=apikey', 'name=bookmark-1&url=http%3A%2F%2Fwww.google.com%2F')
    .reply(422, {errors: { name: "has already been taken" }});

    it('returns an error object', function(done){
      Library.CreateBookmark('bookmark-1', 'http://www.google.com/', function(data, errors) {
        errors.should.be.true
        data.should.include({errors: {name: 'has already been taken'}});
        done();
      });
    })
  })

  describe('#UpdateUnitUrl', function() {
    nock('http://luckycharms.dev')
    .post('/admin/units/unit-1/current_url.json?api_key=apikey', 'url=http%3A%2F%2Fwww.google.com%2F')
    .reply(200, {id: 1, current_url: "http://www.google.com/"});

    it('returns the updated unit', function(done){
      Library.UpdateUnitUrl('unit-1', 'http://www.google.com/', function(data) {
        data.should.include({id: 1, current_url: 'http://www.google.com/'});
        done();
      });
    })
  })

})

