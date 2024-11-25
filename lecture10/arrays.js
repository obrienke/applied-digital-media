// create array
// 1. array literal

let empty = []; // An array with no elements
console.log(empty); // []
let primes = [2, 3, 5, 7, 11]; // An array with 5 numeric elements
console.log(primes); // [ 2, 3, 5, 7, 11 ]
let misc = [ 1.1, true, "a", ]; // 3 elements of different types + trailing comma
console.log(misc); // [ 1.1, true, "a" ]

// 2. array constructor
let a = new Array(); // no arguments. Empty array.
console.log(a); // []
let b = new Array(10); // single numeric argument, which specifies a length
console.log(b); // [ <10 empty slots> ]

// specify two or more array elements or a single non-numeric element for the array
let c = new Array(5, 4, 3, 2, 1, "testing, testing"); 
console.log(c); // [ 5, 4, 3, 2, 1, "testing, testing" ]

// Note: Using an array literal is almost always simpler 
// than the usage of the Array() constructor.

// array length - use length property to determine number of elements array can or does store.
let d = new Array(5, 4, 3, 2, 1, "testing, testing");
console.log(d.length); // 6

// create an empty array and add some elements and delete some.
let values = [];
values[0] = "First element";
values[1] = "Second element";
console.log(values); // [ "First element", "Second element" ]
console.log(values[1]); // Second element

values[2] = "Third element";
console.log(values); // [ "First element", "Second element", "Third element" ]

delete values[1]; // removes Second element
console.log(values); //[ "First element", <1 empty slot>, "Third element" ]
values.length // still 3, just removed the value assigned to index 1 and not index 1. 
1 in values; // returns false as no value assigned to index 1.
0 in values; // // returns true

// pop - removes the last element from an array and returns that element
let e = ["First", "Second", "Third", "Fourth"];
console.log(e); // [ "First", "Second", "Third", "Fourth" ]
e.pop();  
console.log(e); // [ "First", "Second", "Third" ]
let x = e.pop();
console.log(x); // Third
console.log(e); // [ "First", "Second" ]

// push - adds one or more elements to the end of an array and returns the new length of the array.
let f = ["First", "Second"];
console.log(f); // ["First", "Second"]
console.log(f.push("Third")); // 3
console.log(f); // [ "First", "Second", "Third" ]


// splice - changes the contents of an array by removing existing elements and/or adding new elements.
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
let g = ["First", "Second", "Third", "Fourth"];
console.log(g); // ["First", "Second", "Third", "Fourth"]
console.log(g.splice(1,2)); // ["Second", "Third"]
console.log(g); // [ "First", "Fourth" ]
g.splice(1, 0, "Second"); // at index 1, delete nothing (0), add value "Second"
console.log(g); // [ "First", "Second", "Fourth" ]
g.splice(2, 0, "Third"); // at index 2, delete nothing (0), add value "Third"
console.log(g); // [ "First", "Second", "Third", "Fourth" ]

// sort - sorts the elements of an array, string alphbetically and numbers in ascending order.
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort 
let numbers = [3, 1, 4, 2, 6, 5];
console.log(numbers.sort()); // [ 1, 2, 3, 4, 5, 6 ]
let names = ["Joe", "Amy", "Evelyn", "Dermot"];
console.log(names.sort()); [ "Amy", "Dermot", "Evelyn", "Joe" ]

// search arrays with indexOf - returns the first index at which a given element can be found 
// in the array, or -1 if it is not present
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
let months = ["January", "February", "March"];
console.log(months.indexOf("February")); // 1
console.log(months.indexOf("October")); // -1

// multi-dimensional array
let mda = [[1, 2, 3],["Test 1", "Test 2"]];
console.log(mda[0][2]); // 3
console.log(mda[0][0]); // 1
console.log(mda[1][1]); // Test 2

console.log(mda[0]); 

let array1 = mda[0];
console.log(array1); // [ 1, 2, 3 ]
for(let i = 0; i < array1.length; i++)
	console.log(array1[i]); // 1 2 3

// forEach - executes a provided function once for each array element.
array1.forEach(function(element) {
  console.log(element); // 1 2 3
});

// iterate a multidimensional array
for(let i = 0; i < mda.length; i++)
	for(let j = 0; j < mda[i].length; j++)
		console.log(mda[i][j]); // 1 2 3 Test 1 Test 2
	

