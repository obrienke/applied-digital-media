function celsiusToFahrenheit(celsius){
    return celsius * 1.8 + 32
} 

let celcius = prompt("Enter value for celcius");
let fahrenheit = celsiusToFahrenheit(celcius);
alert(celcius + " degress celcius is " + fahrenheit + " degrees fahrenheit");
