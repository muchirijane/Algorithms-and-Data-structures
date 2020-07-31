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

function validAnagram(str1, str2) {
    if (str1.length !== str2.length){
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};


    for (let str of str1){
        frequencyCounter1[str] = (frequencyCounter1[str] || 0) +1;
    }
    for (let str of str2){
        frequencyCounter2[str] = (frequencyCounter2[str] || 0) +1;
    }


    for (let key in frequencyCounter1){
        if(frequencyCounter1[key] !== frequencyCounter2[key]){
            return false;
        }
    }
    console.log(frequencyCounter1, frequencyCounter2);
    return true;
}
// const result =validAnagram('texttwisttime', 'timetwisttext');
//const result =validAnagram('car', 'rat');
const result =validAnagram('aaz', 'zza');
console.log(result);

