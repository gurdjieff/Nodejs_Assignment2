'use strict';

describe('Service: Login', function () {

  // load the service's module
  beforeEach(module('blogsApp'));

  // instantiate service
  var Login;
  beforeEach(inject(function (_Login_) {
    Login = _Login_;
  }));

  it('should do something', function () {
    expect(!!Login).toBe(true);
  });

});
