'use strict';

describe('Service: Blog', function () {

  // load the service's module
  beforeEach(module('blogsApp'));

  // instantiate service
  var Blog;
  beforeEach(inject(function (_Blog_) {
    Blog = _Blog_;
  }));

  it('should do something', function () {
    expect(!!Blog).toBe(true);
  });

});
