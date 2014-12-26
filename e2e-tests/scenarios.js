'use strict';

describe('Dashboard App', function() {

  describe('Home page view', function() {

    beforeEach(function() {
      browser.get('index.html');
    });


    it('shouls display the nav bar and the left nav elements', function() {

      var navbarList = element.all(by.repeater('element in NavBarElements'));
      var leftNavList = element.all(by.repeater('element in leftNavElements'));
      expect(navbarList.count()).toBe(4);
      expect(leftNavList.count()).toBe(11);
    });
  });
});
