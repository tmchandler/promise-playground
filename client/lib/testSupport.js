(function() {

  mocha.setup('bdd');
  chai.use(chaiAsPromised);
  window.expect = chai.expect;
  window.should = chai.should();

  window.onload = function() {
    window.mochaPhantomJS ? mochaPhantomJS.run() : mocha.run();
  };

}());
