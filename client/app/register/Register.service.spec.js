'use strict';

describe('Service: Register', function () {

  // load the service's module
  beforeEach(module('blogsApp'));

  // instantiate service
  var Register;
  beforeEach(inject(function (_Register_) {
    Register = _Register_;
  }));

  it('should do something', function () {
    expect(!!Register).toBe(true);
  });

});
