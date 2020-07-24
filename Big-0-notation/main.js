//Suppose we want to write a function that calculate the sum of all numbers from 1 up to n. Write a function that calculates it.
/*
let addNumbers = (n)=>{
    let total = 0;

    for (let i = 1; i<= n; i++) {
         total += i;
    }
    return total;
}

console.log(addNumbers(7));


let addNumbers2 = (n) =>{
    return n * (n + 1) /2;
    // 7 * (7+ 1) /2
}

console.log(addNumbers2(7));

*/
//Timimg our code 
/*
let addNumbers = (n)=>{
    let total = 0;

    for (let i = 1; i<= n; i++) {
         total += i;
    }
    return total;
}
let test1 = performance.now();
console.log(addNumbers(1000000000));
let test2 = performance.now();
console.log(`It takes ${(test2 - test1) / 1000} seconds`);

let addNumbers2 = (n) =>{
    return n * (n + 1) /2;
    // 7 * (7+ 1) /2
}
let test3 = performance.now();
console.log(addNumbers2(1000000000));
let test4 = performance.now();
console.log(`It takes ${(test4 - test3) / 1000}  seconds`);
*/
//Big O notation
/*
const countUpAndDown = (n) =>{
    console.log("Going up!");
    for (var i = 0; i < n; i++) {
      console.log(i + 1);
    }
    console.log("At the top!\nGoing down...");
    for (var j = n - 1; j >= 0; j--) {
      console.log(j + 1);
    }
    console.log("Back down. Bye!");
}
countUpAndDown(20);

const printAllPairs = (n)=> {
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        console.log(i, j);
      }
    }
}

printAllPairs(10);
*/

// const numbers = (n) => {
//     for(let i = 1; i <= Math.max(5, n); i++){
//         console.log(i);
//     }
// }

// numbers(3);

const numbers = (n) => {
    for(let i = 1; i <= Math.min(n, 5); i++){
        console.log(i);
    }
}

numbers(6);

//Determine the time complexity of the following functions
function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
    //O(n) yes
    //O(n^2) no
    //O(n log n)
}
function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
    //O(1)
}

function logAtLeast10(n) {
    for (var i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
    //O(n)
}

function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
    //O(n)
}

function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;

    //O(n^2)
}
// Auxiliary space complexity

const sumArr = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
    //O(1) space - this means the space is the same no matter the input. 
    //Therefore the input increasing or decreasing doesn't affect the space.

}

const doubleArr = (arr) => {
    let arrTotal = [];
    for(let i = 0; i < arr.length; i++) {
        arrTotal.push(2 * arr[i]);
    }
    return arrTotal; // return n numbers
    //O(n) space
}

//Quizes on space complexity
//1
function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
    //O(1) yes
    //O(n) no
    //O(n log n) no
}

//2
function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
    //O(1) yes
    //O(n) no
    //O(n log n) no
}

//3
function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
    //O(n) yes
    //O(n ^ 2) no
    //O(n log n) no
}

//4
function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
    //O(n)
}


