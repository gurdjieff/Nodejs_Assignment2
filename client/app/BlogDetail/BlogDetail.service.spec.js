'use strict';

describe('Service: BlogDetail', function () {

  // load the service's module
  beforeEach(module('blogsApp'));

  // instantiate service
  var BlogDetail;
  beforeEach(inject(function (_BlogDetail_) {
    BlogDetail = _BlogDetail_;
  }));

  it('should do something', function () {
    expect(!!BlogDetail).toBe(true);
  });

});
