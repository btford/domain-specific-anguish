
module.exports = function anguish (fn) {
  var parts = splitFunctionName(fn.name);
  parts.shift();
  var args = [];
  return function innerEventualCall () {
    var localArgs = Array.prototype.slice.call(arguments);
    args = args.concat(localArgs);
    if (parts.length === 0) {
      return fn.apply(null, args);
    } else {
      return namespace(parts.shift(), innerEventualCall);
    }
  }
};


/*
 * takes a string
 * returns an array of arrays like:
 *
 * one_TWO_three_four_FIVE_SIX -> [
 *  ['one'],
 *  ['three', 'four']
 * ]
 */
function splitFunctionName (str) {
  var parts = str.split('_');
  var groups = [],
      currentGroup = [];

  while (parts.length) {
    while (parts.length && parts[0][0] === parts[0][0].toLowerCase()) {
      currentGroup.push(parts.shift());
    }

    while (parts.length && parts[0][0] === parts[0][0].toUpperCase()) {
      parts.shift();
    }
    if (currentGroup.length) {
      groups.push(currentGroup);
    }
    currentGroup = [];
  }

  return groups;
}


/*
 * given an array like ['a', 'b', 'c'] and an item like 'hello'
 * return {a: {b: {c: 'hello' } } }
 */
function namespace (arr, item) {
  var obj = {},
      fin = obj,
      last = arr.pop();

  while (arr.length) {
    obj = (obj[arr.shift()] = {});
  }
  obj[last] = item;
  return fin;
}
