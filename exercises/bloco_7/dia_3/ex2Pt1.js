const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// 1 Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);;

// 2 Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]

assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);