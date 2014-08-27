# domain-specific-anguish

A DSL for making cute partially-applied DSLs.

## Use

```javascript
var anguish = require('domain-specific-anguish');

var after = anguish(function after_OBJ_PROP_isDefinedDo_FN (obj, prop, fn) {
  var desc = Object.getOwnPropertyDescriptor(obj, prop) || {};
  desc.onfigurable = true;
  desc.set = function (val) {
    unSet();
    obj[prop] = val;
    fn();
  };
  Object.defineProperty(obj, prop, desc);
  function unSet() {
    delete desc.set;
    Object.defineProperty(obj, prop, desc);
  }
});

after(x, 'y').isDefined(function () {
  console.log('hi');
});

x.y = 3; // console.log => 'hi'
```

## License
MIT
