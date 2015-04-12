'use strict';

describe('Controller: ReleventusersCtrl', function () {

  // load the controller's module
  beforeEach(module('blogsApp'));

  var ReleventusersCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReleventusersCtrl = $controller('ReleventusersCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
