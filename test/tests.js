var should = require('should');

var llib = require('../lib/luckycharms-library.js');

describe('luckycharms-library', function(){
  it('can be created', function(){
    should.exist(llib());
  })

  it('has a version number', function() {
    var lib = llib();
    should.exist(lib.version);
    lib.version.should.match(/^\d+\.\d+\.\d+$/);
  })
})
