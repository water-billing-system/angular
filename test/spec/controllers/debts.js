'use strict';

describe('Controller: DebtsCtrl', function () {

  // load the controller's module
  beforeEach(module('playAngularApp'));

  var DebtsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DebtsCtrl = $controller('DebtsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DebtsCtrl.awesomeThings.length).toBe(3);
  });
});
