# Algorithms-and-Data-structures

## Steps to take to solve any problem

### Understand the problem

### Explore concrete examples

### Break it down

### Solve or simplify

### Look back and refactor

#### Problem solving patterns

- Frequency counter
- Multiple pointers
- Sliding windows
- Divide and conquer
- Dynamic programming
- Greedy Algorithms
- Backtracking

## Questions

#### 1) Write a function called same, which accepts two arrays .

#### The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of the values should be the same.

#### 2) Given two strings, write a function to determine if the second string is an anagram of the first string.

#### An anagram is a word, phrase , or name formed by rearranging the letters of another , such as cinema, formed from iceman.

//Multiple pointers

#### 3) Write a function called sumZero which accepts sorted array of integers. The function should find the first pair that sums up to 0. Return a array that inludes both values that sums to zero or undefined if the pair does not exist.

sumZero([-3,-2,-1,1,2,3]) -3,3 \
sumZero([-2,0,1,3]) undefined\
sumZero([1,2,3]) undefined\
time complexity = 0(n)\
space complexity = 0(1)

#### 4) Implement a function called countUniqueValues, which accepts a sorted arry, and the unique values in the array. There can be negative number in the array but have to be sorted.

countUniqueValues([1,1,1,1,1,2]) //2 \
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) //7\
countUniqueValues([]) //0\
countUniqueValues([-2,-1,-1,0,1]) //4

---

## Recursion in JavScript

#### Objectives

- Define what recursion is and how it's used
- Understand the two essential components of a recursive function
- Visualize the call stack to better debug and understand recursive funtions
- Use helper method recursion aand pure recursion to solve more difficult problems.

#### What is recursion

A process(for our cas it's the function) that calls itself.
example

- JSON.parse/ JSON.stringify
- document.getElementById and DOM traversal algorithms
- Object traversal

Recursion is sometimes a better option than iteration

- A call stack is where a function is invoked it is placed on top of a call stack. When Javascript sees the return keyword or when the function ends, the compiler will remove (pop). Example when you place a paper on top of your desk, then you place another paper on top of it. When you want to remove a paper, your quickly rremove the one on top to use it.

#### Examples

- getElementById
- JSON.parse/ JSON.stringify()
- Dom traversal Algorathims.

#### How recursive functions works

- Invoke the same function with a different input until you reach your base case!! The input will have different data when it called.
- The base case is where the recursion stops.

#### Some questions

- What tool does Javascript use to manage function inovacations ? `Call stack`
- What is base case = A situation when the recursion ends

#### Mistakes to avoid

- No base case - callstack multiple times and it will exceed the number of calls. This will led to stackOverflow. JavaScriptCore has hard-coded argument limit of 65536.
- Forgetting to return or returning in the wrong place.

-In the example below the countDown function will be called to infinity until your browser crashes. This is beacause it will accept even -ve numbers and continue running.

- The mistake here is in the base case we didn't return when the condition is achieved.

```js
function countDown(num) {
  if (num <= 0) {
    console.log("All done !!!!");
  }

  num--;
  console.log(num);
  countDown(num);
}

countDown(5);
```

Example 2

- Finding the sum range of an input in the function argument.

```js
function sumRange(num) {
  if (num === 1) return 1;
  console.log(num);
  return num + sumRange(num - 1);
}

console.log(sumRange(3));
//output 6
```

- Here ia the solution

```js
when num = 3
3 is not 1, it will go to the next operation on the next line
return 3 + sumRange (2) //3 - 1 = 2
3
2 is not 1, it will go to the next operation on the next line
return 2 + sumRange(1) //2 - 1 = 1
2
When the sumRange is 1 it will return 1 from our base case  if (num === 1) return 1;
1

1 + 2 + 3 = 6

```

---🦖
Questions

This is a combination of notes and examples as I learn Data structures and algorithms by Colt Steele
