'use strict';

/* jasmine specs for controllers go here */
describe('PipelineView controllers', function() {

  describe('PipelineView', function(){

    beforeEach(module('dashboardApp.pipelineView'));

    it('should create left nav elements with 11 elements', inject(function($controller) {
      var scope = {},
          ctrl = $controller('PipeLineCtrl', {$scope:scope});

      expect(scope.pipeLineElements.length).toBe(11);
    }));

  });
});
