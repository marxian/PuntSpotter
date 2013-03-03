'use strict';
/* global describe, beforeEach, inject, it, expect */
describe('Service: puntService', function () {

  // load the service's module
  beforeEach(module('puntspotterApp'));

  // instantiate service
  var puntService, $httpBackend;
  beforeEach(inject(function (_$httpBackend_, _puntService_) {
    puntService = _puntService_;
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('data/punts.json').respond([
      {name: 'Grebe', slug: 'grebe-66', build: 'grp'},
      {name: 'Comet', slug: 'comet-102', build: 'comp'},
      {name: 'Rainbow Trout', slug: 'rainbow-trout-75', build: 'comp'}
    ]);
  }));

  it('should do something', function () {
    expect(!!puntService).toBe(true);
  });

  it('should have a load method which fetches all punts', function() {
    expect(_.isFunction(puntService.load)).toBe(true);
    var punts;
    puntService.load().then(function (data) { punts = data; });
    expect(punts).toBeUndefined();
    $httpBackend.flush();
    expect(punts.length).toBe(3);
  });

  describe('should have a search method', function() {
    it('should be a function which returns a promise', function(){
      expect(_.isFunction(puntService.search)).toBe(true);
      expect(puntService.search({slug: 'grebe-66'}).then).toBeDefined();
    });

    it('which should return all the punts which match the spec', function(){
      var comps;
      puntService.search({build: 'comp'}).then(function(data){ comps = data; });
      $httpBackend.flush();
      expect(comps.length).toBe(2);
    });

    it('which should return an empty array if no matches are found', function(){
      var punt;
      puntService.search({slug: 'imaginary'}).then(function(data){ punt = data; });
      $httpBackend.flush();
      expect(_.isArray(punt)).toBe(true);
      expect(punt.length).toBe(0);
    });

  });

  describe('should have a get method', function(){
    it('should be a function which returns a promise', function(){
      expect(_.isFunction(puntService.get)).toBe(true);
      expect(puntService.get({slug: 'grebe-66'}).then).toBeDefined();
    });

    it('which should return the first punt which matches the spec', function(){
      var punt;
      puntService.get({build: 'comp'}).then(function(data){ punt = data; });
      $httpBackend.flush();
      expect(punt.name).toBe('Comet');
    });

    it('which should return null if no match is found', function(){
      var punt;
      puntService.get({slug: 'imaginary'}).then(function(data){ punt = data; });
      $httpBackend.flush();
      expect(punt).toBe(null);
    });
  });

});
