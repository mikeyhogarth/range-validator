var _ = require('underscore');

module.exports = RangeValidator;
function RangeValidator(options) {
  this.defaults = {
    min: 0,
    max: 0
  };
  this.options = _.extend(this.defaults, options);
}

RangeValidator.prototype.validate = function(n) {
  var errors = [];

  if(n < this.options.min)
    errors.push('Value less than minimum range');

  if(n > this.options.max)
    errors.push('Value exceeds maximum range');

  return { valid: _.isEmpty(errors), errors: errors };
}
