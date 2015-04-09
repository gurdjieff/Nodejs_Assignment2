'use strict';

describe('Controller: PostblogsCtrl', function () {

  // load the controller's module
  beforeEach(module('blogsApp'));

  var PostblogsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostblogsCtrl = $controller('PostblogsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
