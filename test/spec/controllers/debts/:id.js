'use strict';

describe('Controller: DebtsIdCtrl', function () {

  // load the controller's module
  beforeEach(module('playAngularApp'));

  var DebtsIdCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DebtsIdCtrl = $controller('DebtsIdCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DebtsIdCtrl.awesomeThings.length).toBe(3);
  });
});
