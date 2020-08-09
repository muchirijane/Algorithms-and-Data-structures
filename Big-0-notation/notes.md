## What is Big O notation
#### This is a way to formalize fuzzy counting.
#### This means it allows us to talk formally about how the runtime of the algorithm grows as the input grow. 
#### To summarize this, it basically means that big O notation is the relaionship between the input(n) of a function and how it changes (incr) the runtime to get the results.
#### What's the most important thing to  note
+ Is the code faster 
+ Does it occupy less space memory
+ Is it more readable?

We can say that an algorithm is O(f(n)) if the number of the simple operations the computer has to do is eventually less than the times f(n), as n increases.

#### f(n) - linear = ( f(n) = n )
As the input of a function increases the runtime also increases
#### f(n) - quadrantic = ( f(n) = n ^ 2 )
As the input of a function increases the runtime squares as the input squares.
#### f(n) - constant ( f(n) = 1 )
As the input of a function increases the runtime doesn't change it remains constant.
#### f(n) - could be something different.

#### Smaller terms does not matter.
#### O(n + 10) =>  O(n)
#### O(1000n + 50) => O(n)
#### O(n2 + 5n + 6) => O(n * n)/ O(n2)
#### O(n^2 + n^3) => O(n^3) 

### Important to note
#### Arithmetic operations are constant.
It takes the same amount of to do 3 + 3 and 3 + 1000000000. Whether it's +,/ , * your computer takes the same amount of time to do the operations.
#### Variable assignment is constant.
The amount of time your computer takes to assign a variable x to 100, is the same amount of time to assign variable y to 1000000
#### Accessing elements in an array (by index) or object (by key) is constant.
#### In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop.

#### Time complexity - is the runtime of an algorithm as the input increases.

#### Auxiliary space complexity -  is the space an algorithm takes not including the space taking up as the input increases.

#### Important to note in space complexity
+ Most primitives (booleans, numbers, undefined, null) are constant.
+ Strings require O(n) space where (n is the length of the string).
+ Reference types are generally O(n). Example of reference types : arrays, objects. In array n is the length of the array while in object n is the number of the keys in the object.
