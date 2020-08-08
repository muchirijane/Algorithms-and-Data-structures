/*
const addup = (a, b) => {
    return a + b;
}
const results = addup(2,6);
console.log(results);
*/
// question 
//write a function that takes a alphanumeric string and converts it into separate individual characters
// output: can take any numbers or any text whether uppercase or lowercase

//solution one
// function countStr (str){
//     let result = {};

//     for(let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase();
//         const regex = /[\w]+/;
//         if(regex.test(char)) {
//             if(result[char] > 0){
//                 result[char]++;
//             }else{
//                 result[char] = 1;
//             }
//         }
//     }
    
//     return result;
// }

// let string = countStr('Hello heeeeyyy gooooood');
// console.log(string);

//solution two 
// let str = {};
// const countStr = (str) =>{
//     let result = [...str];
//     if(/[\w\s]+/.test(result)) {
//         return result;
//     }else{
//         return result = 'Write an alphanumeric string';
//     }
// }

// let string = countStr('Hello heeeeyyy 56789 gooooood');
// console.log(string);

//refactor solution two 
// let str = {};
// const countStr = (str) =>{
//     let result = [...str];
//     let regex = /[\w\s]+/;
//     regex.test(result) ?  result : 'Write an alphanumeric string';
//     return result;
// }

// let string = countStr('Hello heeeeyyy 56789 gooooood');
// console.log(string);

//Problem solving patterns

//question 1
//Write a function called same, which accepts two arrays . 
//The function should return true if every value in the array has its corresponding value squared
// in the second array. The frequency of the values should be the same.


//solution 
//Make the output be same([1,2,1], [4, 4, 1]) true same([1,2,3], [1,9]) false
// function same(arr1, arr2) {
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     let frequencyCounter1 = {};
//     let frequencyCounter2 = {};

//     for (let val of arr1){
//         frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//     }
//     for (let val of arr2){
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//     }

//     for (let key in frequencyCounter1){
//         if (!(key ** 2 in frequencyCounter2)){
//             return false;
//         }
//         if(frequencyCounter2[key **2] !== frequencyCounter1[key]){
//             return false;
//         }
//     }
//     console.log(frequencyCounter1);
//     console.log(frequencyCounter2);
//     return true;
// }

// const result = same([1,2,3,2], [9, 1, 4, 4]);
// console.log(result);

// const same = (arr1, arr2)  =>{
//     if (arr1.length !== arr2.length){
//         return false;
//     }

//     let frequencyCounter1 = {};
//     let frequencyCounter2 = {};

//     arr1.forEach( arr => {
//         frequencyCounter1[arr] = (frequencyCounter1[arr] || 0) +1;
//     })

//     arr2.forEach( arr => {
//         frequencyCounter2[arr] = (frequencyCounter2[arr] || 0) +1;
//     })

//     console.log(frequencyCounter1);
//     console.log(frequencyCounter2);

//     for(let key in frequencyCounter1){
//         let doubleKey = key ** 2;
//         doubleKey in frequencyCounter2 ? true : false;
//         frequencyCounter2[doubleKey] !== frequencyCounter1[key] ? true : false;
//     }
         

//     console.log(frequencyCounter1);
//     console.log(frequencyCounter2);

//     return true;
// }

// const result = same([1,2,3,2], [9, 1, 4, 4]);
// console.log(result);

// // Question two
// //Given two strings, write a function to determine if the second string is an anagram of the first string.
// //An anagram is a word, phrase , or name formed by rearranging the letters of another , such as cinema, formed from iceman.
//method one
// function validAnagram(str1, str2) {
//     if (str1.length !== str2.length){
//         return false;
//     }

//     let frequencyCounter1 = {};
//     let frequencyCounter2 = {};


//     for (let str of str1){
//         frequencyCounter1[str] = (frequencyCounter1[str] || 0) +1;
//     }
//     for (let str of str2){
//         frequencyCounter2[str] = (frequencyCounter2[str] || 0) +1;
//     }


//     for (let key in frequencyCounter1){
//         if(frequencyCounter1[key] !== frequencyCounter2[key]){
//             return false;
//         }
//     }
//     console.log(frequencyCounter1, frequencyCounter2);
//     return true;
// }
// // const result =validAnagram('texttwisttime', 'timetwisttext');
// //const result =validAnagram('car', 'rat');
// const result =validAnagram('aaz', 'zza');
// console.log(result);
//////////////////////////////////////////////////////////////////////////////////////////////
//************************************ Multiple pointers ************************** 
/*
Write a function called sumZero which accepts sorted array of integers. The function should find the first pair 
that sums up to 0. Return a array that inludes both values that sums to zero or undefined if the pair does not exist.
sumZero([-3,-2,-1,1,2,3]) -3,3 
sumZero([-1,1,3,2,4,0,-3,-2,-4]); -4,4
sumZero([-2,0,1,3]) undefined
sumZero([1,2,3]) undefined
time complexity = 0(n)
space complexity = 0(1)
*/
/*
const sumZero = (arrs) =>{
   arrs.sort();
   
   let left = 0;
   let right = arrs.length -1;

   
   while(left < right){
       let sum = arrs[left] + arrs[right];
       if(sum === 0){
           return [arrs[left], arrs[right]];
       }else if(sum > 0){
           left ++;
       }else{
           right--;
       }
   }
}

//const res1 = sumZero([-3,-2,-1,0,1,2,3]);
//const res2 = sumZero([-3,-2,-1,0,3,2,1]);
const res3 = sumZero([-1,1,3,2,4,0,-3,-2,-4]);
const res4 = sumZero([1,2,3,4]);

console.log(res4);
*/

