'use strict';

describe('Controller: DebtsDetailsIdCtrl', function () {

  // load the controller's module
  beforeEach(module('playAngularApp'));

  var DebtsDetailsIdCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DebtsDetailsIdCtrl = $controller('DebtsDetailsIdCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DebtsDetailsIdCtrl.awesomeThings.length).toBe(3);
  });
});
