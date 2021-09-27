const assert = require('assert');

const greaterThanTen = arr => {
  let results = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] > 10) {
      results.push(arr[index]);
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

console.log(greaterThanTen(parameter));

assert.strictEqual(typeof greaterThanTen(), 'function');
assert.strictEqual(greaterThanTen(parameter), result);
