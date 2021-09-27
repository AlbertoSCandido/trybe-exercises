const result = (num, block) => {
  let random = Math.ceil(Math.random() * 5);
  console.log(random);
  console.log(num);
  return block(random, num) ? "Parabéns você ganhou" : "Tente novamente";
};

const check = (num1, num2) => {
  return num1 === num2 ? true : false;
}

console.log(result(1, check));
