let arr = [1,2,3,4,5,6,7,8,9,10]

function promiseNumbers() {
  return new Promise((resolve, reject )=> {
    let newArr = arr.reduce((acum) => acum.concat(Math.round(Math.pow((Math.random() * 50),2))) ,[])
    // console.log(newArr);
    let sum = newArr.reduce((acum, cur) => acum + cur, 0)
    // console.log(sum);
    if (sum <= 8000) {
      return resolve(sum);
    }
    reject()
  })
}

promiseNumbers()
  .then((num) => {
    console.log('Promise resolvida');
    console.log(num);
    return num
  })
  .then((number) => {
  let arr = [2, 3, 4, 5]
  let newArr = arr.map(numArr => Math.round(number/ numArr))
  console.log(newArr);
  return newArr;
  })
  .catch(() => console.log('Promise rejeitada')) 