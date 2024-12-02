let numbers = [];

numbers[0] = 4;
numbers[1] = 3;
numbers[2] = 2;
numbers[3] = 1;

document.write(numbers+"<br>");
 
delete numbers[1];

document.write(numbers+"<br>");

numbers.pop();

document.write(numbers+"<br>");

numbers.push(1);

document.write(numbers+"<br>");

numbers[1] = 3;

document.write(numbers+"<br>");

let other = numbers.splice(2);

document.write(numbers+"<br>");
document.write(other+"<br>");

numbers.sort();
other.sort();

document.write(numbers+"<br>");
document.write(other+"<br>");

let combined = other.concat(numbers);

document.write(numbers+"<br>");
document.write(other+"<br>");
document.write(combined+"<br>");

