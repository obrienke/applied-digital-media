// Question 1
let day = prompt("Enter day");

if(day.toUpperCase == "WEDNESDAY"){
    document.getElementById("q1_msg").textContent = "Correct, it is Wednesday";
}else{
    document.getElementById("q1_msg").textContent = "Incorrect, it is not Wednesday";
}

// Question 2
let euro = 0.63;
let dollar = "dollar";
let output = "";
for(let i = 1; i <= 10; i++){
    output += i + " Australian " + dollar + " is worth " + (i * euro).toFixed(2) + " euro<br>";
    dollar="dollars";
}
document.getElementById("q2").innerHTML = output;

// Question 3
let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");
let result = num1 % num2 + num1 * num2;
alert(num1 + " % " + num2 + " + " + num1 + " * " + num2 + " = " + result);

// Question 4
document.getElementById("header").textContent = "Divs"
let divs = document.getElementsByTagName("div");
for(let i = 0; i < divs.length; i++){
    divs[i].textContent = "Div " + (i + 1); 
}

// Question 5

let length = 0;
let notOk = true;
do{
    length = prompt("Enter length");
    if(length < 1 || length > 10){
        alert("Length must be a value from 1 to 10 - Please re-enter");
    }else{
        notOk = false;
    }
}while(notOk);


