'use strict';

describe('Controller: BlogDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('blogsApp'));

  var BlogDetailsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogDetailsCtrl = $controller('BlogDetailsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
