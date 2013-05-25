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

})

