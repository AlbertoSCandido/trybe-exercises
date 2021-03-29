let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higherNumber = 0;
let lowestNumber = 100000000000;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < lowestNumber){
        lowestNumber = numbers[index];
    }
}
console.log(lowestNumber);