/* 
count unique values 
Implement a function called countUniqueValues, which accepts a sorted arry, and the unique values in the array.
There can be negative number in the array but have to be sorted.
countUniqueValues([1,1,1,1,1,2]) //2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) //7
countUniqueValues([]) //0
countUniqueValues([-2,-1,-1,0,1]) //4
*/
/*
//SOLUTION ONE

const countUniqueValues = (arr) =>{
    arr.sort();

    if(arr.length === 0) return 0;

    var j = 0 ;
    for (let i = 1; i < arr.length; i++){
        if (arr[i] !== arr[j]){
            i++;
            arr[j] = arr[i];
        }
        return i + 1;
    }
    
    
       
}
//SOLUTION two
const countUniqueValues = (arr) =>{
    arr.sort();

    if(arr.length === 0) return 0;

    let first = 0;
    let second = arr.length - 1;
     if(arr[first] !== arr[second]){
       let  arr2 = new Set(arr);
         return arr2.size;
     }       
}

const res1 = countUniqueValues([1,1,1,1,1,2]);
const res2 = countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])
const res3 = countUniqueValues([])
const res4 = countUniqueValues([-2,-1,-1,0,1]) //4
console.log(res1);
*/

/////////////////////////////////////////////////////////////////////////////////////////
///////////////////*******************  Sliding window  ********************************/
/**
 * What is a sliding window
 This pattern involves creating a window which can either be  an array or a number from one position to other.
 Depending on a certain condition, the window can either increases or closes (and a new window will be created)
 It's very useful when keeping track of a subset of an array.
*/

/*
Write a function called maxSubarraySum which accepts an array of integers and a number of n. The sum should 
calculate the maximum sum of n consecutive elements in an array.
Time complexity = 0(n)
maxSubarraySum([1,2,5,2,8,1,5], 2) //10
maxSubarraySum([1,2,5,2,8,1,5], 4) //17
maxSubarraySum([4,2,1,6], 1) //6
maxSubarraySum([4,2,1,6,2], 4) //13
maxSubarraySum([], 4) //null
*/
/*
function maxSubarraySum (arr, num){
    let currentSum = 0;
    let nextSum = 0;
    if(num > arr.length) return null

    for(let i = 0; i < num; i++){
       currentSum += arr[i];
       //console.log(currentSum);
    }
    for(let i = num; i < arr.length; i++){
        nextSum = currentSum - arr[i - num] + arr[i];
        console.log(currentSum);
        console.log(arr[i - num]);
        console.log(arr[i]);
        console.log(nextSum);
        currentSum = Math.max(currentSum, nextSum);
        console.log(currentSum);
    }
    return currentSum;
}

//const res1 = maxSubarraySum([1,2,5,2,8,1,5], 4) //17
const res2 = maxSubarraySum([1,2,5,2,8,1,5], 2) //10
console.log(res2);
*/

/**
 * Divide and conquer
 * This patterns involves diving a data set into smaller chunks and then reapting a process with a subset of data.
 * This pattern can decrease time complexity
 */



 // *****************Problem pattern Challenges *****************************/
 /////////////////////// Question one /////////////////////////////////////////////////////
 /*
 Write a function called sameFrequency. Given two positive integers, find out if two intergers have the same frequency of digits.
 Your solution must have the following🧮 
 Time complexity = 0(n)
 sameFrequency(182,281); //true
 sameFrequency(34,14); //false
 sameFrequency(3589578, 5879385); //true
 sameFrequency(22,222); //false
 */
/*
function sameFrequency(num1,num2){
    // good luck. Add any arguments you deem necessary.
    let numStr1 = num1.toString();
    let numStr2 = num2.toString();
    if(numStr1.length !== numStr2.length) return false;

    let countNum1 = {};
    let countNum2 = {};

    for(let i = 0; i < numStr1.length; i++){
        countNum1[numStr1[i]] =  (countNum1[numStr1[i]] || 0)+ 1;
    }
    for(let i = 0; i < numStr2.length; i++){
        countNum2[numStr2[i]] =  (countNum2[numStr2[i]] || 0)+ 1;
    }
    console.log(countNum1, countNum2);

    for(let key in countNum1){
        if(countNum1[key] !== countNum2[key]) return false;
    }
    return true;

}
  
  const res1 = sameFrequency(182,281);
  console.log(res1);
*/

/**
 * Implement a function called, areThereDublicates which accepts a variable number of arguments and checks whether there are
 * any dublicates aming the arguments passed in. You can solve this using the frequency counter pattern or the multiple pointers pattern
 * areThereDuplicates(1,2,3) //false
 * areThereDuplicates(1,2,2) //true
 * areThereDuplicates('a', 'b', 'c', 'a') //true
 * I used mutple pointers but you can use sets also.
 */  

// const areThereDuplicates = (...str) => {
//     str.sort((a,b)=> a > b);
//     str.toString();
//     console.log(str);
//     let first = 0;
//     let second = 1;

//     while(first < str.length){
//         if(str[first] === str[second]){
//             return true;
//         }
//         first ++;
//         second ++;
//     }
//     return false;
// }

// const res1 = areThereDuplicates(1,2,3) //true
// const res2 = areThereDuplicates('a', 'b', 'c', 'a') //true
// console.log(res2);

const areThereDuplicates = (...arr) =>{
    return new Set(arr).size !== arr.length;
}

const res1 = areThereDuplicates(1,2,2); //true
const res2 = areThereDuplicates('a', 'b', 'c', 'a'); //true
console.log(res2);