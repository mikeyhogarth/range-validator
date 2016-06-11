var chai = require('chai'),
    expect = chai.expect;

var RangeValidator = require('../index');

describe('rangeValidator', function() {

  var rangeValidator;

  describe('Construction', function() {
    it('allows construction via options object, which can then be accessed', function() {
      rangeValidator = new RangeValidator({ min: 3 });
      expect(rangeValidator.options.min).to.equal(3);
    });
    it('has a set of default options', function() {
      rangeValidator = new RangeValidator();
      expect(rangeValidator.options.min).to.equal(0);
    });
  });


  describe('Validation', function() {
    beforeEach(function() {
      rangeValidator = new RangeValidator({min: 1, max: 3});
    });
    describe('vanilla min and max options', function() {
      context('when value is between the min/max values', function() {
        it('returns a positive result', function() {
          expect(rangeValidator.validate(2)).to.eql({ valid: true, errors: []});
        });
      });
      context('when value is less than the min value', function() {
        it('returns a positive result', function() {
          expect(rangeValidator.validate(0)).to
            .eql({ valid: false, errors: ['Value less than minimum range']});
        });
      });
       context('when value is greater than the max value', function() {
        it('returns a negative result, with the error', function() {
          expect(rangeValidator.validate(5)).to
            .eql({ valid: false, errors: ['Value exceeds maximum range']});
        });
      });
    });
  });
});
