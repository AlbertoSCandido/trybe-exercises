let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function promiseNumbers() {
    let newArr = arr.reduce((acum) => acum.concat(Math.round(Math.pow((Math.random() * 50),2))) ,[])
    let sum = newArr.reduce((acum, cur) => acum + cur, 0)
    if (sum <= 8000) {
      return sum;
    }
    throw new Error()
}

const asyncNumber = async () => {
  try {
    const randomNumber = await promiseNumbers();
    const sumNumber = await sum(randomNumber);
    const result = await xablau(sumNumber)
    console.log(result);
  } catch (xablau) {
    console.log("É mais de oito mil! Essa promise deve estar quebrada!")
  }
}

function sum (number) {
  let arr = [2, 3, 5, 10]
  let newArr = arr.map(numArr => Math.round(number / numArr))
  return newArr;
}

function xablau (arrNumb) {
  let result =  arrNumb.reduce((acum,curr) => acum + curr, 0)
    return result;
}

asyncNumber()
