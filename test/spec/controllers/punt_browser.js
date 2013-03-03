'use strict';

describe('Controller: PuntBrowser', function () {

  // load the controller's module
  beforeEach(module('puntSpotter'));

  var PuntBrowser, scope, $httpBackend;

  // Initialize the controller a mock scopeand a mock http backend
  beforeEach(inject(function (_$httpBackend_, $rootScope, $controller, puntService) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('data/punts.json').respond([
      {name: 'Grebe'},
      {name: 'Comet'},
      {name: 'Rainbow Trout'}
    ]);
    scope = $rootScope.$new();
    PuntBrowser = $controller('PuntBrowser', {
      $scope: scope
    });
  }));

  it('should attach a list of punts to the scope', function () {
    
    $httpBackend.flush();
    expect(scope.punts.length).toBe(3);
  });
});
