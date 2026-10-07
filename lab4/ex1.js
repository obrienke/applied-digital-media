let total = 0;
let counter = 1;
let number = 0;

do{
    number = prompt("Enter number " + counter);
    total += Number(number);
    counter++;
}while(counter <= 5);

let output = document.getElementById("average");
output.innerHTML = "<b>Total:</b> " + total;
output.innerHTML += "<br>";
output.innerHTML += "<b>Average:</b> " + (total/--counter);
