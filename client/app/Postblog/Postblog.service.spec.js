'use strict';

describe('Service: Postblog', function () {

  // load the service's module
  beforeEach(module('blogsApp'));

  // instantiate service
  var Postblog;
  beforeEach(inject(function (_Postblog_) {
    Postblog = _Postblog_;
  }));

  it('should do something', function () {
    expect(!!Postblog).toBe(true);
  });

});
