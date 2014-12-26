'use strict';

/* jasmine specs for controllers go here */
describe('NavBar controllers', function() {

  describe('NavBarCtrl', function(){

    beforeEach(module('dashboardApp.navBar'));

    it('should create nav bar elements with 4 elements to its right', inject(function($controller) {
      var scope = {},
          ctrl = $controller('NavBarCtrl', {$scope:scope});

      expect(scope.NavBarElements.length).toBe(4);
    }));

  });
});
