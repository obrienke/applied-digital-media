function addThreeNumbers(one, two, three){
    return one + two + three;
} 

let one = prompt("Enter first number");
let two = prompt("Enter second number");
let three = prompt("Enter third number");

let result = addThreeNumbers(Number(one), Number(two), Number(three));
document.write(one + " + " + two + " + " + three + " = " + result);