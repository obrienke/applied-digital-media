let first = prompt("Enter first number", 4);
let second = prompt("Enter second number", 2);

let add = Number(first) + Number(second);
let sub = first - second;
let product = first * second;

let output = first + " + " + second + " = " + add + "\n";
output += first + " - " + second + " = " + sub + "\n";
output += first + " * " + second + " = " + product;

alert(output);


