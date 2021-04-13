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
