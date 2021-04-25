/*********
function countDown(num){
  if(num <= 0){
      console.log('All done!!')
      return; //helps the count to stop when it's 0
  }

  console.log(num)
  num--;
  countDown(num)// our base
}

countDown(5)

function sumRange(num){
  if(num === 1) return 1;

  return num + sumRange(num - 1);
}

console.log(sumRange(3))

/* 
3) return 3 + sumRange(2) 5 + 3 = 6
2)return 2 + sumRange(1) 3
1) return 1 
*/
/**** 
function factorial(num){
  let total = 1;
  for (let i = num; i > 1; i--){
    total*= 1
  }
  return total;
}

const results = factorial(6)
console.log(results);

function factorialNum(num){
  if (num === 1) return 1;

  return num * factorialNum(num - 1)
  
}

const result = factorialNum(3);
console.log(result)
*/


/**************************************************************** */

/******* HELPER METHOD RECURSION */
/*
function outer(input){
  let outerScopedVariable = [];

  function helper (heplerInpur){
    helper(helperInput--);
  }
  helper(input);

  return outerScopedVariable;
}
*/

/*
const oddNumber = (arr) => {
  let result = [];

  function getOddValues (oddNumber){
    if(oddNumber.length === 0) {return};

    if(oddNumber[0] % 2 !== 0){
      result.push(oddNumber[0])
    }

    getOddValues(oddNumber.slice(1))
  }
  getOddValues(arr);
  return result;
}

console.log(oddNumber([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]))

*/
/********Pure RECURSION */
/*
function collectOddValues(arr) {
  let newArray = [];

  if(arr.length === 0) return;
  if(arr[0] % 2 !== 0) {
   newArray.push(arr[0]);
  }
  newArray = newArray.concat(collectOddValues( arr.slice(1)));
  return newArray;
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9,10,11,12]))
*/


// function collectOddValues(arr) {
//   let newArray = [];

//   if(arr.length === 0) return newArray;
//   if(arr[0] % 2 !== 0) {
//     newArray.push(arr[0]);
//   }

//   newArray = newArray.concat(collectOddValues(arr.slice(1)));
//   return newArray;
// }

// console.log(collectOddValues([1,2,3,4,5,6,7,8,9,10,11,12]));



// function fib(num){
//   // add whatever parameters you deem necessary - good luck!  
  
//   if(num <=2 ) return 1;
  
//   return fib(num - 1) + fib(num  - 2);
//   // 3 + 2
//   // 3 + 2 + 1 + 1  
// }

// console.log(fib(4));
// function reverse(str){
//   // add whatever parameters you deem necessary - good luck!
//   let newStr = [];
//   newStr = [...str];
//   if(str.length === 0) return;
//   newStr.reverse().join('');
//   console.log(newStr);
// }

// reverse('awesome');

/********** **********************************/
//
function isPalindrome(str){
  // add whatever parameters you deem necessary - good luck!
  let newStr = [];
  newStr = [...str];
    if(str.length === 0) return 1;
    newStr.push(newStr.reverse().join(''));
  

  // return str.concat('') === newStr ? true : false;
  let otherStr = [...str];
  
}

isPalindrome('awesome');