let number = prompt("Enter a number");

let output;

if(number > 100){
    output = number + " is greater than 100"
}else if(number < 100){
    output = number + " is less than 100"
}else{
    output = number + " is equal to 100"
}

document.write(output);
