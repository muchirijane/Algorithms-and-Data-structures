## Arrays and Object Performance analysis

#### What is an Object
This is a non-primitive data type and it's unordered.
<br>
In Objects there is no beginnning or end, thus it's unordered. You can add at the beginning, middle or end of an object. You just have to create a key and value and add it to the object.

#### When do you use objects
+ When you don't need order
+ When you want fast access, insertion and removal

#### Big O notation for objects
+ Insertion => O(1)
+ Removal => O(1)
+ Access => O(1)
+ Searching => O(n)<br> 
It is linear.
As n grows the amount of time used to look for a value of a key increases.

#### Big O notation for object methods
+ Object.key => O(n) <br>
The more the keys in an object the more the runtime increases to get the keys.
+ Object.value => O(n) <br>
The more the values in an object the more the runtime increases to get the values.
+ Object.entries => O(n) <br>
The more the entries in an object the more the runtime increases to get the keys and the values(entries of an object).
+ Object.hasOwnProperty => O(1) <br>
This returns a constant time trend because the result returns a boolean.

#### What is an Array
Arrays stores different elements in order. 

#### Why use them
+ When you need order of elements
+ Access, insertion and removal may be faster 

#### Big O notation for arrays
+ Insertion => It depends
+ Removal => It depends
+ Access => O(1)
+ Searching => O(n)<br> 

### Examples
#### Accessing in arrays - Using the index to get the element
let popularLanguages = ["Javascript", "Java", "Python" "C++"]<br>
popularLanguages[0]; => Javascript
Even getting tje index of 1000000 position in an array is still constant, O(1).

#### Insertion and removal
When push/popping an element at the end of the array the runtime is constant, O(1). <br>
But inserting/removing an element at the beginning of the array takes more runtime as the array becomes bigger. Hence it is linear, O(n). <br>
Push and pop is faster than shift and unshift.

#### Searching
When looking for a specific element in an array, the computer needs to go through every element in the array, hence the runtime increases as the array grows. Therefore the big O notation will be O(n).

#### Big O notation on array operations
+ push => O(1)
+ pop => O(1)
+ shift => O(n)
+ unshift => O(n)
+ concat => O(n)
+ slice => O(n)
+ sort => O(n * log n)
+ filter, map, reduce, forEach => O(n)


