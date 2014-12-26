'use strict';

/* jasmine specs for controllers go here */
describe('Leftnav controllers', function() {

  describe('LeftNavCtrl', function(){

    beforeEach(module('dashboardApp.leftNav'));

    it('should create left nav elements with 11 elements', inject(function($controller) {
      var scope = {},
          ctrl = $controller('LeftNavCtrl', {$scope:scope});

      expect(scope.leftNavElements.length).toBe(11);
    }));

  });
});
