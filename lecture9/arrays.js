let primes = [2, 3, 5, 7, 11];
console.log(primes);

let misc = [1, 2.3, "Test", true];
console.log(misc);

let a = new Array(); // let a = []
console.log(a);

let b = new Array(1, 2);// let b = [1, 2] 
console.log(b);

let values = [];
values[0] = 100;
values[1] = 200;
console.log(values);

let x = [10, 20, 30];
x.push(100);
console.log(x);

y = x.pop();
console.log(y);
console.log(x);

let names = ["Jack","Fran","Andrei"];
console.log(names)
names.sort();
console.log(names)
names.reverse();
console.log(names)

let numbers = [1001, 12, 101];
numbers.sort()
console.log(numbers);

numbers.sort((a, b) => {return a - b;})
console.log(numbers);

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = arr1.concat(arr2);
console.log(arr3);
