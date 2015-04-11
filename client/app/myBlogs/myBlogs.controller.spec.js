'use strict';

describe('Controller: MyBlogsCtrl', function () {

  // load the controller's module
  beforeEach(module('blogsApp'));

  var MyBlogsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyBlogsCtrl = $controller('MyBlogsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
