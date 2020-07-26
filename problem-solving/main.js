const addup = (a, b) => {
    return a + b;
}
const results = addup(2,6);
console.log(results);

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
let str = {};
const countStr = (str) =>{
    let result = [...str];
    if(/[\w\s]+/.test(result)) {
        return result;
    }else{
        return result = 'Write an alphanumeric string';
    }
}

let string = countStr('Hello heeeeyyy 56789 gooooood');
console.log(string);

