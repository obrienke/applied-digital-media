function maxNumber(num1, num2, num3){
    let max = num1;
    if(num2 > max){
        max = num2;
    }
    if(num3 > max){
        max = num3;
    }
    return max;
}

let num1 = 50, num2 = 20, num3 = 100;

alert("Largest number of " + num1 + ", " + num2 + " and " + num3 + " is " + maxNumber(num1, num2, num3));