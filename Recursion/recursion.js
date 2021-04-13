// function countDown(num){
//   if(num <= 0){
//       console.log('All done!!')
//       return; //helps the count to stop when it's 0
//   }

//   console.log(num)
//   num--;
//   countDown(num)// our base
// }

// countDown(5)

// function sumRange(num){
//   if(num === 1) return 1;

//   return num + sumRange(num - 1);
// }

// console.log(sumRange(3))

/* 
3) return 3 + sumRange(2) 5 + 3 = 6
2)return 2 + sumRange(1) 3
1) return 1 
*/

// function factorial(num){
//   let total = 1;
//   for (let i = num; i > 1; i--){
//     total*= 1
//   }
//   return total;
// }

// const results = factorial(6)
// console.log(results);

// function factorialNum(num){
//   if (num === 1) return 1;

//   return num * factorialNum(num - 1)
  
// }

// const result = factorialNum(3);
// console.log(result)





function factorial (num){
  if(num === 1) return 1;
  console.log(num);
  return num * factorial(num - 1);
}

console.log(factorial(4));

