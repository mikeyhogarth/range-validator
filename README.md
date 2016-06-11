[![Build Status](https://travis-ci.org/mikeyhogarth/range-validator.svg?branch=feature%2Fcontinuous-integration)](https://travis-ci.org/mikeyhogarth/range-validator)
[![Code Climate](https://codeclimate.com/github/mikeyhogarth/range-validator/badges/gpa.svg)](https://codeclimate.com/github/mikeyhogarth/range-validator)
[![Test Coverage](https://codeclimate.com/github/mikeyhogarth/range-validator/badges/coverage.svg)](https://codeclimate.com/github/mikeyhogarth/range-validator/coverage)

Range Validator
===============

Simple function for specifying range validation in node. Currently this is just a little project for me to work on while I'm up feeding the baby at 3am. One day it might be useful.

# Example

```javascript
var RangeValidator = require('range-validator');
var rangeValidator = new RangeValidator({ min: 1, max: 3});

rangeValidator.validate(1);
// { valid: true, errors: [] }

rangeValidator.validate(20);
// { valid: false, errors: ['value exceeds maximum range']}
```
# API
Available options are as follows
* `min` the minimum a value may be
* `max` the maximum a value may be

# Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
