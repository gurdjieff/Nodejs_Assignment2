'use strict';

describe('Controller: BlogsCtrl', function () {

  // load the controller's module
  beforeEach(module('blogsApp'));

  var BlogsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogsCtrl = $controller('BlogsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
