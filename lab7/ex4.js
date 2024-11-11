let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");
let num3 = prompt("Enter third number");
let num4 = prompt("Enter fourth number");

num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);
num4 = Number(num4);

function getSum(number1, number2, number3, number4){
    let sum = number1 + number2 + number3 + number4;
    return sum;
}

let result = getSum(num1, num2, num3, num4);

document.write(num1 + " + " + num2 + " + " + num3 + " + " + num4 + " = " + result);
 