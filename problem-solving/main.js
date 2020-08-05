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

console.log(res3);
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