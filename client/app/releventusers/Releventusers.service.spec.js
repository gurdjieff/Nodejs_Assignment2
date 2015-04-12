'use strict';

describe('Service: Releventusers', function () {

  // load the service's module
  beforeEach(module('blogsApp'));

  // instantiate service
  var Releventusers;
  beforeEach(inject(function (_Releventusers_) {
    Releventusers = _Releventusers_;
  }));

  it('should do something', function () {
    expect(!!Releventusers).toBe(true);
  });

});
