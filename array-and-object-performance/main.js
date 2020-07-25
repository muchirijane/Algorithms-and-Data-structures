// let codeJob = {
//     firstName: "Jane",
//     isprogrammer: true,
//     favoriteLanguages: ["Javascript", "Pthyon"]
// }

// const result = codeJob.favoriteLanguages;
// console.log(result);

// const methodResult = Object.values(codeJob);
// console.log(methodResult);

//Array

let planets = ["Mercury", "venus", "earth", "jupiter", "saturn", "neptune", "pluto"];
let names = ["jane", "bob", "kyle", "jude", "monicah", "ross"]

//pop - The pop() method removes the last element from an array and returns that element. 
// const result = planets.pop();

// Push - The push() method adds zero or more elements to the end of an array 
//and returns the new length of the array.
//const result = planets.push("Mars");

//shift - The shift() method removes the first element from an array and
// returns that removed element. This method changes the length of the array.
// const result = planets.shift();


//The unshift() method adds one or more elements to the beginning of an array 
//and returns the new length of the array.
// const result = planets.unshift("mars");

//The concat() method is used to merge two or more arrays. This method does 
//not change the existing arrays, but instead returns a new array
// const result = planets.concat(names);

//The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end 
//Slice - when the length of elements (n) you are trying to copy 
//increases so does the runtime => O(n)
//const result = planets.slice(2,5);

//he splice() method changes the contents of an array by removing or 
//replacing existing elements and/or adding new elements in place.
// whether adding or removing elements at the beginning, middle or end, 
//there is shifting of indexing in the array. The big O is => O(n)
const result = planets.splice(2,4 ,'mars')
console.log(planets, result);

