let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumodd = 0;

for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 != 0) {
    sumodd += 1;
  }
}


if (sumodd === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(sumodd);
}

