var anguish = require('./anguish');

describe('anguish', function () {

  it('should work with a single argument', function () {
    var one = anguish(function after_ONE (one) {
      return one;
    });
    expect(one(1)).toBe(1);
  });

  it('should work with a single argument', function () {
    var one = anguish(function ONE (one) {
      return one;
    });
    expect(one(1)).toBe(1);
  });

  it('should work with a single argument', function () {
    var one = anguish(function after (one) {
      return one;
    });
    expect(one(1)).toBe(1);
  });

  it('should work with two arguments', function () {
    var add = anguish(function after_ONE_and_TWO (one, two) {
      return one + two;
    });
    expect(add(1).and(2)).toBe(3);
  });

  it('should work with deep nesting', function () {
    var add = anguish(function after_ONE_and_then_there_were_TWO (one, two) {
      return one + two;
    });
    expect(add(1).and.then.there.were(2)).toBe(3);
  });

  it('should work with multiple params in a row', function () {
    var add = anguish(function after_ONE_TWO_and_also_THREE (one, two, three) {
      return one + two + three;
    });
    expect(add(1, 2).and.also(3)).toBe(6);
  });

});
