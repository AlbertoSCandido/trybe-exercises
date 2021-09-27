const assert = require('assert');

const removeMiddle = arr => {
const middle = Math.floor(arr.length / 2);
let x = [arr[middle]];
arr.splice(middle, 1);
return x;
};


const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle']; 
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);