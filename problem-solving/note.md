## Steps to take to solve any problem
### Understand the problem
### Explore concrete examples
### Break it down
### Solve or simplify
### Look back and refactor

#### Problem solving patterns
+ Frequency counter
+ Multiple pointers
+ Sliding windows
+ Divide and conquer
+ Dynamic programming
+ Greedy Algorithms
+ Backtracking

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
