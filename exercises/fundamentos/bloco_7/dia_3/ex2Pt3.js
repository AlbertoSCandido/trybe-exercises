const assert = require('assert');

const removeVowels = (str) => {
  const characters = str.split('');
  const results = [];
  let sum = 0;
  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      sum += 1;
      results.push(sum);
    } else {
      results.push(characters[index]);
    }
  }
  return results;
};


const parameter = 'Dayane';
const result = 'D1y2n3';

console.log(removeVowels('Dayane'));


assert.strictEqual(typeof removeVowels(), 'function');
assert.strictEqual(removeVowels(parameter), result);