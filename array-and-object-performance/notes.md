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
