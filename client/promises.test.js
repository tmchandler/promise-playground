(function() {
  'use strict';

  describe('Promises, Promises', function() {

    describe('makeChange', function() {

      let resolve = makeChange(100);
      let reject = makeChange(49);

      it('should return a promise', function() {
        return makeChange().should.be.an.instanceOf(Promise);
      })

      // Resolve tests----------------------------------------
      it('should resolve when the input is > 50', function() {
        return resolve.should.be.fulfilled;
      });
      it('should resolve with a string equal to resolveMessage', function() {
        const resolveMessage = "Three cheers for currency!";
        return resolve.should.eventually.equal(resolveMessage);
      });
      // Reject tests----------------------------------------
      it('should reject when the input is < 50', function() {
        return reject.should.be.rejected;
      });
      it('should throw an error in the reject case', function() {
        return reject.should.be.rejectedWith(Error);
      });
    });

    describe('practiceChaining', function() {
      let errorCase = practiceChaining(10);

      it('should return a string equal to catchMessage when an error is encountered', function() {
        const catchMessage = "The error is handled";
        return errorCase.should.eventually.equal(catchMessage);
      })
    })

    describe('Refactor to Axios', function() {

      it('should return the result of the GET request to the /peanuts endpoint', function() {
        return peanuts().should.eventually.be.an('string');
      })
      it('should return the result of the GET request to the /pies endpoint', function() {
        return pie().should.eventually.include('pies');
      })
    })
  })
}());