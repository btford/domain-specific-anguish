# domain-specific-anguish

A DSL for making cute partially-applied DSLs.

## Use

```javascript
var anguish = require('domain-specific-anguish');

// let's make a fancy add function
var add = anguish(function after_ONE_TWO_and_also_THREE (one, two, three) {
  return one + two + three;
});

add(1, 2).and.also(3);
// returns 6
```

## License
MIT
